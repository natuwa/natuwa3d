export default function Sidebar() {
  const menu = [
    "Dashboard",
    "Orders",
    "Customers",
    "Production",
    "Revenue",
    "Analytics",
    "Emails",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">
        NATUWA3D
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
