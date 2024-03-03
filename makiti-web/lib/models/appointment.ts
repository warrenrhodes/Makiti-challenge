import { User } from "./user";

export enum AppointmentFieldKey {
  id = "id",
  courseId = "courseId",
  capacity = "capacity",
  startDateInUtc = "startDateInUtc",
  endDateInUtc = "endDateInUtc",
  bookings = "bookings",
}

export interface Appointment {
  [AppointmentFieldKey.courseId]: string;
  [AppointmentFieldKey.capacity]: number;
  [AppointmentFieldKey.startDateInUtc]: string;
  [AppointmentFieldKey.endDateInUtc]: string;
  [AppointmentFieldKey.bookings]?: Record<string, User> | null;
}
