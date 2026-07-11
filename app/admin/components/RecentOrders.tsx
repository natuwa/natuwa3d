type Order = {
  id: string;
  customer: string;
  status: string;
};

const orders: Order[] = [
  {
    id: "NT00021",
    customer: "Rahul Sharma",
    status: "Painting",
  },
  {
    id: "NT00022",
    customer: "Priya Singh",
    status: "3D Printing",
  },
  {
    id: "NT00023",
    customer: "Aman Verma",
    status: "Packed",
  },
  {
    id: "NT00024",
    customer: "Neha Gupta",
    status: "Quality Check",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Recent Orders
        </h2>

        <button className="text-blue-600 hover:underline text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >

            <div>
              <h3 className="font-semibold">
                {order.id}
              </h3>

              <p className="text-gray-500 text-sm">
                {order.customer}
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {order.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
