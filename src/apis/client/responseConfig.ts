import { AxiosResponse } from "axios";

export default (response: AxiosResponse) => {
  /* ... 응답 에러 처리 ...  */
  // 에러가 없는 경우 return response
  // 에러가 발생한 경우 에러 처리
  return response.data;
};
