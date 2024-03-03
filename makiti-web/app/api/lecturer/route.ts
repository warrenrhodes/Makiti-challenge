import { DB_CRUD } from "@/app/database/db_crud";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const lecturerId = req.nextUrl.searchParams.get("lecturer-id");

  if (!lecturerId) {
    return new Response("Fails to fetch the lecturer with undefined ID", {
      status: 500,
    });
  }
  const result = await DB_CRUD.fetchLecturerById(lecturerId);

  if (!result) {
    return new Response("Fails to fetch the lecturer ", { status: 500 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
