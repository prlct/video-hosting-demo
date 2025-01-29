// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Badge, Box, Button, Container, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconHeartFilled, IconShare3 } from '@tabler/icons-react';
import copy from 'copy-to-clipboard';

import { videoApi } from 'resources/video';

import Player from "components/Player";

import { formatDate } from 'utils';

import { RoutePath } from 'routes';

const Video: NextPage = () => {
 const { push } = useRouter();
 const { query } = useRouter();
 const { data: video, isLoading } = videoApi.useGet({ id: query.id as string });
 const { mutate: view } = videoApi.useView();
 const { mutate: like, isPending: isLikePending } = videoApi.useLike();

 const incrementViews = async () => {
  try {
   if (video?.data?.documentId) {
    await view({
     id: video.data.documentId,
     data: { views: (Number(video.data.views) || 0) + 1 },
    });
   }
  } catch (error) {
   console.error('Error incrementing views:', error);
  }
 };

 useEffect(() => {
  try {
   if (query.id && video && !sessionStorage.getItem(`viewed_${query.id}`)) {
    incrementViews();
    sessionStorage.setItem(`viewed_${query.id}`, 'true');
   }
  } catch (error) {
   console.error('Error accessing sessionStorage:', error);
  }
 }, [query.id, video]);

 const handleLike = () => {
  if (video?.data?.documentId) {
   like({
    id: video.data.documentId,
    data: { likes: (Number(video.data.likes) || 0) + 1 },
   });
  }
 };

 const handleShare = () => {
  try {
   const currentUrl = window.location.href;
   copy(currentUrl);

   showNotification({
    title: 'Link copied!',
    message: 'The link to this page has been copied to your clipboard.',
    color: 'green',
    icon: <IconCheck size={16} />,
   });
  } catch (error) {
   console.error('Error copying link:', error);
  }
 };

 if (isLoading) {
  return <Text>Loading...</Text>;
 }

 if (!video || !video.data) {
  return <Text>Video not found</Text>;
 }

 return (
  <>
   <Head>
    <title>{video.data.title}</title>
   </Head>

   <Container variant="responsive">
    <Stack w="100%" pt={48}>
     <Box>
      <Player
       file={video.data.video[0].provider_metadata.playback.hls}
       poster={video.data.thumbnail?.url || '/default-poster.jpg'}
       width="80%"
       height="740px"
       watermarkText="watermarked"
      />
     </Box>
     <Stack w="80%" gap="10px">
      <Group justify="space-between">
       <Stack gap="10px">
        <Title order={1} ff="Instrument Sans, sans-serif" fw={600}>
         {video.data.title}
        </Title>
        {video.data.models.map((model) => (
         <Text
          onClick={() =>
           push({
            pathname: RoutePath.Model,
            query: { id: model.documentId },
           })
          }
          fw={500}
          key={model.id}
         >
          {model.name}
         </Text>
        ))}
       </Stack>

       <Group>
        <Button
         onClick={handleLike}
         variant="secondary"
         leftSection={<IconHeartFilled size={24} />}
         disabled={isLikePending}
        >
         {video.data.likes}
        </Button>

        <Button
         onClick={handleShare}
         variant="secondary"
         leftSection={<IconShare3 size={24} />}
        >
         Share
        </Button>
       </Group>
      </Group>
      <Group>
       <Text>{video.data.views} Views</Text>
       <Text>{formatDate(video.data.createdAt)}</Text>
      </Group>
      <Text w="70%" mt={10}>{video.data.description}</Text>
      <Flex gap={10} mt={20}>
       {video.data.tags.map((tag) => (
        <Badge
         onClick={() =>
          push({
           pathname: RoutePath.Videos,
           query: { tag: tag.documentId },
          })
         }
         variant="primary"
         size="xl"
         key={tag.id}
        >
         {tag.title}
        </Badge>
       ))}
      </Flex>
     </Stack>
    </Stack>
   </Container>
  </>
 );
};

export default Video;
