import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Anchor, Box, Button, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { SortDirection } from '@tanstack/react-table';
import cx from 'clsx';
import { pick } from 'lodash';

import { landingApi } from 'resources/landing';
import { modelApi } from 'resources/model';
import { userApi, UsersListParams } from 'resources/user';
import { videoApi } from 'resources/video';

import { Table } from 'components';
import ModelCard from 'components/ModelCard';
import VideoCard from 'components/VideoCard';

import { formatDuration, generateThumbnails } from 'utils';

import { RoutePath } from 'routes';

import { User } from 'types';

import Filters from './components/Filters';
import { COLUMNS, DEFAULT_PAGE, DEFAULT_PARAMS, EXTERNAL_SORT_FIELDS, PER_PAGE } from './constants';

import classes from './index.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const [params, setParams] = useSetState({
    populate: '*'
  });
  const { data: info } = landingApi.useGet()
  const { data: videos, isLoading: isVideosListLoading } = videoApi.useList(params);
  const { data: models, isLoading: isModelsLoading } = modelApi.useList(params);

  if (!videos || !models || !info) {
    return null;
  }

  console.log('info', info)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box className={classes.banner} style={{ backgroundImage: `url('${info.data.Banner.background_cover.url}')` }}>
        <Stack className={classes.bannerBox}>
          <div
            dangerouslySetInnerHTML={{ __html: info.data.Banner.banner_text }}
          />
          <Button onClick={() => router.push(info.data.Banner.banner_link)} variant='primary' w={204} h={79} fz="32px">Join now</Button>
        </Stack >
      </Box >

      <Container variant="responsive" className={classes.section}>
        <Anchor component={Link} href={RoutePath.Videos} underline="never">
          <Text className={classes.sectionTitle}>Latest videos</Text>
        </Anchor>

        <Group pt="20px" wrap="wrap" gap="20px">
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
                onClick={() => router.push({
                  pathname: RoutePath.Video,
                  query: {
                    id: item.documentId,
                  },
                })}
              />
            );
          })}

        </Group>


      </Container >

      <div style={{ marginTop: '100px', backgroundImage: `url('${info.data.Featured.background_cover.url}')` }}>
        <Container variant="responsive" className={classes.featured}>
          <Title component='h6'>FEATURED MOVIE</Title>
          <Title component="h3">{info.data.Featured.title}</Title>
          <Text>{info.data.Featured.description}</Text>
          <Button
            onClick={() => router.push(info.data.Featured.link)}
            variant='primary'
            w={245}
            h={79}
            fz="32px"
            lh="39px"
          >
            Watch now
          </Button>
        </Container>
      </div >

      <Container variant="responsive" className={classes.section}>
        <Anchor component={Link} href={RoutePath.Videos} underline="never">
          <Text className={classes.sectionTitle}>Models</Text>
        </Anchor>

        <Group pt="20px">
          {models.data.map((item) => (
            <ModelCard name={item.name} image={item.photos[0].file.url} onClick={() => router.push({
              pathname: RoutePath.Model,
              query: {
                id: item.documentId,
              },
            })} />
          ))}

        </Group>


      </Container >

      {/* <Stack p={24} gap="lg">
        <Title order={2}>Users</Title>

        <Filters setParams={setParams} />

        <Table<User>
          data={users?.results}
          totalCount={users?.count}
          pageCount={users?.pagesCount}
          page={DEFAULT_PAGE}
          perPage={PER_PAGE}
          columns={COLUMNS}
          isLoading={isUserLostLoading}
          onPageChange={(page) => setParams({ page })}
          onSortingChange={onSortingChange}
          onRowClick={onRowClick}
        />
      </Stack> */}
    </>
  );
};

export default Home;
