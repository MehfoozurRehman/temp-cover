import dynamic from "next/dynamic";
import prisma from "@/lib/prisma";

const Pdf = dynamic(() => import("./Pdf"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      Loading...
    </div>
  ),
});

export default async function PDF({ searchParams }: { searchParams: any }) {
  try {
    const { id } = searchParams;

    const form = await prisma.form.findUnique({
      where: { id: id },
      select: { policy: true },
    });

    if (!form) {
      throw new Error("Policy not found");
    }

    return (
      <Pdf
        data={{
          number: form.policy.number || "",
          insured: form.policy.insured || "",
          description: form.policy.description || "",
          dateIssued: form.policy.dateIssued || "",
          effectiveDate: form.policy.effectiveDate || "",
          expirationDate: form.policy.expirationDate || "",
          reasonForIssue: form.policy.reasonForIssue || "",
          premium: form.policy.premium || 0,
          registrationNo: form.policy.registrationNo || "",
          vehicleValue: form.policy.vehicleValue || "",
          vehicleDetails: form.policy.vehicleDetails || "",
          compulsoryExcessFee: form.policy.compulsoryExcessFee || 0,
          voluntaryExcessFee: form.policy.voluntaryExcessFee || 0,
          totalExcessFee: form.policy.totalExcessFee || 0,
        }}
      />
    );
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
