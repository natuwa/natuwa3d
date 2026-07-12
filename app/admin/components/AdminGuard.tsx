"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");

    if (loggedIn === "true") {
      setAllowed(true);
    } else {
      router.replace("/admin/login");
    }
  }, [router]);

  if (!allowed) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Checking Login...
      </div>
    );
  }

  return <>{children}</>;
}
