import apiClient, { HTTPMethod } from "@/apis/client/apiClient";
import { PeopleDto } from "@/models/people";

export function fetchPeopleApi(userSeq: number): Promise<PeopleDto> {
  return apiClient({
    url: "report/isMydataConnected", // 임시 테스트용
    method: HTTPMethod.GET,
    params: { userSeq },
  });
}
