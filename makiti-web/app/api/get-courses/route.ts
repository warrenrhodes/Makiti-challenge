import { DB_CRUD } from "@/app/database/db_crud";

export async function GET(req: Request) {
  const result = await DB_CRUD.getAllCourses();

  if (!result) {
    return new Response("Fails to retrieve all the courses", { status: 500 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
