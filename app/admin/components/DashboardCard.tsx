type Props = {
  title: string;
  value: string;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 text-white ${color}`}
    >
      <h3 className="text-lg opacity-90">{title}</h3>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}
