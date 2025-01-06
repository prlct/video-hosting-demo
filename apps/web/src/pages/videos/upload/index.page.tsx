import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Group, PasswordInput, Stack, Text, Textarea, TextInput, Title, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { zodResolver } from '@hookform/resolvers/zod';
import { isUndefined, pickBy } from 'lodash';
import { serialize } from 'object-to-formdata';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { accountApi } from 'resources/account';
import { videoApi } from 'resources/video';

import { NotificationIcon } from 'components';
import Dropzone from 'components/Dropzone';

import { handleApiError } from 'utils';

import { RoutePath } from 'routes';
import queryClient from 'query-client';

import { updateUserSchema } from 'schemas';
import { AttachmentType, NotificationType, UpdateUserParams, User } from 'types';

import AvatarUpload from './components/AvatarUpload';

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(30, 'The title cannot be more than 30 characters'),
  description: z.string().max(400, 'The title cannot be more than 400 characters').optional().nullable(),
  file: z
    .instanceof(File, { message: 'A file is required' })
    .or(z.undefined())
    .refine((val) => val instanceof File, 'A file is required'),
});

type FormData = {
  title: string;
  description?: string | null;
  file: File;
};

type UploadVideoParams = z.infer<typeof schema>;

const UploadVideo: NextPage = () => {
  const { data: account } = accountApi.useGet();
  const { colors } = useMantineTheme();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UploadVideoParams>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const file = watch('file');
  const { mutate: uploadVideo, isPending: isUploadPending } = videoApi.useUploadVideo();

  const fileUploadHandler = (files: File[]) => {
    if (files && files.length > 0) {
      setValue('file', files[0]);
    }
  };

  const removeFileHandler = () => {
    setValue('file', undefined);
  };

  const onSubmit = async (data: UploadVideoParams) => {
    try {
      const { title, description, file } = data;
      if (!file) {
        showNotification({
          title: 'Error',
          message: 'You must upload a video file.',
          color: 'white',
          icon: <NotificationIcon type={NotificationType.ERROR} />,
        });
        return;
      }

      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('title', title);
      if (description) {
        formData.append('description', description);
      }

      uploadVideo(formData, {
        onSuccess: (data) => {
          console.log('data', data)
          showNotification({
            title: 'Video is processing and will be available soon.',
            message: 'Your video has been successfully uploaded and is being processed.',
            color: 'white',
            icon: <NotificationIcon type={NotificationType.SUCCESS} />,
          });

          push({
            pathname: RoutePath.Video,
            query: {
              id: data._id,
            },
          });

          // push(`${RoutePath.Videos}`);
        },
        onError: (e) => handleApiError(e, setError),
      });
    } catch (e) {
      handleApiError(e, setError);
    }
  };

  return (
    <>
      <Head>
        <title>Upload Video</title>
      </Head>

      <Stack w={408} m="auto" pt={48} gap={32}>
        <Title order={1}>Upload Video</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={12}>
            <TextInput
              required
              size="sm"
              {...register('title')}
              label="Title"
              maxLength={100}
              placeholder=""
              // classNames={{ root: classes.firstNameInputRoot }}
              error={errors.title?.message}
            />

            <Textarea
              size="sm"
              {...register('description')}
              label="Description"
              minRows={3}
              placeholder=""
              // classNames={{ root: classes.lastNameInputRoot }}
              error={errors.description?.message}
            />

            <Stack gap={8}>
              <Text fw={500} span c="dark.1" size="sm">
                Upload video{' '}
                <Text span c="orange.0">
                  *
                </Text>
              </Text>

              <Group w="100%" gap={8}>
                <Dropzone
                  disabled={isUploadPending}
                  attachmentType={file?.type as AttachmentType}
                  onDrop={fileUploadHandler}
                  maxFiles={1}
                  uploadedFileUrl={file ? URL.createObjectURL(file) : undefined}
                  removeFileHandler={removeFileHandler}
                />
              </Group>

              <Text size="xs" c="gray.1">
                Add up to 3 photos or videos - 10 MB maximum per image, 50 MB maximum per video.
              </Text>
            </Stack>

            <Stack gap={12}>
              <Button type="submit" h={44} loading={isUploadPending} fullWidth>
                Upload
              </Button>
              <Button
                variant="outline"
                onClick={() => push(RoutePath.Videos)}
                fullWidth
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default UploadVideo;
