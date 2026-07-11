const stages = [
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

export default function Timeline({
  currentStatus,
}: {
  currentStatus: string;
}) {
  const currentIndex = stages.indexOf(currentStatus);

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Production Timeline
      </h2>

      <div className="space-y-5">
        {stages.map((stage, index) => {
          const completed = index < currentIndex;
          const active = index === currentIndex;

          return (
            <div
              key={stage}
              className="flex items-center gap-4"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center
                ${
                  completed
                    ? "bg-green-600"
                    : active
                    ? "bg-blue-600 ring-4 ring-blue-100"
                    : "bg-gray-300"
                }`}
              >
                {completed && (
                  <span className="text-white text-xs">✓</span>
                )}
              </div>

              <div className="flex-1">
                <p
                  className={`font-medium ${
                    active
                      ? "text-blue-700"
                      : completed
                      ? "text-green-700"
                      : "text-gray-500"
                  }`}
                >
                  {stage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
