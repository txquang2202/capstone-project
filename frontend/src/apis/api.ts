import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

import { isHasValue } from '@/lib/validate';
import { getAccessToken } from '@/stores/auth';

// type AxiosRetry = AxiosError['config'] & { _retry: boolean };
const isDevelopment = process.env.NODE_ENV !== 'production';
const instance = axios.create(
  !isDevelopment
    ? {
        baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
        withCredentials: true,
      }
    : {}
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // Handle refresh token
    return Promise.reject(error);
  }
);

export const apiRequest = async <
  Data = unknown,
  Response = AxiosResponse<Data>
>(
  config: AxiosRequestConfig
): Promise<Response> => {
  const accessToken = getAccessToken();

  return instance.request({
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      ...config.headers,
    },
  });
};

export const apiGet = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<Response> => {
  const query = params
    ? `?${Object.keys(params)
        .map((key) => (isHasValue(params[key]) ? `${key}=${params[key]}` : ''))
        .filter(Boolean)
        .join('&')}`
    : '';

  return apiRequest<Data, Response>({
    url: `${url}${query}`,
    method: 'GET',
    ...config,
  });
};

export const apiPost = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: 'POST',
    ...config,
  });
};

export const apiPut = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: 'PUT',
    ...config,
  });
};

export const apiPatch = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    data: data ?? null,
    method: 'PATCH',
    ...config,
  });
};

export const apiDelete = async <Data = unknown, Response = AxiosResponse<Data>>(
  url: string,
  config?: AxiosRequestConfig
) => {
  return apiRequest<Data, Response>({
    url,
    method: 'DELETE',
    ...config,
  });
};
