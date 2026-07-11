import { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  subtitle?: string;
};

export default function StatsCard({
  title,
  value,
  icon,
  color,
  subtitle,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-xs text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
