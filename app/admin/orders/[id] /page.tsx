import { getOrders } from "../../lib/api";
import Link from "next/link";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const orders = await getOrders();

  const order = orders.find(
    (item: any) => item["Order ID"] === id
  );

  if (!order) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Order Not Found
        </h1>

        <Link
          href="/admin/orders"
          className="text-blue-600 underline mt-4 inline-block"
        >
          ← Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            {order["Order ID"]}
          </h1>

          <p className="text-gray-500">
            Customer Details
          </p>

        </div>

        <Link
          href="/admin/orders"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Back
        </Link>

      </div>

      <div className="bg-white rounded-xl shadow border p-8 grid md:grid-cols-2 gap-6">

        <Info title="Customer" value={order.name} />
        <Info title="Phone" value={order.phone} />
        <Info title="Email" value={order.Email} />
        <Info title="Address" value={order.address} />
        <Info title="Order ID" value={order["Order ID"]} />
        <Info title="Status" value={order.Status} />
        <Info title="Quality" value={order.quality} />
        <Info title="Size" value={`${order.size} Inch`} />
        <Info title="Advance Paid" value={`₹${order["Advance Paid"] || 0}`} />
        <Info title="Tracking No" value={order["Tracking No"] || "-"} />
        <Info
          title="Printing Time"
          value={order["Estimated Printing Time"] || "-"}
        />
        <Info
          title="Painting Time"
          value={order["Estimated Painting Time"] || "-"}
        />

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="font-semibold text-lg break-words">
        {value || "-"}
      </p>
    </div>
  );
}
