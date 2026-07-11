"use client";

import { useState } from "react";

const statusList = [
  "Inquiry",
  "Advance Received",
  "Photo Retouching",
  "3D Modelling",
  "Printing",
  "Painting",
  "Quality Check",
  "Packed",
  "Shipped",
  "Delivered",
];

export default function StatusEditor({
  currentStatus,
}: {
  currentStatus: string;
}) {
  const [status, setStatus] = useState(currentStatus);

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
          <option key={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Changes
      </button>

    </div>
  );
}
