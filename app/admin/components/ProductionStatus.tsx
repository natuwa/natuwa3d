const production = [
  {
    stage: "Photo Retouching",
    count: 2,
    color: "bg-blue-500",
  },
  {
    stage: "3D Modelling",
    count: 3,
    color: "bg-purple-500",
  },
  {
    stage: "3D Printing",
    count: 5,
    color: "bg-yellow-500",
  },
  {
    stage: "Painting",
    count: 4,
    color: "bg-pink-500",
  },
  {
    stage: "Quality Check",
    count: 1,
    color: "bg-gray-500",
  },
  {
    stage: "Packed",
    count: 2,
    color: "bg-green-500",
  },
  {
    stage: "Shipped",
    count: 3,
    color: "bg-indigo-500",
  },
];

export default function ProductionStatus() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-6">
        Production Status
      </h2>

      <div className="space-y-4">
        {production.map((item) => (
          <div
            key={item.stage}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${item.color}`}
              />

              <span className="text-gray-700 font-medium">
                {item.stage}
              </span>
            </div>

            <span className="font-bold text-lg">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
