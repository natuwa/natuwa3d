"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, X } from "lucide-react";

export default function MobileOrderSearch({
  orders,
}: {
  orders: any[];
}) {
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return orders;
    }

    return orders.filter((order: any) => {
      const orderId = String(order["Order ID"] || "").toLowerCase();
      const name = String(order.name || "").toLowerCase();
      const phone = String(order.phone || "").toLowerCase();
      const status = String(order.Status || "").toLowerCase();

      return (
        orderId.includes(query) ||
        name.includes(query) ||
        phone.includes(query) ||
        status.includes(query)
      );
    });
  }, [orders, search]);

  return (
    <div className="mt-7">

      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">
          Orders
        </h2>

        <span className="text-sm text-gray-500">
          {filteredOrders.length} found
        </span>
      </div>

      {/* Search */}
      <div className="relative mb-4">

        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">

          <Search
            size={19}
            className="text-gray-400 shrink-0"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Order ID, name or phone..."
            className="w-full outline-none text-sm text-gray-900 placeholder:text-gray-400 bg-transparent"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}

        </div>

      </div>

      {/* Search Results */}
      <div className="space-y-3">

        {filteredOrders.length === 0 ? (
          <div className="bg-white border rounded-2xl p-8 text-center">
            <Search
              size={30}
              className="mx-auto text-gray-300 mb-3"
            />

            <p className="font-semibold text-gray-700">
              No order found
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Try Order ID, customer name or phone number.
            </p>
          </div>
        ) : (
          filteredOrders.map(
            (order: any, index: number) => {

              const orderId = order["Order ID"];
              const status = order.Status || "New Inquiry";

              return (
                <div
                  key={`${orderId || "no-id"}-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
                >

                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <p className="font-bold text-gray-900">
                        {orderId || "No Order ID"}
                      </p>

                      <p className="text-sm text-gray-700 mt-1 truncate">
                        {order.name || "Customer"}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        {order.phone || "-"}
                      </p>

                    </div>

                    <span className="shrink-0 max-w-[150px] text-right text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                      {status}
                    </span>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t">

                    <div>
                      <p className="text-xs text-gray-400">
                        Advance Paid
                      </p>

                      <p className="text-sm font-semibold text-gray-800 mt-0.5">
                        ₹{order["Advance Paid"] || 0}
                      </p>
                    </div>

                    {orderId ? (
                      <Link
                        href={`/admin/orders/${orderId}`}
                        className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg text-sm font-medium transition"
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
          )
        )}

      </div>

    </div>
  );
}
