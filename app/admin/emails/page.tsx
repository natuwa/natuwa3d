import { getOrders } from "../lib/api";

export default async function EmailPage() {
  const orders = await getOrders();

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Email Center
        </h1>

        <div className="text-gray-500">
          Total Customers : <b>{orders.length}</b>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Order ID
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Last Email
              </th>

              <th className="p-4 text-left">
                Email Time
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order: any, index: number) => (

              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {order["Order ID"] || "-"}
                </td>

                <td className="p-4 font-medium">
                  {order.name || "-"}
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
                  {order["Email Sent"] || "-"}
                </td>

                <td className="p-4">
                  {order["Email Time"] || "-"}
                </td>

                <td className="p-4 text-center">

                  {order.Email ? (

                    <a
                      href={`mailto:${order.Email}`}
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Send Email
                    </a>

                  ) : (

                    <span className="text-gray-400">
                      No Email
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
