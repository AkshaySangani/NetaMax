import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "constants/authConstants";
import { setJwtToken, LogOut } from "dataflows/Auth/AuthSlice";
import { store } from "state/store";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  validateStatus: (status: number) => {
    return status >= 200 && status < 300;
  },
});

instance.interceptors.request.use(
  (config) => beforeEachRequest(config),
  async (err) => errorHandler(err)
);

instance.interceptors.response.use(
  (response) => afterEachResponse(response),
  async (err) => errorHandler(err)
);

/**
 * The axios request config
 * @param {AxiosRequestConfig} config the config obj.
 * @returns {AxiosRequestConfig} the new config obj
 */
const beforeEachRequest = (config: AxiosRequestConfig) => {
  const {
    auth: { accessToken },
  } = store.getState();
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

/**
 * The axios response
 * @param {AxiosResponse} response the axios response
 * @returns {AxiosResponse} the new response
 */
const afterEachResponse = (response: AxiosResponse) => {
  return response;
};

/**
 * Interceptor for error
 * @param {AxiosError} error the axios error
 * @returns {Promise} the error promise
 */
const errorHandler = async (error: AxiosError) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = error as any;
  const originalConfig = err.config;
  if (!originalConfig.url.includes(LOGIN_URL) && err.response) {
    // Access Token was expired
    const {
      auth: { refreshToken, customer, accessToken },
    } = store.getState();

    if ((err.response.status === 401 || err.response.status === 403) && !accessToken) {
      store.dispatch(LogOut());
    }

    if (
      (err.response.status === 401 || err.response.status === 403) &&
      !originalConfig._retry &&
      refreshToken
    ) {
      originalConfig._retry = true;

      try {
        const response = await post(REFRESH_TOKEN_URL, {
          refreshToken,
          username: customer?.username,
        });
        const auth = response.data as { accessToken: string };
        store.dispatch(setJwtToken(auth.accessToken));

        return instance(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(err);
};

/**
 * Add JWT token to request
 * @param {string} token JWT token
 * @returns {void}
 **/
export const addJwtToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/**
 * GET HTTP request
 * @param {string} url the url to request
 * @param {object} params the params to send
 * @param {string} baseUrl the base url to use.
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const get = (
  url: string,
  params?: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  return instance.get<unknown>(url, { params });
};

/**
 * POST HTTP request
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const post = (
  url: string,
  data?: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  return instance.post<unknown>(url, data);
};

/**
 * POST form-urlencoded HTTP request
 * @param {string} url the url to request
 * @param {FormData} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const postForm = (url: string, data: URLSearchParams): Promise<AxiosResponse<unknown>> => {
  const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 15000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  return instance.post<unknown>(url, data, axiosConfig);
};

/**
 * PUT HTTP request
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const put = (url: string, data: Record<string, unknown>): Promise<AxiosResponse<unknown>> =>
  instance.put<unknown>(url, data);

/**
 * DELETE HTTP request
 * @param {string} url the url to request
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const del = (url: string): Promise<AxiosResponse<unknown>> => instance.delete<unknown>(url);

/**
 * Axios instace security microservice
 */
export const instanceSecurity = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  validateStatus: (status: number) => {
    return status >= 200 && status < 300;
  },
});

instanceSecurity.interceptors.request.use(
  (config) => beforeEachRequest(config),
  async (err) => errorHandler(err)
);

instanceSecurity.interceptors.response.use(
  (response) => afterEachResponse(response),
  async (err) => errorHandler(err)
);

/**
 * POST HTTP request Security MS
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const postSecurity = (
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  return instanceSecurity.post<unknown>(url, data);
};

/**
 * POST HTTP request with custom headers
 * @param {string} url the url to request
 * @param {object} headers the headers to send
 * @param {object} data the data to send

 * @returns {Promise<AxiosResponse<unknown>>} the promise of the HTTP request
 **/
export const postWithHeaders = (
  url: string,
  headers: Record<string, string>,
  data?: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  const axiosConfig = {
    headers,
  };
  return instanceSecurity.post<unknown>(url, data, axiosConfig);
};

/**
 * Axios instace coreapi
 **/

export const instanceCoreApi = axios.create({
  baseURL: process.env.CORE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
instanceCoreApi.interceptors.request.use(
  (config) => beforeEachRequestInstanceCoreApi(config),
  async (err) => errorHandler(err)
);

instanceCoreApi.interceptors.response.use(
  (response) => afterEachResponse(response),
  async (err) => errorHandler(err)
);

// eslint-disable-next-line require-jsdoc
const beforeEachRequestInstanceCoreApi = async (config: AxiosRequestConfig) => {
  const responseAuth = await axios.post(
    `${process.env.CORE_API_URL}/users/auth`,
    {
      username: process.env.CORE_API_USERNAME,
      password: process.env.CORE_API_PASSWORD,
    },
    config
  );
  const accessToken = responseAuth.data.accessToken;
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

/**
 * POST HTTP request to core API
 * @param {string} url the url to request
 * @param {object} data the data to send
 * @returns {Promise<unknown>} the promise of the HTTP request
 **/
export const postInstanceCoreApi = (
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<unknown>> => {
  return instanceCoreApi.post<unknown>(url, data);
};
