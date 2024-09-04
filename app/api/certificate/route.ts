import { NextResponse } from "next/server";
import catchBlockApi from "@/utils/catchBlockApi";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      throw new Error("ID is required");
    }

    const form = await prisma.form.findUnique({
      where: { id: id },
      select: {
        certificate: true,
      },
    });

    if (!form || form.certificate) {
      throw new Error("Certificate not found");
    }

    return NextResponse.json(form.certificate);
  } catch (error: any) {
    return catchBlockApi(error);
  }
}
