import Link from "next/link";
import { getOrders } from "../lib/api";

export default async function ProductionPage() {
  const orders = await getOrders();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Production</h1>

        <div className="text-gray-500">
          Total Orders : <b>{orders.length}</b>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Printing</th>
              <th className="p-4 text-left">Painting</th>
              <th className="p-4 text-left">Courier</th>
              <th className="p-4 text-left">Tracking</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any, index: number) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {order["Order ID"] || "-"}
                </td>

                <td className="p-4">
                  {order.name || "-"}
                </td>

                <td className="p-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                    {order.Status || "-"}
                  </span>
                </td>

                <td className="p-4">
                  {order["Estimated Printing Time"] || "-"}
                </td>

                <td className="p-4">
                  {order["Estimated Painting Time"] || "-"}
                </td>

                <td className="p-4">
                  {order.Courier || "-"}
                </td>

                <td className="p-4">
                  {order["Tracking No"] || "-"}
                </td>

                <td className="p-4 text-center">
                  {order["Order ID"] ? (
                    <Link
                      href={`/admin/orders/${order["Order ID"]}`}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Manage
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      No Order ID
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
