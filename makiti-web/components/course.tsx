"use client";
import { Course } from "@/lib/models/course";
import { Card } from "./ui/card";
import Image from "next/image";
import { EditCourse } from "@/components/edit-course-form";
import { useCallback, useEffect, useState } from "react";
import { Lecturer } from "@/lib/models/lecturer";

export const CourseView = (props: { course: Course }) => {
  const [lectures, setLectures] = useState<Lecturer[]>([]);

  const fetchLecturers = useCallback(async () => {
    const lecturersRetrieved: Lecturer[] = [];
    for (const id of props.course.lecturersId) {
      const response = await fetch(
        `http://localhost:3000/api/lecturer?lecturer-id=${id}`
      );
      const data = await response.json();

      if (data) {
        lecturersRetrieved.push(data);
      }
    }

    setLectures(() => lecturersRetrieved);
  }, [props.course.lecturersId]);

  useEffect(() => {
    fetchLecturers();
  }, [fetchLecturers]);

  return (
    <Card
      key={props.course.name}
      className="w-full h-100 p-7 m-10 overflow-hidden min-w-1.5 relative hover:scale-110 transition duration-500"
    >
      <div className="w-full h-40 rounded-lg relative ">
        <Image
          src={props.course.imageUrl}
          alt=""
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-3 mt-2 p-3">
        <h3 className="text-xl font-bold ">{props.course.name}</h3>
        <p className="line-clamp-3">{props.course.description}</p>
        <h1>${props.course.price} XAF</h1>
      </div>
      <div className="flex gap-3 mt-2 p-3 items-center align-middle">
        <h3>
          <span className="text-xl font-bold "> Lecturers: </span>
          {lectures.map((lecturer) => {
            return lecturer.name;
          })}
        </h3>
      </div>
      <div>
        <EditCourse course={props.course} />
      </div>
    </Card>
  );
};
