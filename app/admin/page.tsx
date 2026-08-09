import StatsCard from "./components/StatsCard";
import RecentOrders from "./components/RecentOrders";
import ProductionStatus from "./components/ProductionStatus";
import { getOrders } from "./lib/api";

import {
  ShoppingBag,
  IndianRupee,
  Wallet,
  Package,
  Clock3,
} from "lucide-react";

export default async function AdminPage() {
  const orders = await getOrders();

  // Total inquiries / orders
  const totalInquiry = orders.length;

  // Complete order value
  const totalRevenue = orders.reduce(
    (sum: number, item: any) => {
      const amount = Number(
        String(item["totalAmount"] || "0").replace(/[₹,\s]/g, "")
      );

      return sum + (isNaN(amount) ? 0 : amount);
    },
    0
  );

  // Total amount actually received
  const totalPaid = orders.reduce(
    (sum: number, item: any) => {
      const paid = Number(
        String(item["Total Paid"] || "0").replace(/[₹,\s]/g, "")
      );

      return sum + (isNaN(paid) ? 0 : paid);
    },
    0
  );

  // Amount still pending from customers
  const outstanding = totalRevenue - totalPaid;

  // Active orders
  const activeOrders = orders.filter(
    (item: any) =>
      item.Status &&
      item.Status !== "Delivered"
  ).length;

  // Orders needing follow-up
  const pendingFollowUp = orders.filter(
    (item: any) =>
      !item.Status ||
      item.Status === "Advance Received"
  ).length;

  // Recent orders
  const recentOrders = orders
    .slice(-5)
    .reverse()
    .map((item: any) => ({
      id: item["Order ID"] || "-",
      customer: item.name,
      status: item.Status || "New",
    }));

  return (
    <div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back 👋 Here's today's business overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">

        {/* Total Inquiry */}
        <StatsCard
          title="Total Inquiry"
          value={totalInquiry}
          subtitle="Live from Google Sheet"
          color="bg-blue-600"
          icon={<ShoppingBag size={28} />}
        />

        {/* Total Revenue */}
        <StatsCard
          title="Total Revenue"
          value={`₹${totalRevenue.toLocaleString("en-IN")}`}
          subtitle="Complete Order Value"
          color="bg-indigo-600"
          icon={<IndianRupee size={28} />}
        />

        {/* Total Paid */}
        <StatsCard
          title="Total Paid"
          value={`₹${totalPaid.toLocaleString("en-IN")}`}
          subtitle="Actual Collection"
          color="bg-green-600"
          icon={<Wallet size={28} />}
        />

        {/* Outstanding */}
        <StatsCard
          title="Outstanding"
          value={`₹${outstanding.toLocaleString("en-IN")}`}
          subtitle="Payment Pending"
          color="bg-red-600"
          icon={<IndianRupee size={28} />}
        />

        {/* Active Orders */}
        <StatsCard
          title="Active Orders"
          value={activeOrders}
          subtitle="Currently in Production"
          color="bg-purple-600"
          icon={<Package size={28} />}
        />

        {/* Pending Follow-up */}
        <StatsCard
          title="Pending Follow-up"
          value={pendingFollowUp}
          subtitle="Need Your Attention"
          color="bg-orange-500"
          icon={<Clock3 size={28} />}
        />

      </div>

      {/* Recent Orders + Production */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <RecentOrders orders={recentOrders} />

        <ProductionStatus />

      </div>

    </div>
  );
}
