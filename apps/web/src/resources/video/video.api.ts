import { DateValue } from '@mantine/dates';
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { apiService } from 'services';

import queryClient from 'query-client';

import {
  ApiError,
  ForgotPasswordParams,
  ListParams, ListResult,
  ResendEmailParams,
  ResetPasswordParams,
  SignInParams,
  SignUpParams,
  SortOrder,
  UpdateUserParams,
  User,
  Video
} from 'types';


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

export const useList = <T extends VideosListParams>(params: T) =>
  useQuery<ListResult<Video>>({
    queryKey: ['videos', params],
    queryFn: () => apiService.get('/videos', params),
  });


export const useGet = ({ id }: { id?: string }) =>
  useQuery<Video, unknown>({
    queryKey: ['videos', id],
    queryFn: () => apiService.get(`/videos/${id}`),
    // enabled: !!id,
  });

export const useUpdate = <T = UpdateUserParams>() =>
  useMutation<User, ApiError, T>({
    mutationFn: (data: T) => apiService.put('/account', data),
  });

export const useUploadVideo = <T>() =>
  useMutation({
    mutationFn: (data: T) => apiService.post('/videos/', data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['videos'] });
    },
  });

export const useDeleteVideo = () =>
  useMutation<void, unknown, { id: string }>({
    mutationFn: ({ id }) => apiService.delete(`/videos/${id}`),
  });
