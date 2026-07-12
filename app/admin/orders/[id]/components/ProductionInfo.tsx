"use client";

import { useState } from "react";
import { updateProduction } from "../../../lib/updateProduction";

interface ProductionInfoProps {
  orderId: string;
}

export default function ProductionInfo({
  orderId,
}: ProductionInfoProps) {
  const [printingTime, setPrintingTime] = useState("");
  const [paintingTime, setPaintingTime] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [courier, setCourier] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function saveProduction() {
    try {
      setLoading(true);

      const result = await updateProduction({
        orderId,
        printingTime,
        paintingTime,
        trackingNo,
        courier,
        notes,
      });

      if (result.success) {
        alert("✅ Production Information Saved");
      } else {
        alert("❌ Failed to Save");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Production Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            Estimated Printing Time
          </label>

          <input
            type="text"
            value={printingTime}
            onChange={(e) => setPrintingTime(e.target.value)}
            placeholder="10-12 Hours"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Estimated Painting Time
          </label>

          <input
            type="text"
            value={paintingTime}
            onChange={(e) => setPaintingTime(e.target.value)}
            placeholder="2 Days"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Tracking Number
          </label>

          <input
            type="text"
            value={trackingNo}
            onChange={(e) => setTrackingNo(e.target.value)}
            placeholder="Tracking Number"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Courier Partner
          </label>

          <select
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Courier</option>
            <option value="DTDC">DTDC</option>
            <option value="Delhivery">Delhivery</option>
            <option value="Bluedart">Bluedart</option>
            <option value="India Post">India Post</option>
            <option value="XpressBees">XpressBees</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium mb-2">
          Internal Notes
        </label>

        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write production notes..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="button"
        onClick={saveProduction}
        disabled={loading}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Save Production Info"}
      </button>
    </div>
  );
}
