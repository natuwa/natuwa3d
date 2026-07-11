const orders = [
  {
    id: "NT0001",
    customer: "Aman Sharma",
    phone: "9876543210",
    status: "Painting",
    days: 4,
  },
  {
    id: "NT0002",
    customer: "Priya Singh",
    phone: "9812345678",
    status: "Packed",
    days: 7,
  },
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Days</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.phone}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4">{order.days}</td>
                <td className="p-4">
                  <button className="bg-black text-white px-4 py-2 rounded-lg">
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
