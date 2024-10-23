import Pdf from "./Pdf";
import prisma from "@/lib/prisma";

export default async function PDF(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  try {
    const { id } = searchParams;

    const form = await prisma.form.findUnique({
      where: { id: id },
      select: { certificate: true },
    });

    if (!form) {
      throw new Error("Certificate not found");
    }

    return (
      <Pdf
        data={{
          number: form?.certificate?.number || "",
          insured: form?.certificate?.insured || "",
          effectiveDate: form?.certificate?.effectiveDate || "",
          expirationDate: form?.certificate?.expirationDate || "",
          registrationNo: form?.certificate?.registrationNo || "",
        }}
      />
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
