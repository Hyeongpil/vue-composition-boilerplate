import { AxiosRequestConfig } from "axios";

export default (config: AxiosRequestConfig) => {
  config.baseURL = config.baseURL || process.env.VUE_APP_BASE_URL;
  config.headers = config.headers || {
    "content-type": "application/json",
  };
  config.timeout = config.timeout || 2 * 1000;

  return {
    ...config,
  };
};
