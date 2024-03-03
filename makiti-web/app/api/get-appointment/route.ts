import { DB_CRUD } from "@/app/database/db_crud";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const appointmentID = req.nextUrl.searchParams.get("appointment-id");

  if (!appointmentID) {
    return new Response("Fails to fetch the appointment with undefined ID", {
      status: 500,
    });
  }
  const result = await DB_CRUD.fetchAppointmentsById(appointmentID);

  if (!result) {
    return new Response("Fails to fetch the appointment", { status: 500 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
