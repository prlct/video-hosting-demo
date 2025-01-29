/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Flex, Pagination, Skeleton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';

import { videoApi } from 'resources/video';
import { } from 'resources/video/video.api';

import VideoCard from 'components/VideoCard';

import { RoutePath } from 'routes';

const generateThumbnails = (baseUrl: string, duration: number, count: number) => {
  const interval = duration / count;
  return Array.from({ length: count }, (_, i) => {
    const time = Math.floor(interval * i); // Calculate time in seconds
    return `${baseUrl}?time=${time}s`;
  });
};

const formatDuration = (duration: number): string => {
  const totalSeconds = Math.floor(duration); // Round down to the nearest second
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const Videos: NextPage = () => {
  const { push } = useRouter();
  const [activePage, setPage] = useState(1);
  const [params, setParams] = useSetState({
    populate: '*'
  });

  const { data: videos, isLoading: isVideosListLoading } = videoApi.useList(params);

  return (
    <>
      <Head>
        <title>Videos</title>
      </Head>

      <Container variant="responsive" mt={80}>
        {isVideosListLoading ? (
          <Flex flex={1} gap={20}>
            <Skeleton height={60} radius="sm" />
          </Flex>
        ) : (<>
          <Flex flex={1} gap={20}>
            {/* @ts-ignore */}
            {videos.data.map((item) => {
              const durationInSeconds = parseInt(item.video[0].provider_metadata.duration, 10);
              const formattedDuration = formatDuration(durationInSeconds);
              const thumbnails = generateThumbnails(
                item.video[0].provider_metadata.thumbnail,
                durationInSeconds,
                10
              );

              return (
                <VideoCard
                  key={item.id}
                  title={item.title}
                  // @ts-ignore
                  models={item.models.map((model) => model.name)}
                  views={item.views}
                  likes={item.likes}
                  duration={formattedDuration}
                  thumbnails={thumbnails}
                  defaultThumbnail={item.thumbnail.url}
                  onClick={() => push({
                    pathname: RoutePath.Video,
                    query: {
                      id: item.documentId,
                    },
                  })}
                />
              );
            })}
          </Flex>
          <Flex align="center" justify="center" mt="40px">
            <Pagination size="xl" total={videos.meta.pagination.pageCount} value={activePage} onChange={setPage} mt="sm" />
          </Flex>
        </>)}


      </Container >


    </>
  );
};

export default Videos;
