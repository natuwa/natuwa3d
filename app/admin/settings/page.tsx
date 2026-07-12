import { getOrders } from "../lib/api";

export default async function SettingsPage() {
  const orders = await getOrders();

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <div className="text-gray-500">
          Total Orders : <b>{orders.length}</b>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-semibold mb-6">
            Business Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Business Name
              </label>

              <input
                defaultValue="NATUWA3D"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Support Email
              </label>

              <input
                defaultValue="natuwa3d@gmail.com"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Support Phone
              </label>

              <input
                defaultValue="+91 "
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Website
              </label>

              <input
                defaultValue="https://www.natuwa3d.com"
                className="w-full border rounded-lg p-3"
              />
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow border p-6">

          <h2 className="text-xl font-semibold mb-6">
            Order Settings
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Advance Amount
              </label>

              <input
                defaultValue="500"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Production Time
              </label>

              <input
                defaultValue="7 Days"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Default Courier
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>DTDC</option>
                <option>Delhivery</option>
                <option>Bluedart</option>
                <option>India Post</option>
                <option>XpressBees</option>
              </select>
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-green-50 rounded-xl border p-6">

          <h3 className="font-bold text-lg">
            Google Sheet
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Connected Successfully
          </p>

        </div>

        <div className="bg-blue-50 rounded-xl border p-6">

          <h3 className="font-bold text-lg">
            Email Service
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Active
          </p>

        </div>

        <div className="bg-orange-50 rounded-xl border p-6">

          <h3 className="font-bold text-lg">
            Website
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            www.natuwa3d.com
          </p>

        </div>

      </div>

      <div className="mt-8">

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
          Save Settings
        </button>

      </div>

    </div>
  );
}
