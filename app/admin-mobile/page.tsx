import Link from "next/link";
import { getOrders } from "../admin/lib/api";
import {
  ShoppingBag,
  IndianRupee,
  Package,
  Clock3,
  Search,
  ArrowRight,
} from "lucide-react";

export default async function MobileAdminPage() {
  const orders = await getOrders();

  const totalInquiry = orders.length;

  const totalAdvanceReceived = orders.reduce(
    (sum: number, item: any) => {
      const advance = Number(
        String(item["Advance Paid"] || "0").replace(/[₹,\s]/g, "")
      );

      return sum + (isNaN(advance) ? 0 : advance);
    },
    0
  );

  const activeOrders = orders.filter(
    (item: any) =>
      item.Status && item.Status !== "Delivered"
  ).length;

  const pendingFollowUp = orders.filter(
    (item: any) =>
      !item.Status ||
      item.Status === "Advance Received"
  ).length;

  const recentOrders = [...orders]
    .sort((a: any, b: any) => {
      const aNumber =
        parseInt(
          String(a["Order ID"] || "").replace(/\D/g, ""),
          10
        ) || 999999;

      const bNumber =
        parseInt(
          String(b["Order ID"] || "").replace(/\D/g, ""),
          10
        ) || 999999;

      return bNumber - aNumber;
    })
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">
            NATUWA3D
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            Admin
          </h1>
        </div>

        <Link
          href="/admin"
          className="text-sm text-blue-600 font-medium"
        >
          Desktop
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Orders
            </p>

            <ShoppingBag
              size={20}
              className="text-blue-600"
            />
          </div>

          <p className="text-2xl font-bold mt-2">
            {totalInquiry}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Active
            </p>

            <Package
              size={20}
              className="text-purple-600"
            />
          </div>

          <p className="text-2xl font-bold mt-2">
            {activeOrders}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Advance
            </p>

            <IndianRupee
              size={20}
              className="text-green-600"
            />
          </div>

          <p className="text-xl font-bold mt-2">
            ₹{totalAdvanceReceived.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Follow-up
            </p>

            <Clock3
              size={20}
              className="text-orange-500"
            />
          </div>

          <p className="text-2xl font-bold mt-2">
            {pendingFollowUp}
          </p>
        </div>

      </div>

      {/* Orders */}
      <div className="mt-7">

        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-900">
            Recent Orders
          </h2>

          <Link
            href="/admin/orders"
            className="text-sm text-blue-600 font-medium"
          >
            View All
          </Link>
        </div>

        {/* Search visual */}
        <div className="bg-white border rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
          <Search
            size={19}
            className="text-gray-400"
          />

          <span className="text-sm text-gray-400">
            Search orders coming next...
          </span>
        </div>

        <div className="space-y-3">

          {recentOrders.map(
            (order: any, index: number) => {

              const orderId =
                order["Order ID"];

              return (
                <div
                  key={index}
                  className="bg-white border rounded-2xl p-4 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <p className="font-bold text-gray-900">
                        {orderId || "No Order ID"}
                      </p>

                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {order.name || "Customer"}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        {order.phone || "-"}
                      </p>

                    </div>

                    <span className="shrink-0 text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                      {order.Status || "New"}
                    </span>

                  </div>

                  <div className="flex items-center justify-between mt-4">

                    <p className="text-sm text-gray-600">
                      Advance:{" "}
                      <b>
                        ₹{order["Advance Paid"] || 0}
                      </b>
                    </p>

                    {orderId ? (
                      <Link
                        href={`/admin/orders/${orderId}`}
                        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
                      >
                        Open
                        <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <span className="text-xs text-gray-400">
                        No Order ID
                      </span>
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}
