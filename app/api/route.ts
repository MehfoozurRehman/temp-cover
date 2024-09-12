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
        policy: true,
      },
    });

    if (!form || !form.policy) {
      throw new Error("Policy not found");
    }

    return NextResponse.json(form.policy);
  } catch (error: any) {
    return catchBlockApi(error);
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();

    const form = await prisma.form.create({ data: body });

    console.log(form, "form");

    return NextResponse.json(form);
  } catch (error: any) {
    return catchBlockApi(error);
  }
}
