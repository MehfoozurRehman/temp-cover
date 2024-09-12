import { Resend } from "resend";

const { RESEND_API_KEY } = process.env;

const resend = new Resend(RESEND_API_KEY!);

async function sendEmail({
  from,
  to,
  subject,
  react,
}: {
  from: string;
  to: string | string[];
  subject: string;
  react: any;
}) {
  return await resend.emails.send({
    from,
    to,
    subject,
    react,
  });
}

export default sendEmail;
