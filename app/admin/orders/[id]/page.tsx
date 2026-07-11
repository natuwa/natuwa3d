import { getOrders } from "../../lib/api";
import { notFound } from "next/navigation";

export default async function OrderDetailPage({
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
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Order Details
        </h1>

        <p className="text-gray-500 mt-2">
          Order ID : <b>{id}</b>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Customer Details */}
        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Customer Details
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-gray-500 text-sm">Customer Name</p>
              <p className="font-semibold">{order.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-semibold">{order.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold">
                {order.Email || "-"}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="font-semibold">
                {order.address}
              </p>
            </div>

          </div>

        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Order Information
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-gray-500 text-sm">Quality</p>
              <p className="font-semibold">{order.quality}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Size</p>
              <p className="font-semibold">{order.size} Inch</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Advance Paid</p>
              <p className="font-semibold">
                ₹{order["Advance Paid"] || 0}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Current Status</p>

              <span className="inline-block mt-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {order.Status}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
