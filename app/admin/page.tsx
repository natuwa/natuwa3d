import StatsCard from "./components/StatsCard";
import RecentOrders from "./components/RecentOrders";
import ProductionStatus from "./components/ProductionStatus";

import {
  ShoppingBag,
  IndianRupee,
  Package,
  Clock3,
} from "lucide-react";

export default function AdminPage() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back 👋 Here's today's business overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Today's Inquiry"
          value={5}
          subtitle="2 more than yesterday"
          color="bg-blue-600"
          icon={<ShoppingBag size={28} />}
        />

        <StatsCard
          title="Revenue"
          value="₹12,500"
          subtitle="Today's Collection"
          color="bg-green-600"
          icon={<IndianRupee size={28} />}
        />

        <StatsCard
          title="Active Orders"
          value={14}
          subtitle="Currently in Production"
          color="bg-purple-600"
          icon={<Package size={28} />}
        />

        <StatsCard
          title="Pending Follow-up"
          value={3}
          subtitle="Need Your Attention"
          color="bg-orange-500"
          icon={<Clock3 size={28} />}
        />
 {/* Bottom Section */}

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

  <RecentOrders />

  <ProductionStatus />

</div>

      </div>

    </div>
  );
}
