interface TrelloSubData {
  String: string;
  Valid: boolean;
}

interface TrelloPerson {
  ID: string;
  FbID: TrelloSubData;
  TgID: TrelloSubData;
  TrelloID: TrelloSubData;
  FirstName: TrelloSubData;
  LastName: TrelloSubData;
  Avatar: TrelloSubData;
  Roles: string[];
}

export type TrelloProjectCardProps = {
  ID: string;
  TrelloID: string;
  Title: string;
  CoverImage: string;
  Description: string;
  OwnerID: string;
  Owner: TrelloPerson;
  ManagerID: string;
  Manager: TrelloPerson;
  Status: string;
}
