"use client";

import { useState } from "react";
const steps = [
  "Advance Received",
  "Photo Retouching Started",
  "Photo Retouching Completed",
  "3D Model Designing",
  "3D Model Ready",
  "Customer Approved",
  "Balance Paid",
  "3D Printing Started",
  "3D Printing Completed",
  "Painting Started",
  "Painting Completed",
  "Quality Check",
  "Packed",
  "Shipped",
  "Delivered",
];

function getProgress(status: string) {
  const index = steps.indexOf(status);
  if (index === -1) return 0;
  return Math.round(((index + 1) / steps.length) * 100);
}

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const progress = data?.status ? getProgress(data.status) : 0;

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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

      <div className="text-center mb-8">
      <h1 className="text-5xl font-bold">
      📦 Track Your Miniature
      </h1>
      
      <p className="text-gray-500 mt-2">
      Track your personalized NATUWA3D order in real time
      </p>
      
      </div>

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
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg"
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
      <div className="mt-10 bg-white rounded-2xl shadow-xl p-8">

  <h2 className="text-3xl font-bold text-center mb-2">
    {data.customer}
  </h2>

  <p className="text-center text-gray-500 mb-8">
    Order ID: {data.orderId}
  </p>

  <div className="mb-8">

    <div className="flex justify-between text-sm font-medium mb-2">
      <span>Order Progress</span>
      <span>{Math.round(getProgress(data.status))}%</span>
    </div>

    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

      <div
        className={`${getStatusColor(data.status)} h-4 rounded-full transition-all duration-700`}
        style={{ width: `${getProgress(data.status)}%` }}
      ></div>

    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-sm">Current Status</p>
      <p className="font-bold text-lg">{data.status}</p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-sm">Tracking Number</p>
      <p className="font-bold">{data.trackingNo || "-"}</p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-sm">Estimated Printing Time</p>
      <p className="font-bold">{data.printingTime || "-"}</p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-sm">Estimated Painting Time</p>
      <p className="font-bold">{data.paintingTime || "-"}</p>
    </div>

  </div>

</div>

        <div className="mt-8 text-red-600">

          Order not found.

        </div>

      )}

    </div>
  );
}
