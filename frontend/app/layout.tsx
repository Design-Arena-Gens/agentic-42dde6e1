import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import clsx from "clsx";
import { AuthProvider } from "@/lib/auth-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Agentic AI Agency | آژانس مشاوره هوشمندسازی کسب‌وکار",
  description:
    "آژانس Agentic AI ارائه‌دهنده مشاوره تخصصی هوشمندسازی و فروش ایجنت‌های آماده‌ی شخصی‌سازی برای رشد کسب‌وکارها."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={clsx("bg-dark text-slate-100 antialiased", vazir.variable)}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
