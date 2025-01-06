import { File } from '@koa/multer';

import { fileUtil } from 'utils';

import {
  ALLOWED_WORK_EXTENSIONS,
  ONE_MB_IN_BYTES,
  WORK_ATTACHMENT_SIZE_RESTRICTIONS,
  WORK_ATTACHMENT_TYPES,
} from 'app-constants';
import { AppKoaContext, AttachmentType } from 'types';

export const validateAttachments = async (
  ctx: AppKoaContext,
  attachments: File,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadedAttachments?: any[],
  attachmentsToRemove?: string[],
) => {
  const attachmentsLength =
    attachments.length + (uploadedAttachments?.length || 0) - (attachmentsToRemove?.length || 0);

  ctx.assertClientError(attachmentsLength <= 3, { global: 'You can upload up to 3 photos or videos.' }, 400);

  for (const attachment of attachments) {
    const { fileName, fileExtension, fileType } = fileUtil.getFileParams(attachment);

    ctx.assertClientError(WORK_ATTACHMENT_TYPES[fileExtension], {
      global: `Incorrect attachment extension. 
      Please, use following extensions for the attachments: ${ALLOWED_WORK_EXTENSIONS.join(', ')}.`,
    });

    const attachmentSizeInMB = attachment.size / ONE_MB_IN_BYTES;

    const isImageValid =
      fileType === AttachmentType.IMAGE && attachmentSizeInMB < WORK_ATTACHMENT_SIZE_RESTRICTIONS.image;
    const isVideoValid =
      fileType === AttachmentType.VIDEO && attachmentSizeInMB < WORK_ATTACHMENT_SIZE_RESTRICTIONS.video;

    ctx.assertClientError(isVideoValid || isImageValid, {
      global: `The file ${fileName} is too large. 
      Maximum allowed size - ${WORK_ATTACHMENT_SIZE_RESTRICTIONS.image} MB (images), ${WORK_ATTACHMENT_SIZE_RESTRICTIONS.video} MB (videos).`,
    });
  }
};
