import axios, { AxiosRequestConfig } from "axios";

import errorConfig from "@/apis/client/errorConfig";
import requestConfig from "@/apis/client/requestConfig";
import responseConfig from "@/apis/client/responseConfig";

export const HTTPMethod = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
} as const;

const _ = axios.create();
_.interceptors.request.use(requestConfig, errorConfig);
_.interceptors.response.use(responseConfig, errorConfig);

export default function apiClient(config: AxiosRequestConfig) {
  return _.request(config);
}
