import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

function isAuthorized(req: Request) {
  const { searchParams } = new URL(req.url);
  const pass = searchParams.get("password") || "";
  const adminPass = process.env.ADMIN_PASSWORD || "";
  return adminPass.length > 0 && pass === adminPass;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  try {
    await prisma.lead.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
