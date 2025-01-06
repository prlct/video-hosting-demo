import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Stack, Text, Title } from '@mantine/core';

import { accountApi } from 'resources/account';
import { videoApi } from 'resources/video';

import Player from "components/Player";

const Video: NextPage = () => {
 const { data: account } = accountApi.useGet();
 const { query } = useRouter();
 const { data: video } = videoApi.useGet({ id: query.id as string });

 if (!video || !account) return null;

 return (
  <>
   <Head>
    <title>Video</title>
   </Head>

   <Stack w="80%" m="auto" p={24} pt={48} gap={32}>
    <Title order={1}>Video</Title>

    <Text>Title: {video.title}</Text>
    <Text>Description: {video.description}</Text>
    <Text>Status: {video.status}</Text>

    {video.status !== 'completed' ? (
     <>
      processing
     </>
    ) : (
     <Player
      file={video.data.playback.hls}
      poster={video.data.thumbnail}
      width="100%"
      height="450px"
      watermarkText={account.email}
     />
    )}
   </Stack>
  </>
 );
};

export default Video;
