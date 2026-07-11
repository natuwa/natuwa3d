type Item = {
  stage: string;
  count: number;
  color: string;
};

type Props = {
  production: Item[];
};

export default function ProductionStatus({ production }: Props) {
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
