// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { File } from '@koa/multer';
import { promises as fsPromises } from 'fs';
import { basename } from 'path';

import logger from 'logger';

import { ALLOWED_EXTENSIONS, ATTACHMENT_TYPES } from 'app-constants';
import { AppKoaContext } from 'types';

const getFileExtension = (file: File) => file.originalname.substring(file.originalname.lastIndexOf('.')).toLowerCase();

const getFileParams = (file: File) => {
  const fileName = file.originalname.replace(/\s/g, '');
  const fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.')).toLowerCase();
  const fileExtension = getFileExtension(file);
  const fileType = ATTACHMENT_TYPES[fileExtension];

  return {
    fileName,
    fileNameWithoutExtension,
    fileExtension,
    fileType,
  };
};

const throwIncorrectExtensionError = (ctx: AppKoaContext, fileName: string) =>
  ctx.throwClientError({
    global: `Incorrect ${fileName} file extension! Allowed file extensions: ${ALLOWED_EXTENSIONS.join(', ')}.`,
  });

const removeFileFromTempDir = async (filePath: string) => fsPromises.unlink(filePath);

const getFileFromTempDir = async (filePath: string) => {
  try {
    const buffer = await fsPromises.readFile(filePath);
    const fileName = basename(filePath);
    return { fileName, buffer };
  } catch (err) {
    logger.error('Error reading file from temp directory: ', err);
    return null;
  }
};

export default {
  getFileExtension,
  getFileParams,
  removeFileFromTempDir,
  getFileFromTempDir,
  throwIncorrectExtensionError,
};
