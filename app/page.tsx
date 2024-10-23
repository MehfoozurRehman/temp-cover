import PageUi from "./PageUi";
import { notFound } from "next/navigation";

export default function Public({ searchParams }: { searchParams: any }) {
  const { id } = searchParams;

  if (!id) {
    notFound();
  }

  return <PageUi id={id} />;
}
