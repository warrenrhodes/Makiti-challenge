export enum CourseFieldKey {
  id = "id",
  name = "name",
  description = "description",
  price = "price",
  lecturersId = "lecturersId",
  isAvailable = "isAvailable",
  imageUrl = "imageUrl",
  appointmentsId = "appointmentsId",
}

export interface Course {
  [CourseFieldKey.id]: string;
  [CourseFieldKey.imageUrl]: string;
  [CourseFieldKey.name]: string;
  [CourseFieldKey.description]: string;
  [CourseFieldKey.price]: string;
  [CourseFieldKey.lecturersId]: string[];
  [CourseFieldKey.isAvailable]: boolean;
  [CourseFieldKey.appointmentsId]?: string[] | null;
}
