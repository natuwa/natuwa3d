"use client";

import { useState } from "react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function trackOrder() {
    setLoading(true);

    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbx_A_XmjVPEOAXo8dwCJnLKics7L57QHw0GAFfNT3WuuzMX1kMBVSopNHMuh0tuwNpZ/exec?orderId=${orderId}&email=${email}`
    );

    const json = await res.json();

    setData(json);

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto py-16">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Track Your Order
      </h1>

      <input
        className="border p-3 w-full rounded mb-4"
        placeholder="Order ID"
        value={orderId}
        onChange={(e)=>setOrderId(e.target.value)}
      />

      <input
        className="border p-3 w-full rounded mb-4"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button
        onClick={trackOrder}
        className="bg-black text-white px-6 py-3 rounded w-full"
      >
        {loading ? "Searching..." : "Track Order"}
      </button>

      {data && data.success && (

        <div className="mt-10 border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            {data.customer}
          </h2>

          <p><b>Order ID:</b> {data.orderId}</p>

          <p><b>Status:</b> {data.status}</p>

          <p><b>Tracking No:</b> {data.trackingNo || "-"}</p>

          <p><b>Printing Time:</b> {data.printingTime || "-"}</p>

          <p><b>Painting Time:</b> {data.paintingTime || "-"}</p>

        </div>

      )}

      {data && !data.success && (

        <div className="mt-8 text-red-600">

          Order not found.

        </div>

      )}

    </div>
  );
}
