import { FC, useState } from 'react';
import { Image, Stack, Text } from '@mantine/core';
import {
  Dropzone as MantineDropzone,
  DropzoneProps as MantineDropzoneProps,
  FileRejection,
  FileWithPath,
} from '@mantine/dropzone';
import { showNotification } from '@mantine/notifications';
import { FaCircleMinus } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';

import { NotificationIcon, VideoPlayer } from 'components';

import { ATTACHMENT_TYPES, ONE_MB_IN_BYTES, WORK_ATTACHMENT_SIZE_RESTRICTIONS } from 'app-constants';
import { AttachmentType, DropzoneFileRejectionErrorsCode, NotificationType } from 'types';

import classes from './index.module.css';

interface DropzoneProps extends Partial<MantineDropzoneProps> {
  w?: number | string;
  h?: number;
  accept?: string[];
  uploadedFileUrl?: string;
  attachmentType: AttachmentType;
  removeFileHandler: () => void;
  loading?: boolean;
}

const Dropzone: FC<DropzoneProps> = ({
  onDrop,
  w = '100%',
  h = 114,
  accept = ['image/png', 'image/jpg', 'image/jpeg', 'video/mp4', 'image/heic', 'video/quicktime', 'image/tiff'],
  removeFileHandler,
  uploadedFileUrl,
  attachmentType,
  loading,
  ...rest
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFileLoading, setIsFileLoading] = useState(false);

  const isFileSizeCorrect = (file: FileWithPath) => {
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

    const fileType = ATTACHMENT_TYPES[fileExtension];

    const fileSizeInMB = file.size / ONE_MB_IN_BYTES;

    const isImageValid = fileSizeInMB < WORK_ATTACHMENT_SIZE_RESTRICTIONS.image;
    const isVideoValid = fileType === AttachmentType.VIDEO && fileSizeInMB < WORK_ATTACHMENT_SIZE_RESTRICTIONS.video;

    if (fileType === AttachmentType.IMAGE) return isImageValid;

    if (fileType === AttachmentType.VIDEO) return isVideoValid;

    return false;
  };

  const rejectHandler = (fileRejections: FileRejection[]) => {
    const isFilesLengthInvalid = fileRejections.some((r) => {
      if (r.errors.some((e) => e.code === DropzoneFileRejectionErrorsCode.TOO_MANY_FILES)) {
        return true;
      }

      return false;
    });

    if (isFilesLengthInvalid) {
      showNotification({
        title: 'Error',
        message: 'Sorry, you can only upload 3 files.',
        color: 'white',
        icon: <NotificationIcon type={NotificationType.ERROR} />,
      });
    }

    fileRejections.forEach((r) => {
      if (r.errors.some((e) => e.code === DropzoneFileRejectionErrorsCode.INVALID_TYPE)) {
        setErrorMessage(`Sorry, you can only upload ${accept.map((a) => a.split('/')[1]).join(', ')} files.`);
      }
    });
  };

  const handleUpload = async (files: FileWithPath[]) => {
    setIsFileLoading(true);

    setErrorMessage(null);

    const isFilesSizeCorrect = files.every((file) => isFileSizeCorrect(file));

    if (!isFilesSizeCorrect) {
      showNotification({
        title: 'Error',
        message: `The file is too large. Maximum allowed size - ${WORK_ATTACHMENT_SIZE_RESTRICTIONS.image} MB (images), ${WORK_ATTACHMENT_SIZE_RESTRICTIONS.video} MB (videos).`,
        color: 'white',
        icon: <NotificationIcon type={NotificationType.ERROR} />,
      });
    }

    if (files && onDrop && isFilesSizeCorrect) {
      onDrop(files);
    }

    setIsFileLoading(false);
  };

  const renderDropzone = () => (
    <MantineDropzone
      w="100%"
      name="attachmentUrl"
      pos="relative"
      accept={accept}
      loading={isFileLoading || loading}
      onDrop={handleUpload}
      onReject={rejectHandler}
      classNames={{
        root: classes.dropzoneRoot,
      }}
      {...rest}
    >
      <Stack h={h} w="100%" className={classes.dropzoneBody}>
        {!loading && !isFileLoading && <GoPlus />}
      </Stack>
    </MantineDropzone>
  );

  return (
    <Stack gap={4} w={w}>
      {uploadedFileUrl ? (
        <Stack h={h} className={classes.uploadedImgWrapper}>
          {attachmentType === AttachmentType.IMAGE && (
            <Image fit="cover" radius={8} mih="100%" w="100%" src={uploadedFileUrl} alt="Uploaded file" />
          )}

          {attachmentType === AttachmentType.VIDEO && (
            <VideoPlayer
              containerHeight="100%"
              objectFit="cover"
              src={uploadedFileUrl}
              width="100%"
              height="100%"
              borderRadius="8px"
            />
          )}

          <FaCircleMinus onClick={removeFileHandler} size={24} className={classes.removeImgIcon} />
        </Stack>
      ) : (
        <>
          {renderDropzone()}
          {!!errorMessage && (
            <Text fz={14} lh={1.7} c="red.5">
              {errorMessage}
            </Text>
          )}
        </>
      )}
    </Stack>
  );
};

export default Dropzone;
