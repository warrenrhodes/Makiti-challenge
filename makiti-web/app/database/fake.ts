import { Appointment } from "@/lib/models/appointment";
import { Course } from "@/lib/models/course";
import { Lecturer } from "@/lib/models/lecturer";

export const fakeData = {
  lecturers: <Record<string, Lecturer>>{
    lecturers_1: {
      id: "lecturers_1",
      name: "Alice Smith",
      email: "alice@python.com",
      bio: "Alice is a senior software engineer with over 10 years of experience in Python development. She has worked on various projects involving web development, data analysis, and machine learning.",
    },
    lecturers_2: {
      id: "lecturers_2",
      name: "Bob Jones",
      email: "bob@python.com",
      bio: "Bob is a Python instructor and consultant who has taught Python courses at various universities and companies. He is also the author of several books and articles on Python.",
    },
  },
  courses: <Record<string, Course>>{
    courses_1: {
      id: "courses_1",
      name: "Introduction to Python",
      description:
        "Learn the basics of Python programming language, such as syntax, data types, functions, loops, and modules.",
      lecturersId: ["lecturers_1", "lecturers_2"],
      price: "5000",
      isAvailable: true,
      appointmentsId: ["appointments_1", "appointments_3"],
      imageUrl: "https://img-c.udemycdn.com/course/480x270/3142166_a637_3.jpg",
    },
    courses_2: {
      id: "courses_2",
      name: "Advanced Excel",
      description:
        "Master the skills and techniques of using Excel for data manipulation, analysis, and visualization. Learn how to use formulas, functions, charts, pivot tables, macros, and more.",
      lecturersId: ["lecturers_1"],
      price: "300",
      isAvailable: true,
      appointmentsId: ["appointments_2"],
      imageUrl: "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    },
    courses_3: {
      id: "courses_3",
      name: "Project Management Fundamentals",
      description:
        "Learn the principles and practices of effective project management, such as planning, scheduling, budgeting, risk management, and communication.",
      price: "250",
      lecturersId: ["lecturers_1"],
      isAvailable: true,
      imageUrl: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg",
    },
    courses_4: {
      id: "courses_4",
      name: "Graphic Design Essentials",
      description:
        "Learn how to create and edit professional graphics using Adobe Photoshop, Illustrator, and InDesign. Learn how to use color, typography, layout, and images to communicate your message.",
      price: "250",
      lecturersId: ["lecturers_1"],
      isAvailable: true,
      imageUrl: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    },
    courses_5: {
      id: "courses_5",
      name: "Business Writing Skills",
      description:
        "Learn how to write clear, concise, and persuasive business documents, such as emails, reports, proposals, and presentations. Learn how to use tone, style, and structure to achieve your purpose and audience.",
      price: "250",
      lecturersId: ["lecturers_1"],
      isAvailable: true,
      imageUrl: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    },
    courses_6: {
      id: "courses_6",
      name: "Digital Photography Basics",
      description:
        "Learn how to use your digital camera to take stunning photos, such as portraits, landscapes, and action shots. Learn how to use exposure, aperture, shutter speed, ISO, and more.",
      price: "250",
      lecturersId: ["lecturers_1"],
      isAvailable: true,
      imageUrl: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    },
  },
  appointments: <Record<string, Appointment>>{
    appointments_1: {
      courseId: "courses_1",
      startDateInUtc: "2024-03-10T09:00:00.000Z",
      endDateInUtc: "2024-03-10T12:00:00.000Z",
      capacity: 20,
      bookings: {
        "Emma Watson": {
          id: "user_1",
          name: "Emma Watson",
          email: "emma@python.com",
        },
        "Frank Brown": {
          id: "user_2",
          name: "Frank Brown",
          email: "frank@python.com",
        },
      },
    },
    appointments_2: {
      courseId: "courses_2",
      startDateInUtc: "2024-04-10T09:00:00.000Z",
      endDateInUtc: "2024-05-10T12:00:00.000Z",
      capacity: 20,
      bookings: {
        "Emma Watson": {
          id: "user_1",

          name: "Emma Watson",
          email: "emma@python.com",
        },
        "Frank Brown": {
          id: "user_2",
          name: "Frank Brown",
          email: "frank@python.com",
        },
      },
    },
    appointments_3: {
      courseId: "courses_1",
      startDateInUtc: "2024-03-10T09:00:00.000Z",
      endDateInUtc: "2024-03-10T12:00:00.000Z",
      capacity: 20,
      bookings: {
        "Emma Watson": {
          id: "user_1",
          name: "Emma Watson",
          email: "emma@python.com",
        },
        "Frank Brown": {
          id: "user_2",
          name: "Frank Brown",
          email: "frank@python.com",
        },
      },
    },
  },
};
