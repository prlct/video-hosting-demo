import { AttachmentType } from 'enums';

export const ONE_MB_IN_BYTES = 1_048_576;

export const IMAGE_MIME_TYPE = ['image/jpg', 'image/jpeg', 'image/png'];

export const USER_AVATAR = {
  MAX_FILE_SIZE: 3 * ONE_MB_IN_BYTES,
  ACCEPTED_FILE_TYPES: IMAGE_MIME_TYPE,
};

export const IMAGE_EXTENSIONS = ['.gif', '.jpeg', '.jpg', '.png', '.tiff', '.heic'];
export const IMAGE_MIMETYPES = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/tiff', 'image/heic'];

export const VIDEO_EXTENSIONS = ['.mp4', '.mov'];
export const VIDEO_MIMETYPES = ['video/mp4', 'video/quicktime'];

export const DOCUMENT_EXTENSIONS = ['.pdf'];
export const DOCUMENT_MIMETYPES = ['application/pdf'];

export const ALLOWED_EXTENSIONS = [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS];

export const ATTACHMENT_TYPES: Record<string, AttachmentType> = {
  ...IMAGE_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
  ...IMAGE_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
  ...VIDEO_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.VIDEO }), {}),
  ...VIDEO_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.VIDEO }), {}),
  ...DOCUMENT_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.DOCUMENT }), {}),
  ...DOCUMENT_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.DOCUMENT }), {}),
};

export const AVATAR_EXTENSIONS = ['.jpeg', '.jpg', '.png', '.heic'];
export const AVATAR_MIMETYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'];

export const AVATAR_ATTACHMENT_TYPES: Record<string, AttachmentType> = {
  ...AVATAR_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
  ...AVATAR_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
};

export const AVATAR_SIZE_RESTRICTION = 10;

export const WORK_IMAGE_EXTENSIONS = ['.gif', '.jpeg', '.jpg', '.png', '.tiff', '.heic'];
export const WORK_IMAGE_MIMETYPES = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/tiff', 'image/heic'];

export const WORK_VIDEO_EXTENSIONS = ['.mp4', '.mov'];
export const WORK_VIDEO_MIMETYPES = ['video/mp4', 'video/quicktime'];

export const ALLOWED_WORK_EXTENSIONS = [...WORK_IMAGE_EXTENSIONS, ...WORK_VIDEO_EXTENSIONS];

export const WORK_ATTACHMENT_TYPES: Record<string, AttachmentType> = {
  ...WORK_IMAGE_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
  ...WORK_IMAGE_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.IMAGE }), {}),
  ...WORK_VIDEO_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.VIDEO }), {}),
  ...WORK_VIDEO_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.VIDEO }), {}),
};

export const WORK_ATTACHMENT_SIZE_RESTRICTIONS = {
  image: 10,
  video: 50,
};

export const JOB_OFFER_ATTACHMENT_EXTENSIONS = ['.pdf'];
export const JOB_OFFER_ATTACHMENT_MIMETYPES = ['application/pdf'];
export const JOB_OFFER_ATTACHMENT_SIZE_RESTRICTION = 15;

export const JOB_OFFER_ATTACHMENT_TYPES: Record<string, AttachmentType> = {
  ...JOB_OFFER_ATTACHMENT_EXTENSIONS.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.DOCUMENT }), {}),
  ...JOB_OFFER_ATTACHMENT_MIMETYPES.reduce((obj, ext) => ({ ...obj, [ext]: AttachmentType.DOCUMENT }), {}),
};

export const ALLOWED_JOB_OFFER_EXTENSIONS = [...JOB_OFFER_ATTACHMENT_EXTENSIONS];
