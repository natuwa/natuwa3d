"use client";

const steps = [
  "Advance Received",
  "Photo Retouching Started",
  "Photo Retouching Completed",
  "3D Model Designing",
  "3D Model Ready",
  "Customer Approved",
  "Balance Paid",
  "3D Printing Started",
  "3D Printing Completed",
  "Painting Started",
  "Painting Completed",
  "Quality Check",
  "Packed",
  "Shipped",
  "Delivered",
];

export default function OrderTimeline({
  currentStatus,
}: {
  currentStatus: string;
}) {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-5">
        Order Timeline
      </h3>

      <div className="space-y-5">

        {steps.map((step, index) => {

          const completed = index < currentIndex;
          const current = index === currentIndex;

          return (
            <div
              key={step}
              className="flex items-center gap-4"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                ${
                  completed
                    ? "bg-green-500"
                    : current
                    ? "bg-orange-500"
                    : "bg-gray-300"
                }`}
              >
                {completed ? "✓" : current ? "●" : ""}
              </div>

              <div>
                <p
                  className={`font-medium ${
                    current
                      ? "text-orange-600"
                      : completed
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
