import { useQuery } from '@tanstack/react-query';

import { cmsService } from 'services';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useList = (params: any) =>
  useQuery({
    queryKey: ['models', params],
    queryFn: () => cmsService.get('/api/models?populate[photos][populate][0]=file'),
  });

export const useGet = ({ id }: { id?: string }) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useQuery<any, unknown>({
    queryKey: ['models', id],
    queryFn: () => cmsService.get(`/api/models/${id}?populate[photos][populate][0]=file`),
  });

export const useGetVideos = ({ id }: { id?: string }) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useQuery<any, unknown>({
    queryKey: ['videos', id],
    queryFn: () => cmsService.get(`/api/videos/?populate=*&filters[models][id][$contains]=${id}`),
  });