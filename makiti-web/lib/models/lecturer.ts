import { User } from "./user";

export enum LecturerFieldKey {
  bio = "bio",
}

export interface Lecturer extends User {
  [LecturerFieldKey.bio]: string;
}
