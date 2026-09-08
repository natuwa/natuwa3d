import PaymentEditor from "./PaymentEditor";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  User,
  Package,
  Phone,
  Mail,
  MapPin,
  IndianRupee,
  CreditCard,
} from "lucide-react";

import AdminGuard from "@/app/admin/components/AdminGuard";
import { getOrders } from "@/app/admin/lib/api";

function getAmount(value: any) {
  const amount = Number(
    String(value || "0").replace(/[₹,\s]/g, "")
  );

  return isNaN(amount) ? 0 : amount;
}

export default async function MobileOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const orders = await getOrders();

  const order = orders.find(
    (item: any) =>
      String(item["Order ID"] || "").trim() === id
  );

  if (!order) {
    notFound();
  }

  const totalAmount = getAmount(
    order["totalAmount"]
  );

  const advancePaid = getAmount(
    order["Advance Paid"]
  );

  const remainingAmount = Math.max(
    0,
    totalAmount - advancePaid
  );

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-100">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b">
          <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-3">

            <Link
              href="/admin-mobile"
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <ArrowLeft size={19} />
            </Link>

            <div>
              <p className="text-xs text-gray-400">
                Order Details
              </p>

              <h1 className="font-bold text-gray-900">
                {id}
              </h1>
            </div>

          </div>
        </div>

        <main className="max-w-md mx-auto px-4 py-5">

          {/* Customer */}
          <div className="bg-white rounded-2xl border shadow-sm p-5">

            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                <User
                  size={19}
                  className="text-blue-600"
                />
              </div>

              <h2 className="font-bold text-gray-900">
                Customer Details
              </h2>
            </div>

            <div className="space-y-4">

              <div className="flex gap-3">
                <User
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Name
                  </p>

                  <p className="font-semibold text-gray-900">
                    {order.name || "-"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold text-gray-900">
                    {order.phone || "-"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <div className="min-w-0">
                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <p className="font-semibold text-gray-900 break-all">
                    {order.Email || "-"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Address
                  </p>

                  <p className="font-semibold text-gray-900">
                    {order.address || "-"}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Order Information */}
          <div className="bg-white rounded-2xl border shadow-sm p-5 mt-4">

            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center">
                <Package
                  size={19}
                  className="text-purple-600"
                />
              </div>

              <h2 className="font-bold text-gray-900">
                Order Information
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <p className="text-xs text-gray-400">
                  Quality
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {order.quality || "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Size
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {order.size
                    ? `${order.size} Inch`
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Expected Delivery
                </p>

                <p className="font-semibold text-gray-900 mt-1">
                  {order["Event Date"] ||
                    order["Expected Delivery Date"] ||
                    "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Status
                </p>

                <span className="inline-block mt-1 bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">
                  {order.Status || "New Inquiry"}
                </span>
              </div>

            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl border shadow-sm p-5 mt-4">

            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                <CreditCard
                  size={19}
                  className="text-green-600"
                />
              </div>

              <h2 className="font-bold text-gray-900">
                Payment
              </h2>
            </div>

            {/* Total */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <p className="text-xs text-gray-500">
                Total Amount
              </p>

              <p className="text-xl font-bold text-gray-900 mt-1">
                {totalAmount > 0
                  ? `₹${totalAmount.toLocaleString(
                      "en-IN"
                    )}`
                  : "₹0"}
              </p>

              {totalAmount <= 0 && (
                <p className="text-xs text-orange-600 mt-2">
                  Total Amount is not entered yet.
                </p>
              )}
            </div>

            {/* Advance */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <p className="text-xs text-gray-500">
                Advance Paid
              </p>

              <p className="text-xl font-bold text-green-600 mt-1">
                ₹{advancePaid.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Remaining */}
            <div
              className={`rounded-xl p-4 ${
                remainingAmount > 0
                  ? "bg-orange-50"
                  : "bg-green-50"
              }`}
            >
              <p className="text-xs text-gray-500">
                Remaining Amount
              </p>

              <p
                className={`text-2xl font-bold mt-1 ${
                  remainingAmount > 0
                    ? "text-orange-600"
                    : "text-green-600"
                }`}
              >
                ₹{remainingAmount.toLocaleString(
                  "en-IN"
                )}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Total Amount − Advance Paid
              </p>
            </div>

            {/* Payment button placeholder */}
            <button
              type="button"
              disabled
              className="w-full mt-5 bg-gray-200 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed"
            >
              Save Payment — Next Step
            </button>

          </div>

          {/* Desktop Detail */}
          <Link
            href={`/admin/orders/${id}`}
            className="block text-center text-sm text-blue-600 font-medium mt-5 mb-5"
          >
            Open Full Desktop Order →
          </Link>

        </main>
      </div>
    </AdminGuard>
  );
}
