import { NextResponse } from "next/server";
import Template from "@/emails/email-template";
import { baseURl } from "@/constants/config";
import catchBlockApi from "@/utils/catchBlockApi";
import sendEmail from "@/utils/resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, formId } = await request.json();

    sendEmail({
      from: "Acme <onboarding@resend.dev>",
      to: "delivered@resend.dev",
      subject: "Welcome to Zood",
      react: Template({
        pdflink: baseURl + `?id=${formId}`,
      }),
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (error: any) {
    return catchBlockApi(error);
  }
}
