import { getOrders } from "../lib/api";

export default async function AnalyticsPage() {
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

  const delivered = orders.filter(
    (o: any) => o.Status === "Delivered"
  ).length;

  const shipped = orders.filter(
    (o: any) => o.Status === "Shipped"
  ).length;

  const production = orders.filter((o: any) =>
    [
      "Photo Retouching",
      "3D Modelling",
      "Printing",
      "Painting",
      "Quality Check",
      "Packed",
    ].includes(o.Status)
  ).length;

  const inquiry = orders.filter(
    (o: any) =>
      o.Status === "Inquiry" ||
      o.Status === "Advance Received"
  ).length;

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow border p-6">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-4xl font-bold mt-2">
            {totalOrders}
          </h2>
        </div>

        <div className="bg-blue-50 rounded-xl shadow border p-6">
          <p className="text-gray-500">Production</p>
          <h2 className="text-4xl font-bold text-blue-700 mt-2">
            {production}
          </h2>
        </div>

        <div className="bg-orange-50 rounded-xl shadow border p-6">
          <p className="text-gray-500">Shipped</p>
          <h2 className="text-4xl font-bold text-orange-700 mt-2">
            {shipped}
          </h2>
        </div>

        <div className="bg-green-50 rounded-xl shadow border p-6">
          <p className="text-gray-500">Delivered</p>
          <h2 className="text-4xl font-bold text-green-700 mt-2">
            {delivered}
          </h2>
        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Inquiry</span>
              <span className="font-bold">{inquiry}</span>
            </div>

            <div className="flex justify-between">
              <span>Production</span>
              <span className="font-bold">{production}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipped</span>
              <span className="font-bold">{shipped}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivered</span>
              <span className="font-bold">{delivered}</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-bold mb-5">
            Recent Orders
          </h2>

          <div className="space-y-4">

            {sortedOrders.slice(0, 8).map(
              (order: any, index: number) => (

              <div
                key={index}
                className="flex justify-between border-b pb-3"
              >

                <div>

                  <p className="font-semibold">
                    {order.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order["Order ID"]}
                  </p>

                </div>

                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full h-fit">
                  {order.Status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
