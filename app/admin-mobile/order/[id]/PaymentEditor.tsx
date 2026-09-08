"use client";

import { useState } from "react";
import { CreditCard, Save } from "lucide-react";

export default function PaymentEditor({
  orderId,
  totalAmount,
  advancePaid,
  remainingAmount,
}: {
  orderId: string;
  totalAmount: number;
  advancePaid: number;
  remainingAmount: number;
}) {
  const [paymentAmount, setPaymentAmount] =
    useState("");

  const [paymentId, setPaymentId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function savePayment() {
    const amount = Number(paymentAmount);

    if (totalAmount <= 0) {
      alert(
        "⚠️ First enter Total Amount."
      );
      return;
    }

    if (!amount || amount <= 0) {
      alert(
        "⚠️ Please enter a valid payment amount."
      );
      return;
    }

    if (!paymentId.trim()) {
      alert(
        "⚠️ Please enter Payment ID / UTR."
      );
      return;
    }

    if (amount > remainingAmount) {
      alert(
        `❌ Payment cannot be greater than remaining amount ₹${remainingAmount.toLocaleString(
          "en-IN"
        )}.`
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/admin/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            paymentId: paymentId.trim(),
            amount,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        alert(
          `❌ ${data.message || "Payment could not be saved."}`
        );
        return;
      }

      alert(
        `✅ Payment Saved Successfully!\n\nAdvance Paid: ₹${Number(
          data.advancePaid
        ).toLocaleString("en-IN")}\nRemaining: ₹${Number(
          data.remainingAmount
        ).toLocaleString("en-IN")}`
      );

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "❌ Something went wrong while saving payment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-5 pt-5 border-t">

      <div className="flex items-center gap-2 mb-4">
        <CreditCard
          size={18}
          className="text-blue-600"
        />

        <h3 className="font-semibold text-gray-900">
          Record Payment
        </h3>
      </div>

      {/* Payment Amount */}
      <div className="mb-4">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Amount
        </label>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            ₹
          </span>

          <input
            type="number"
            min="1"
            max={remainingAmount}
            value={paymentAmount}
            onChange={(e) =>
              setPaymentAmount(e.target.value)
            }
            placeholder="Enter payment amount"
            className="w-full border border-gray-300 rounded-xl pl-8 pr-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p className="text-xs text-gray-400 mt-1">
          Maximum: ₹
          {remainingAmount.toLocaleString(
            "en-IN"
          )}
        </p>

      </div>

      {/* Payment ID */}
      <div className="mb-4">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment ID / UTR
        </label>

        <input
          type="text"
          value={paymentId}
          onChange={(e) =>
            setPaymentId(e.target.value)
          }
          placeholder="Enter UTR / Transaction ID"
          className="w-full border border-gray-300 rounded-xl px-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Save */}
      <button
        type="button"
        onClick={savePayment}
        disabled={
          loading ||
          totalAmount <= 0 ||
          remainingAmount <= 0
        }
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold ${
          loading ||
          totalAmount <= 0 ||
          remainingAmount <= 0
            ? "bg-gray-200 text-gray-500"
            : "bg-green-600 hover:bg-green-700 text-white"
        }`}
      >

        <Save size={18} />

        {loading
          ? "Saving..."
          : remainingAmount <= 0
          ? "Payment Complete"
          : "Save Payment"}

      </button>

    </div>
  );
}
