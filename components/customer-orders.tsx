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
  size: string;
  quality: string;
};

export default function CustomerOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

        <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-500">
          Loading your orders...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-600">
          {error}
        </div>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">📦</div>

          <h3 className="text-lg font-semibold text-gray-900">
            No orders yet
          </h3>

          <p className="text-gray-500 mt-2">
            Your NATUWA3D orders will appear here once you place an order.
          </p>

          <a
            href="/book-now"
            className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Book a Miniature
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">My Orders</h2>

        <span className="text-sm text-gray-500">
          {orders.length} {orders.length === 1 ? "Order" : "Orders"}
        </span>
      </div>

      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>

                <h3 className="text-xl font-semibold text-gray-900">
                  {order.orderId || "—"}
                </h3>
              </div>

              <span className="inline-flex w-fit px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                {order.status || "Processing"}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-5">
              <div>
                <p className="text-xs text-gray-500">Total</p>
                <p className="font-semibold mt-1">
                  ₹{order.totalAmount.toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Advance Paid</p>
                <p className="font-semibold mt-1">
                  ₹{order.advancePaid.toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Remaining</p>
                <p className="font-semibold mt-1">
                  ₹{order.remainingAmount.toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Size</p>
                <p className="font-semibold mt-1">
                  {order.size || "—"}
                </p>
              </div>
            </div>

            {(order.courier || order.trackingNo) && (
              <div className="mt-5 bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-sm mb-2">
                  🚚 Delivery Information
                </p>

                {order.courier && (
                  <p className="text-sm text-gray-600">
                    Courier: <b>{order.courier}</b>
                  </p>
                )}

                {order.trackingNo && (
                  <p className="text-sm text-gray-600 mt-1">
                    Tracking No: <b>{order.trackingNo}</b>
                  </p>
                )}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/track-order"
                className="px-5 py-2.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Track Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}