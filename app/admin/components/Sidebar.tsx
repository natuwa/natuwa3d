"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Customers", href: "/admin/customers" },
  { name: "Production", href: "/admin/production" },
  { name: "Revenue", href: "/admin/revenue" },
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Emails", href: "/admin/emails" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        NATUWA3D
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-zinc-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
