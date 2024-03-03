import { DB_CRUD } from "@/app/database/db_crud";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const courseID = req.nextUrl.searchParams.get("course-id");
  const body = await req.json();

  console.log(courseID);

  if (!courseID) {
    return new Response("course-id parameter is undefined ", {
      status: 500,
    });
  }

  const result = await DB_CRUD.updateCourse(courseID, body);

  if (!result) {
    return new Response("Fail to update the course", { status: 500 });
  }

  return new Response("Success", { status: 200 });
}
