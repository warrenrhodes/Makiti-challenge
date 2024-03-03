import { DB_CRUD } from "@/app/database/db_crud";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await DB_CRUD.createCourse(body);

  if (!result) {
    return new Response("Fail to create the course", { status: 500 });
  }

  return new Response("Success", { status: 200 });
}
