import { Appointment, AppointmentFieldKey } from "@/lib/models/appointment";
import { Course } from "@/lib/models/course";
import { Lecturer } from "@/lib/models/lecturer";
import { fakeData } from "./fake";

export abstract class DB_CRUD {
  static getAllCourses = async (): Promise<Course[]> => {
    return Object.values(fakeData.courses).filter(
      (course) => course.isAvailable
    );
  };
  static getAllLecturers = async (): Promise<Lecturer[]> => {
    return Object.values(fakeData.lecturers);
  };

  static fetchAppointmentsById = async (
    id: string
  ): Promise<Appointment | undefined> => {
    return fakeData.appointments[id];
  };

  static createCourse = async (course: Course): Promise<boolean> => {
    const randomId = Math.random().toString(36).slice(2);
    fakeData.courses[randomId] = course;
    return true;
  };

  static updateCourse = async (
    courseId: string,
    course: Course
  ): Promise<boolean> => {
    fakeData.courses[courseId] = course;
    console.log(fakeData.courses[courseId]);
    return true;
  };
  static updateAppointmentById = async (
    appointmentId: string,
    appointment: Appointment
  ): Promise<boolean> => {
    fakeData.appointments[appointmentId] = appointment;
    return true;
  };

  static filterCoursesByMonth = async (date: string): Promise<Course[]> => {
    const coursesId: string[] = [];
    const targetDate = new Date(date);
    Object.values(fakeData.appointments).forEach((appointment) => {
      const startDate = new Date(
        appointment[AppointmentFieldKey.startDateInUtc]
      );
      const endDate = new Date(appointment[AppointmentFieldKey.endDateInUtc]);
      const isValidCourse =
        startDate.getMonth() === targetDate.getMonth() ||
        endDate.getMonth() === targetDate.getMonth();
      if (isValidCourse) {
        coursesId.push(appointment[AppointmentFieldKey.courseId]);
      }
    });

    if (coursesId.length === 0) {
      return [];
    }
    const courses: Course[] = [];
    Object.entries(fakeData.courses).filter(([key, value]) => {
      if (coursesId.includes(key)) {
        courses.push(value);
      }
    });

    return courses;
  };

  static fetchLecturerById = async (
    id: string
  ): Promise<Lecturer | undefined> => {
    return fakeData.lecturers[id];
  };
}
