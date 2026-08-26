"use client";

import { useState } from "react";

const statusList = [
  "New Inquiry",
  "Photo Requested",
  "Advance Received",
  "Design Guidelines Sent",
  "Image Retouching Started",
  "Image Approved",
  "3D Designing Started",
  "3D Design Approved",
  "3D Printing Started",
  "3D Printing Completed",
  "Painting Started",
  "Painting Completed",
  "Quality Check",
  "Packed",
  "Shipped",
  "Delivered (Awaiting Confirmation)",
  "Delivery and Issue",
  "Refund Requested",
  "Delivery Confirmed",
  "Refund Transferred"
];

export default function StatusEditor({
  currentStatus,
  orderId,
}: {
  currentStatus: string;
  orderId: string;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const [refundAmount, setRefundAmount] = useState("");

  async function saveStatus() {
    try {
      setLoading(true);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby7HnYojREucqhi60SYEpvXnrYR7XGnzrkY0SEloPKgXquVDqquqqtIXpsSawRj8YD0/exec",
        {
          method: "POST",
          body: JSON.stringify({
            action: "updateStatus",
            orderId,
            status,
            refundAmount:
              status === "Refund Transferred"
                ? refundAmount
                : "",
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("✅ Status Updated Successfully");
      } else {
        alert("❌ Order ID not found");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-6">
      <h2 className="text-xl font-semibold mb-5">
        Update Order Status
      </h2>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        {statusList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      {status === "Refund Transferred" && (
        <div className="mt-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Refund Amount
          </label>
      
          <input
            type="number"
            min="0"
            value={refundAmount}
            onChange={(e) => setRefundAmount(e.target.value)}
            placeholder="Enter refund amount"
            className="w-full border rounded-lg p-3"
          />
      
          <p className="text-sm text-gray-500 mt-2">
            Enter the exact amount transferred to the customer.
          </p>
        </div>
)}

      <button
        onClick={saveStatus}
        disabled={loading}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
