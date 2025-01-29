import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import config from 'config';

type ApiErrorHandler = (error: ApiError) => void;

type EventHandler = ApiErrorHandler;

interface EventHandlers {
  error: ApiErrorHandler;
}

export class ApiError extends Error {
  data: unknown;

  status: number;

  constructor(data: unknown, status = 500, statusText = 'Internal Server Error') {
    super(`${status} ${statusText}`);

    this.constructor = ApiError;

    this.name = this.constructor.name;
    this.data = data;
    this.status = status;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  inspect() {
    return this.stack;
  }
}

interface ThrowApiErrorProps {
  status: number;
  statusText: string;
  data: unknown;
}

class ApiClient {
  _api: AxiosInstance;

  private _handlers: Map<keyof EventHandlers, Set<EventHandler>>;

  constructor(axiosConfig: AxiosRequestConfig) {
    this._handlers = new Map<keyof EventHandlers, Set<EventHandler>>();
    this._api = axios.create(axiosConfig);

    this._api.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        const errorResponse: ThrowApiErrorProps = error.response || {
          status: error.code ? parseInt(error.code, 10) : 500,
          statusText: error.message || 'Network or timeout error',
          data: error.data,
        };

        const apiError = new ApiError(errorResponse.data, errorResponse.status, errorResponse.statusText);

        const errorHandlers = this._handlers.get('error') as Set<ApiErrorHandler>;

        errorHandlers.forEach((handler) => handler(apiError));

        throw apiError;
      },
    );
  }

  on<T extends keyof EventHandlers>(event: T, handler: EventHandlers[T]): void {
    let handlers = this._handlers.get(event);

    if (!handlers) {
      handlers = new Set<EventHandler>();

      this._handlers.set(event, handlers);
    }

    handlers.add(handler as EventHandler);
  }

  get<T, P>(url: string, params: P | unknown = {}, requestConfig: AxiosRequestConfig = {}): Promise<T> {
    return this._api({
      method: 'get',
      url,
      params,
      ...requestConfig,
    });
  }

  post<T, D>(url: string, data: D | unknown = {}, requestConfig: AxiosRequestConfig = {}): Promise<T> {
    return this._api({
      method: 'post',
      url,
      data,
      ...requestConfig,
    });
  }

  put<T, D>(url: string, data: D | unknown = {}, requestConfig: AxiosRequestConfig = {}): Promise<T> {
    return this._api({
      method: 'put',
      url,
      data,
      ...requestConfig,
    });
  }

  delete<T, D>(url: string, data: D | unknown = {}, requestConfig: AxiosRequestConfig = {}): Promise<T> {
    return this._api({
      method: 'delete',
      url,
      data,
      ...requestConfig,
    });
  }
}

export default new ApiClient({
  baseURL: config.CMS_URL,
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ac7ddb5274088938cf1efaf356e53fda8196f4fa62f5af1f19c020bdd117ff78f76abceecbfb62da03b0a8b92d9edff88b06e50c25b4b0b1736352d7f94997204fd511185ee496e2aa51c1dcabfcfc27483660492d28a664d955a3fe7aa435317257135e8d99a5c6deae7f3af6d3815b2bf6f3972806a011dbb04b4db1ca1581`,
  },
  responseType: 'json',
});

