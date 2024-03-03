export enum UserFieldKey {
  id = "id",
  name = "name",
  email = "email",
}

export interface User {
  [UserFieldKey.id]: string;
  [UserFieldKey.email]: string;
  [UserFieldKey.name]: string;
}
