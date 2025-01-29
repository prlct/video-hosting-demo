import { DateValue } from '@mantine/dates';
import { useMutation, useQuery } from '@tanstack/react-query';

import { cmsService } from 'services';

import queryClient from 'query-client';

import { ApiError, ListParams, ListResult, SortOrder, UpdateUserParams, User, } from 'types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGet = () =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useQuery<any, unknown>({
    queryKey: ['info'],
    queryFn: () => cmsService.get(`/api/landing/?populate[Banner][populate][0]=background_cover&populate[Featured][populate][0]=background_cover`),
  });

