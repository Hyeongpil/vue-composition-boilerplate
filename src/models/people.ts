export interface PeopleDto {
  name: string;
}

export interface PeopleModel {
  name: string;
}

export function getDefaultPeople(): PeopleModel {
  return {
    name: "",
  };
}

export function getPeopleViewModel(dto: PeopleDto): PeopleModel {
  return {
    name: dto.name,
  };
}
