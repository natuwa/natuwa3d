import { getOrders } from "../lib/api";

export default async function RevenuePage() {
  const orders = await getOrders();

  // Order ID ke number ke according ascending sequence
  const sortedOrders = [...orders].sort((a: any, b: any) => {
    const aNumber =
      parseInt(String(a["Order ID"] || "").replace(/\D/g, ""), 10) || 999999;

    const bNumber =
      parseInt(String(b["Order ID"] || "").replace(/\D/g, ""), 10) || 999999;

    return aNumber - bNumber;
  });

  const totalOrders = orders.length;

  const totalAdvance = orders.reduce(
    (sum: number, order: any) =>
      sum + Number(order["Advance Paid"] || 0),
    0
  );

  const paidOrders = orders.filter(
    (order: any) => Number(order["Advance Paid"] || 0) > 0
  ).length;

  const pendingOrders = totalOrders - paidOrders;

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Revenue Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow border p-6">
          <p className="text-gray-500 text-sm">
            Total Orders
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {totalOrders}
          </h2>
        </div>

        <div className="bg-green-50 rounded-xl shadow border p-6">
          <p className="text-gray-500 text-sm">
            Advance Received
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-2">
            ₹{totalAdvance.toLocaleString()}
          </h2>
        </div>

        <div className="bg-blue-50 rounded-xl shadow border p-6">
          <p className="text-gray-500 text-sm">
            Paid Orders
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-2">
            {paidOrders}
          </h2>
        </div>

        <div className="bg-red-50 rounded-xl shadow border p-6">
          <p className="text-gray-500 text-sm">
            Pending Orders
          </p>

          <h2 className="text-4xl font-bold text-red-700 mt-2">
            {pendingOrders}
          </h2>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-xl shadow border overflow-x-auto">

        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            Revenue Details
          </h2>
        </div>

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Advance</th>
            </tr>

          </thead>

          <tbody>

            {sortedOrders.map((order: any, index: number) => (

              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {order["Order ID"] || "-"}
                </td>

                <td className="p-4">
                  {order.name || "-"}
                </td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    {order.Status || "-"}
                  </span>
                </td>

                <td className="p-4 font-semibold text-green-700">
                  ₹{Number(order["Advance Paid"] || 0).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
