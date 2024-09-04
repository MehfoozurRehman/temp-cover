import Pdf from "./Pdf";

export default function PDF({ searchParams }: { searchParams: any }) {
  const { id } = searchParams;

  return (
    <div>
      <Pdf data={{ id }} />
    </div>
  );
}
