import StatsCard from "./components/StatsCard";
import RecentOrders from "./components/RecentOrders";
import ProductionStatus from "./components/ProductionStatus";
import { getOrders } from "./lib/api";

import {
  ShoppingBag,
  IndianRupee,
  Package,
  Clock3,
} from "lucide-react";

export default async function AdminPage() {

  const orders = await getOrders();

  const totalInquiry = orders.length;

  const totalRevenue = orders.reduce(
    (sum: number, item: any) =>
      sum + Number(item["Advance Paid"] || 0),
    0
  );

  const activeOrders = orders.filter(
    (item: any) =>
      item.Status &&
      item.Status !== "Delivered"
  ).length;

  const pendingFollowUp = orders.filter(
    (item: any) =>
      !item.Status ||
      item.Status === "Advance Received"
  ).length;

  const recentOrders = orders
  .slice(-5)
  .reverse()
  .map((item: any) => ({
    id: item["Oredr ID"] || "-",
    customer: item.name,
    status: item.Status || "New",
  }));

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back 👋 Here's today's business overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Inquiry"
          value={totalInquiry}
          subtitle="Live from Google Sheet"
          color="bg-blue-600"
          icon={<ShoppingBag size={28} />}
        />

        <StatsCard
          title="Advance Received"
          value={`₹${totalRevenue}`}
          subtitle="Live Collection"
          color="bg-green-600"
          icon={<IndianRupee size={28} />}
        />

        <StatsCard
          title="Active Orders"
          value={activeOrders}
          subtitle="Currently in Production"
          color="bg-purple-600"
          icon={<Package size={28} />}
        />

        <StatsCard
          title="Pending Follow-up"
          value={pendingFollowUp}
          subtitle="Need Your Attention"
          color="bg-orange-500"
          icon={<Clock3 size={28} />}
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <RecentOrders orders={recentOrders} />

        <ProductionStatus />

      </div>

    </div>
  );
}
