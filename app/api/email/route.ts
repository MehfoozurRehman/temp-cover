import { NextResponse } from "next/server";
import Template from "@/emails/email-template";
import { baseURl } from "@/constants/config";
import catchBlockApi from "@/utils/catchBlockApi";
import sendEmail from "@/utils/resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, formId } = await request.json();

    if (!email || !formId) {
      return NextResponse.json({ message: "Email and formId are required" });
    }

    const formData = await prisma.form.findUnique({
      where: {
        id: formId,
      },
      select: {
        email: true,
        policy: {
          select: {
            number: true,
            insured: true,
            registrationNo: true,
            vehicleDetails: true,
          },
        },
      },
    });

    if (!formData) {
      return NextResponse.json({ message: "Form not found" });
    }

    sendEmail({
      from: "Acme <onboarding@resend.dev>",
      to: ["your-email@example.com", email],
      subject: "Your policy details from temp cover",
      react: Template({
        link: baseURl + `?id=${formId}`,
        ...formData,
      }),
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (error: any) {
    return catchBlockApi(error);
  }
}
