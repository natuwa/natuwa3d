import { getOrders } from "../lib/api";

export default async function OrdersPage() {

  const orders = await getOrders();

  return (

    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Orders
        </h1>

        <div className="text-gray-500">
          Total Orders : <b>{orders.length}</b>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
          
              <th className="p-4 text-left">Order ID</th>
          
              <th className="p-4 text-left">Customer</th>
          
              <th className="p-4 text-left">Phone</th>
          
              <th className="p-4 text-left">Status</th>
          
              <th className="p-4 text-left">Advance</th>
          
              <th className="p-4 text-center">Action</th>
          
            </tr>
          
          </thead>

          <tbody>

            {orders.map((order:any,index:number)=>(

              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {order["Order ID"] || "-"}
                </td>

                <td className="p-4">
                  {order.name}
                </td>

                <td className="p-4">
                  {order.phone}
                </td>

                <td className="p-4">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">

                    {order.Status}

                  </span>

                </td>
                <td className="p-4">
                  ₹{order["Advance Paid"] || 0}
                </td>
                
                <td className="p-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    View
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}
