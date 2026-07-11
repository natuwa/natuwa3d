export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Order {id}
      </h1>
    </div>
  );
}
