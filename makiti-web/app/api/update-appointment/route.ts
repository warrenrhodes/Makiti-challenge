import { DB_CRUD } from "@/app/database/db_crud";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const appointmentID = req.nextUrl.searchParams.get("appointment-id");

  const body = await req.json();

  if (!appointmentID) {
    return new Response("appointment-id parameter is undefined ", {
      status: 500,
    });
  }

  const result = await DB_CRUD.updateAppointmentById(appointmentID, body);

  if (!result) {
    return new Response("Fail to update the appointment", { status: 500 });
  }

  return new Response("Success", { status: 200 });
}
