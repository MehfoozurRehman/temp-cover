import PageUi from "./PageUi";

export default function Public({ searchParams }: { searchParams: any }) {
  const { id } = searchParams;

  return <PageUi id={id} />;
}
