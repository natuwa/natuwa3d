"use client";

import { useEffect, useState } from "react";

type Order = {
  orderId: string;
  status: string;
  lastUpdate: string;
  totalAmount: number;
  advancePaid: number;
  remainingAmount: number;
  trackingNo: string;
  courier: string;
  estimatedPrintingTime: string;
  estimatedPaintingTime: string;
  eventDate: string;
  size: string | number;
  quality: string;
};

function formatDate(value: string) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusStyle(status: string) {
  const normalized = status.toLowerCase();

  if (
    normalized.includes("delivered") ||
    normalized.includes("confirmed")
  ) {
    return "bg-green-100 text-green-700 border-green-200";
  }

  if (
    normalized.includes("shipped") ||
    normalized.includes("packed")
  ) {
    return "bg-blue-100 text-blue-700 border-blue-200";
  }

  if (
    normalized.includes("refund")
  ) {
    return "bg-red-100 text-red-700 border-red-200";
  }

  if (
    normalized.includes("quality") ||
    normalized.includes("painting") ||
    normalized.includes("printing") ||
    normalized.includes("design")
  ) {
    return "bg-amber-100 text-amber-700 border-amber-200";
  }

  return "bg-gray-100 text-gray-700 border-gray-200";
}

export default function CustomerOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [payingOrderId, setPayingOrderId] = useState("");
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await fetch("/api/customer-orders", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "Unable to load orders");
        }

        setOrders(data.orders || []);
      } catch (err) {
        console.error(err);
        setError("Unable to load your orders. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  async function handleRemainingPayment(orderId: string) {
    try {
      setPaymentError("");
      setPayingOrderId(orderId);

      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();

      if (!response.ok || !data.success || !data.paymentLink) {
        throw new Error(data.message || "Unable to create payment link.");
      }

      window.location.href = data.paymentLink;
    } catch (err) {
      console.error("Remaining payment error:", err);
      setPaymentError(
        err instanceof Error
          ? err.message
          : "Unable to start payment. Please try again."
      );
      setPayingOrderId("");
    }
  }

  if (loading) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          My Orders
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-gray-500 shadow-sm">
          Loading your orders...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          My Orders
        </h2>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-red-600">
          {error}
        </div>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          My Orders
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="text-5xl mb-4">📦</div>

          <h3 className="text-xl font-semibold text-gray-900">
            No orders yet
          </h3>

          <p className="text-gray-500 mt-2">
            Your NATUWA3D orders will appear here once you
            place an order.
          </p>

          <a
            href="/book-now"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Book a Miniature
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-10">

      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900">
            My Orders
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            View your NATUWA3D order and payment details
          </p>
        </div>

        <span className="text-sm text-gray-500">
          {orders.length}{" "}
          {orders.length === 1 ? "Order" : "Orders"}
        </span>
      </div>

      <div className="space-y-6">

        {orders.map((order) => {
          const isPaid = order.remainingAmount <= 0;

          const statusStyle = getStatusStyle(
            order.status || ""
          );

          return (
            <div
              key={order.orderId}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >

              {/* Order Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Order ID
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {order.orderId || "—"}
                    </h3>
                  </div>

                  <span
                    className={`inline-flex w-fit items-center px-4 py-2 rounded-full border text-sm font-medium ${statusStyle}`}
                  >
                    {order.status || "Processing"}
                  </span>

                </div>
              </div>

              {/* Order Details */}
              <div className="p-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                  <div className="rounded-xl bg-[#f8f5f2] p-4">
                    <p className="text-xs text-gray-500">
                      Order Date
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {formatDate(order.lastUpdate)}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f5f2] p-4">
                    <p className="text-xs text-gray-500">
                      Event Date
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {formatDate(order.eventDate)}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f5f2] p-4">
                    <p className="text-xs text-gray-500">
                      Size
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {order.size || "—"}{" "}
                      {order.size ? "inch" : ""}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8f5f2] p-4">
                    <p className="text-xs text-gray-500">
                      Quality
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {order.quality || "—"}
                    </p>
                  </div>

                </div>

                {/* Payment Section */}
                <div className="mt-6">

                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">
                      Payment
                    </h4>

                    {isPaid ? (
                      <span className="text-sm font-medium text-green-600">
                        ✓ Fully Paid
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-amber-600">
                        Payment Pending
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    <div className="border border-gray-200 rounded-xl p-4">
                      <p className="text-xs text-gray-500">
                        Total Amount
                      </p>

                      <p className="text-lg font-semibold text-gray-900 mt-1">
                        ₹{order.totalAmount.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4">
                      <p className="text-xs text-gray-500">
                        Advance Paid
                      </p>

                      <p className="text-lg font-semibold text-green-600 mt-1">
                        ₹{order.advancePaid.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div
                      className={`border rounded-xl p-4 ${
                        isPaid
                          ? "border-green-200 bg-green-50"
                          : "border-amber-200 bg-amber-50"
                      }`}
                    >
                      <p className="text-xs text-gray-500">
                        Remaining
                      </p>

                      <p
                        className={`text-lg font-semibold mt-1 ${
                          isPaid
                            ? "text-green-600"
                            : "text-amber-700"
                        }`}
                      >
                        ₹
                        {order.remainingAmount.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Delivery Information */}
                {(order.courier || order.trackingNo) && (
                  <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5">

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🚚</span>

                      <h4 className="font-semibold text-gray-900">
                        Delivery Information
                      </h4>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">

                      {order.courier && (
                        <div>
                          <p className="text-xs text-gray-500">
                            Courier
                          </p>

                          <p className="font-medium text-gray-900 mt-1">
                            {order.courier}
                          </p>
                        </div>
                      )}

                      {order.trackingNo && (
                        <div>
                          <p className="text-xs text-gray-500">
                            Tracking Number
                          </p>

                          <p className="font-medium text-gray-900 mt-1 break-all">
                            {order.trackingNo}
                          </p>
                        </div>
                      )}

                    </div>

                  </div>
                )}

                {/* Production Time */}
                {(order.estimatedPrintingTime ||
                  order.estimatedPaintingTime) && (
                  <div className="mt-6 border border-gray-200 rounded-xl p-5">

                    <h4 className="font-semibold text-gray-900 mb-3">
                      Production
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-4">

                      {order.estimatedPrintingTime && (
                        <div>
                          <p className="text-xs text-gray-500">
                            Estimated Printing
                          </p>

                          <p className="font-medium text-gray-900 mt-1">
                            {order.estimatedPrintingTime}
                          </p>
                        </div>
                      )}

                      {order.estimatedPaintingTime && (
                        <div>
                          <p className="text-xs text-gray-500">
                            Estimated Painting
                          </p>

                          <p className="font-medium text-gray-900 mt-1">
                            {order.estimatedPaintingTime}
                          </p>
                        </div>
                      )}

                    </div>

                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <a
                    href="/track-order"
                    className="px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Track Order
                  </a>

                  {!isPaid && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleRemainingPayment(order.orderId)}
                        disabled={payingOrderId === order.orderId}
                        className="px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {payingOrderId === order.orderId
                          ? "Creating Payment..."
                          : `Pay Remaining ₹${order.remainingAmount.toLocaleString("en-IN")}`}
                      </button>

                      <a
                        href="https://wa.me/918796289333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 border border-gray-300 bg-white text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                      >
                        Contact for Payment
                      </a>
                    </>
                  )}

                </div>

                {paymentError && !isPaid && (
                  <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {paymentError}
                  </div>
                )}

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}