import Link from "next/link";
import { getOrders } from "../lib/api";

export default async function CustomersPage() {
  const orders = await getOrders();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>

        <div className="text-gray-500">
          Total Customers : <b>{orders.length}</b>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any, index: number) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {order.name || "-"}
                </td>

                <td className="p-4">
                  {order.phone || "-"}
                </td>

                <td className="p-4">
                  {order.Email || "-"}
                </td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    {order.Status || "-"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex flex-wrap gap-2 justify-center">

                    <a
                      href={`tel:${order.phone}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Call
                    </a>

                    <a
                      href={`https://wa.me/91${order.phone}`}
                      target="_blank"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={`mailto:${order.Email}`}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Email
                    </a>

                    {order["Order ID"] && (
                      <Link
                        href={`/admin/orders/${order["Order ID"]}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
                      >
                        View
                      </Link>
                    )}

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
