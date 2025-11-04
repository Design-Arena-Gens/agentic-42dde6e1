"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/contact", label: "ارتباط با ما" },
  { href: "/articles", label: "صفحه‌ی مقالات" },
  { href: "/academy", label: "صفحه‌ی آکادمی" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleNavigation = (href: string) => {
    router.push(href);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-700/60 bg-dark/70">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-primary-500 via-sky-500 to-blue-900 shadow-glow">
            <span className="text-2xl font-black tracking-tight">AI</span>
          </div>
          <div>
            <p className="text-lg font-bold leading-none">Agentic AI Agency</p>
            <p className="text-xs text-slate-400 leading-none mt-1">هوشمندسازی و اتوماسیون کسب‌وکار</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? "text-primary-300" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-slate-200">
                سلام، <strong>{user.full_name ?? user.email}</strong>
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-slate-600/60 px-4 py-2 text-sm font-medium text-slate-200 hover:border-primary-400 hover:text-primary-200 transition"
              >
                خروج
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-slate-600/60 px-4 py-2 text-sm font-medium text-slate-200 hover:border-primary-400 hover:text-primary-200 transition"
              >
                ورود
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:scale-[1.01] transition"
              >
                ثبت‌نام
              </Link>
            </>
          )}
        </div>
        <button
          className="md:hidden rounded-xl border border-slate-700/80 p-2 text-slate-200"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="باز کردن منو"
        >
          {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 glass">
          <nav className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`text-right text-sm font-medium transition ${
                  pathname === link.href ? "text-primary-300" : "text-slate-200 hover:text-primary-200"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-700/80 flex flex-col gap-3">
              {user ? (
                <>
                  <span className="text-sm text-slate-200">
                    سلام، <strong>{user.full_name ?? user.email}</strong>
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-primary-700 transition"
                  >
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="rounded-full border border-slate-600/60 px-4 py-2 text-sm font-medium text-slate-200 hover:border-primary-400 hover:text-primary-200 transition"
                  >
                    ورود
                  </button>
                  <button
                    onClick={() => handleNavigation("/register")}
                    className="rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:scale-[1.01] transition"
                  >
                    ثبت‌نام
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
