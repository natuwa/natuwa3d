import DashboardCard from "./components/DashboardCard";

export default function AdminPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <DashboardCard
          title="Today's Inquiry"
          value="5"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Revenue"
          value="₹12,500"
          color="bg-green-600"
        />

        <DashboardCard
          title="Active Orders"
          value="14"
          color="bg-purple-600"
        />

        <DashboardCard
          title="Packed"
          value="3"
          color="bg-orange-500"
        />

      </div>

    </div>
  );
}
