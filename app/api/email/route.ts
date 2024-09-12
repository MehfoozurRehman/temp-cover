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
      return NextResponse.json({ error: "Email and formId are required" });
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
      return NextResponse.json({ error: "Form not found" });
    }

    const emailFrom = process.env.NEXT_PUBLIC_EMAIL as string | undefined;
    const from = emailFrom ? emailFrom : "Acme <onboarding@resend.dev>";

    const res = await sendEmail({
      from,
      to: emailFrom ? [email] : ["ravager009@gmail.com"],
      subject: "Your policy details from temp cover",
      react: Template({
        link: baseURl + `?id=${formId}`,
        ...formData,
      }),
    });

    if (res.error) {
      console.error(res.error);
      return NextResponse.json({ error: res.error });
    }

    return NextResponse.json({ message: "Email sent" });
  } catch (error: any) {
    return catchBlockApi(error);
  }
}
