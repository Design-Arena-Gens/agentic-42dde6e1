import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass rounded-3xl p-10 md:p-16 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            آماده‌اید کسب‌وکارتان را به سطح جدیدی از هوشمندی ببرید؟
          </h2>
          <p className="text-slate-300 leading-loose max-w-2xl mx-auto">
            تیم Agentic AI آماده است تا در کنار شما، اتوماسیون‌های اختصاصی، ایجنت‌های سفارشی و جریان‌های کاری هوشمند را
            طراحی و اجرا کند. همین امروز شروع کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-glow hover:scale-[1.02] transition"
            >
              ثبت درخواست مشاوره
            </Link>
            <Link
              href="/academy"
              className="rounded-full border border-slate-600/70 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 hover:text-primary-200 hover:border-primary-400 transition"
            >
              ورود به آکادمی هوشمندسازی
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
