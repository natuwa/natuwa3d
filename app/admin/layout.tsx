import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminGuard from "./components/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
