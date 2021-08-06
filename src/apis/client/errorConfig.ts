import { AxiosError } from "axios";

export default (error: AxiosError) => {
  // 공통 에러처리 하기
  return Promise.reject(error);
};
