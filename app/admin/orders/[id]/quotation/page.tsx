import PrintButton from "./components/PrintButton";
import { getOrders } from "../../../lib/api";
import { notFound } from "next/navigation";

export default async function QuotationPage({
  params,
}: {
  params: Promise<{ id: string }> ;
}) {
  const { id } = await params;

  const orders = await getOrders();

  const order = orders.find(
    (item: any) => item["Order ID"] === id
  );

  if (!order) {
    notFound();
  }

  const productPrice = Number(order["totalAmount"] || 0);
  const shipping = Number(order["Shipping"] || 0);
  const gstRate = Number(order["GST"] || 0);
  const discount = Number(order["Discount"] || 0);
  const advance = Number(order["Advance Paid"] || 0);
  
  const discountedPrice = productPrice - discount;
  const gstAmount = (discountedPrice * gstRate) / 100;
  
  const total = discountedPrice + gstAmount + shipping;
  const balance = total - advance;

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="mb-6 flex justify-between">

          <div className="mb-6 flex justify-between">
            <PrintButton />
          </div>

        </div>

        <div className="bg-white p-10 shadow rounded-xl">

          <div className="text-center border-b pb-6">

            <h1 className="text-4xl font-bold">
              NATUWA3D
            </h1>

            <p className="text-gray-500 mt-2">
              Custom 3D Miniature Quotation
            </p>

          </div>

          <div className="grid grid-cols-2 gap-10 mt-8">

            <div>

              <h2 className="font-bold text-xl mb-4">
                Customer Details
              </h2>

              <p><b>Name:</b> {order.name}</p>

              <p><b>Phone:</b> {order.phone}</p>

              <p><b>Email:</b> {order.Email || "-"}</p>

              <p><b>Address:</b> {order.address}</p>

            </div>

            <div>

              <h2 className="font-bold text-xl mb-4">
                Quotation
              </h2>

              <p><b>Quotation No:</b> QT-{id}</p>

              <p><b>Order ID:</b> {id}</p>

              <p>
                <b>Date:</b>{" "}
                {new Date().toLocaleDateString()}
              </p>

            </div>

          </div>

          <div className="mt-10">

            <table className="w-full border">

              <thead className="bg-gray-100">

                <tr>

                  <th className="border p-3 text-left">
                    Description
                  </th>

                  <th className="border p-3">
                    Value
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>
                  <td className="border p-3">Miniature Type</td>
                  <td className="border p-3">
                    {order.product || "Custom Miniature"}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Quality</td>
                  <td className="border p-3">
                    {order.quality}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Size</td>
                  <td className="border p-3">
                    {order.size} Inch
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Product Price
                  </td>
                  <td className="border p-3">
                    ₹{productPrice}
                  </td>
                </tr>
                
                <tr>
                  <td className="border p-3">
                    Discount
                  </td>
                  <td className="border p-3">
                    - ₹{discount.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    GST ({gstRate}%)
                  </td>
                  <td className="border p-3">
                    ₹{gstAmount.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Shipping
                  </td>
                  <td className="border p-3">
                    ₹{shipping}
                  </td>
                </tr>

                <tr className="font-bold">

                  <td className="border p-3">
                    Grand Total
                  </td>

                  <td className="border p-3">
                    ₹{total}
                  </td>

                </tr>

                <tr>

                  <td className="border p-3">
                    Advance Paid
                  </td>

                  <td className="border p-3">
                    ₹{advance}
                  </td>

                </tr>

                <tr className="font-bold text-green-700">

                  <td className="border p-3">
                    Balance
                  </td>

                  <td className="border p-3">
                    ₹{balance}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="mt-10">

            <h2 className="font-bold text-xl mb-4">
              Terms & Conditions
            </h2>

            <ul className="list-disc pl-6 space-y-2">

              <li>Advance payment is required to confirm the order.</li>

              <li>Production starts after design approval.</li>

              <li>Estimated production time is 7–10 working days.</li>

              <li>Colors are hand-painted, so slight variations may occur.</li>

            </ul>

          </div>

          <div className="mt-12 border-t pt-6 text-center text-gray-500">

            <p>www.natuwa3d.com</p>

            <p>natuwa3d@gmail.com</p>

            <p>Thank you for choosing NATUWA3D ❤️</p>

          </div>

        </div>

      </div>

    </div>
  );
}
