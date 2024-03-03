import { DB_CRUD } from "@/app/database/db_crud";

export async function GET(req: Request) {
  const result = await DB_CRUD.getAllLecturers();

  if (!result) {
    return new Response("Fails to retrieve all the lecturers", { status: 500 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
