import Link from "next/link";
import { getOrders } from "../admin/lib/api";
import AdminGuard from "../admin/components/AdminGuard";
import MobileOrderSearch from "./components/MobileOrderSearch";
import {
  ShoppingBag,
  IndianRupee,
  Package,
  Clock3,
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
      item.Status &&
      item.Status !== "Delivered"
  ).length;

  const pendingFollowUp = orders.filter(
    (item: any) =>
      !item.Status ||
      item.Status === "Advance Received"
  ).length;

  const sortedOrders = [...orders].sort((a: any, b: any) => {
    const aNumber =
      parseInt(
        String(a["Order ID"] || "").replace(/\D/g, ""),
        10
      ) || -1;

    const bNumber =
      parseInt(
        String(b["Order ID"] || "").replace(/\D/g, ""),
        10
      ) || -1;

    return bNumber - aNumber;
  });

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-100">

        {/* Mobile Header */}
        <div className="sticky top-0 z-20 bg-white border-b">
          <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">

            <div>
              <p className="text-xs font-medium text-gray-400 tracking-wide">
                NATUWA3D
              </p>

              <h1 className="text-xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>

            <Link
              href="/admin"
              className="text-xs font-medium text-blue-600"
            >
              Desktop
            </Link>

          </div>
        </div>

        {/* Main */}
        <main className="max-w-md mx-auto px-4 py-5">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">

            {/* Orders */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Orders
                </p>

                <ShoppingBag
                  size={19}
                  className="text-blue-600"
                />
              </div>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                {totalInquiry}
              </p>

            </div>

            {/* Active */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Active
                </p>

                <Package
                  size={19}
                  className="text-purple-600"
                />
              </div>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                {activeOrders}
              </p>

            </div>

            {/* Advance */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Advance
                </p>

                <IndianRupee
                  size={19}
                  className="text-green-600"
                />
              </div>

              <p className="text-lg font-bold text-gray-900 mt-2">
                ₹{totalAdvanceReceived.toLocaleString("en-IN")}
              </p>

            </div>

            {/* Follow-up */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Follow-up
                </p>

                <Clock3
                  size={19}
                  className="text-orange-500"
                />
              </div>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                {pendingFollowUp}
              </p>

            </div>

          </div>

          {/* Orders Search */}
          <MobileOrderSearch
            orders={sortedOrders}
          />

        </main>

      </div>
    </AdminGuard>
  );
}
