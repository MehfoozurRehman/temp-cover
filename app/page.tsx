import PageUi from "./PageUi";
import { notFound } from "next/navigation";

export default async function Public(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  const { id } = searchParams;

  if (!id) {
    notFound();
  }

  return <PageUi id={id} />;
}
