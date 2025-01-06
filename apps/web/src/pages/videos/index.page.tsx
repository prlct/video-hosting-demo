import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Stack, Title } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { SortDirection } from '@tanstack/react-table';
import { pick } from 'lodash';

import { videoApi, VideosListParams } from 'resources/video';
import { } from 'resources/video/video.api';

import { Table } from 'components';

import { RoutePath } from 'routes';

import { User } from 'types';

import Filters from './components/Filters';
import { COLUMNS, DEFAULT_PAGE, DEFAULT_PARAMS, EXTERNAL_SORT_FIELDS, PER_PAGE } from './constants';

const Videos: NextPage = () => {
  const { push } = useRouter();
  const [params, setParams] = useSetState<VideosListParams>(DEFAULT_PARAMS);

  const { data: videos, isLoading: isVideosListLoading } = videoApi.useList(params);

  const onSortingChange = (sort: Record<string, SortDirection>) => {
    setParams((prev) => {
      const combinedSort = { ...pick(prev.sort, EXTERNAL_SORT_FIELDS), ...sort };

      return { sort: combinedSort };
    });
  };

  const onRowClick = (video: User) => {
    push({
      pathname: RoutePath.Video,
      query: {
        id: video._id,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Videos</title>
      </Head>

      <Stack gap="lg" p={24}>
        <Title order={2}>Videos</Title>

        <Filters setParams={setParams} />

        <Table<User>
          data={videos?.results}
          totalCount={videos?.count}
          pageCount={videos?.pagesCount}
          page={DEFAULT_PAGE}
          perPage={PER_PAGE}
          columns={COLUMNS}
          isLoading={isVideosListLoading}
          onPageChange={(page) => setParams({ page })}
          onSortingChange={onSortingChange}
          onRowClick={onRowClick}
        />
      </Stack>
    </>
  );
};

export default Videos;
