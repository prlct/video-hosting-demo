import { DateValue } from '@mantine/dates';
import { useMutation, useQuery } from '@tanstack/react-query';

import { cmsService } from 'services';

import queryClient from 'query-client';

import { ListParams, SortOrder, } from 'types';

export type VideosListFilterParams = {
  createdOn?: {
    startDate: DateValue;
    endDate: DateValue;
  };
};

export type VideosListSortParams = {
  createdOn?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};

export type VideosListParams = ListParams<VideosListFilterParams, VideosListSortParams>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useList = (params: any) =>
  useQuery({
    queryKey: ['videos', params],
    queryFn: () => cmsService.get('/api/videos', params),
  });

export const useGet = ({ id }: { id?: string }) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useQuery<any, unknown>({
    queryKey: ['videos', id],
    queryFn: () => cmsService.get(`/api/videos/${id}?populate=*`),
    // enabled: !!id,
  });

export const useLike = () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useMutation<void, unknown, { id: string, data: any }>({
    mutationFn: ({ id, data }) => cmsService.put(`/api/videos/${id}`, { data }),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['videos'] });
    },
  });

export const useView = () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useMutation<void, unknown, { id: string, data: any }>({
    mutationFn: ({ id, data }) => cmsService.put(`/api/videos/${id}`, { data }),
  });