"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError(
          "This password reset link is invalid or has expired. Please request a new reset link."
        );
      }

      setChecking(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        setError("");
        setChecking(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleUpdatePassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage(
      "Your password has been updated successfully. Redirecting to login..."
    );

    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      router.push("/login");
      router.refresh();
    }, 2000);
  }

  if (checking) {
    return (
      <main className="min-h-screen bg-[#f8f5f2] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-gray-600">
              Checking password reset link...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5f2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-semibold text-gray-900">
              Reset Password
            </h1>

            <p className="text-gray-600 mt-2">
              Create a new password for your NATUWA3D account.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Success */}
          {message && (
            <div className="mb-5 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              {message}
            </div>
          )}

          {/* Password Form */}
          {!message && (
            <form
              onSubmit={handleUpdatePassword}
              className="space-y-5"
            >

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 outline-none focus:border-black"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 6 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Confirm new password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 outline-none focus:border-black"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Update Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-black text-white py-3 font-medium hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading
                  ? "Updating Password..."
                  : "Update Password"}
              </button>

            </form>
          )}

          {/* Back to Login */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <Link
              href="/login"
              className="font-medium text-black underline"
            >
              Back to Login
            </Link>
          </div>

        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} NATUWA3D. All rights reserved.
        </p>

      </div>
    </main>
  );
}
