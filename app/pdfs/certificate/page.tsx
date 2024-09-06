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
      select: { certificate: true },
    });

    if (!form) {
      throw new Error("Certificate not found");
    }

    return <Pdf data={form.certificate} />;
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
}
