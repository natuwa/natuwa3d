import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminGuard from "./components/AdminGuard";
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname =
    (await headers()).get("x-invoke-path") || "";

  if (pathname.includes("/admin/login")) {
    return <>{children}</>;
  }

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}
