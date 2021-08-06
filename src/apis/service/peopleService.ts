import { fetchPeopleApi } from "@/apis/repository/peopleRepository";
import { getPeopleViewModel } from "@/models/people";

export async function fetchPeople(userSeq: number) {
  const response = await fetchPeopleApi(userSeq);
  return getPeopleViewModel(response);
}

export async function fetchPeopleJob(userSeq: number) {
  const response = await fetchPeopleApi(userSeq);
  return getPeopleViewModel(response);
}
