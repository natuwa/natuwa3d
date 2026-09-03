import Link from "next/link";
import CustomerOrders from "@/components/customer-orders";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AccountPage() {
  const supabase = await createClient();

  // Check logged-in customer
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Login nahi hai to login page par bhejo
  if (!user) {
    redirect("/login");
  }

  // Customer ki apni profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("name, mobile, email")
    .eq("id", user.id)
    .single();

  async function logout() {
    "use server";

    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/login");
  }

  const customerName =
    profile?.name || user.user_metadata?.name || "Customer";

  const customerMobile =
    profile?.mobile || user.user_metadata?.mobile || "Not added";

  const customerEmail =
    profile?.email || user.email || "Not available";

  return (
    <main className="min-h-screen bg-[#f8f5f2] px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-1">
              NATUWA3D Customer Account
            </p>

            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              Welcome, {customerName}
            </h1>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Logout
            </button>
          </form>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">

          <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
            My Profile
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="rounded-xl bg-[#f8f5f2] p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                Full Name
              </p>

              <p className="font-medium text-gray-900">
                {customerName}
              </p>
            </div>

            <div className="rounded-xl bg-[#f8f5f2] p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                Email
              </p>

              <p className="font-medium text-gray-900 break-all">
                {customerEmail}
              </p>
            </div>

            <div className="rounded-xl bg-[#f8f5f2] p-5">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                Mobile
              </p>

              <p className="font-medium text-gray-900">
                {customerMobile}
              </p>
            </div>

          </div>
        </div>

        <CustomerOrders />
       

        {/* Quick Links */}
        <div className="grid sm:grid-cols-3 gap-4">

          <Link
            href="/track-order"
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            <p className="font-medium text-gray-900">
              Track Order
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Check your order status
            </p>
          </Link>

          <Link
            href="/book-now"
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            <p className="font-medium text-gray-900">
              Book a Miniature
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Start a new order
            </p>
          </Link>

          <Link
            href="/"
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            <p className="font-medium text-gray-900">
              Back to Website
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Visit NATUWA3D homepage
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}