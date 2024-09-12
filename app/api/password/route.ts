import { NextResponse } from "next/server";
import catchBlockApi from "@/utils/catchBlockApi";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: "Password is required" });
    }

    const authCount = await prisma.auth.count();

    if (authCount === 0) {
      await prisma.auth.create({
        data: {
          password,
        },
      });

      return NextResponse.json({ message: "New entry created" });
    }

    const checkPassword = await prisma.auth.findFirst({
      where: {
        password,
      },
    });

    if (!checkPassword) {
      return NextResponse.json({ error: "Password is incorrect" });
    }

    return NextResponse.json({ message: "Password is correct" });
  } catch (error: any) {
    return catchBlockApi(error);
  }
}

