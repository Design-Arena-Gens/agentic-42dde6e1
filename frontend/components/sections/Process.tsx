const steps = [
  {
    number: "۰۱",
    title: "آغاز با کشف دقیق کسب‌وکار",
    description:
      "جلسه‌ی ارزیابی اولیه، دریافت داده‌های کلیدی و تحلیل وضعیت موجود برای تشخیص سریع حفره‌های هزینه و گلوگاه‌های رشد."
  },
  {
    number: "۰۲",
    title: "طراحی نقشه راه هوشمندسازی",
    description:
      "بر اساس اولویت‌های استراتژیک شما، اتوماسیون‌ها، ایجنت‌های پیشنهادی و جریان‌های کاری مورد نیاز طراحی و شبیه‌سازی می‌شوند."
  },
  {
    number: "۰۳",
    title: "پیاده‌سازی و یکپارچه‌سازی",
    description:
      "راه‌اندازی ایجنت‌ها، اتصال به سیستم‌های موجود، آموزش تیم و تضمین عملکرد پایدار با داشبوردهای نظارتی لحظه‌ای."
  },
  {
    number: "۰۴",
    title: "بهینه‌سازی مداوم و توسعه",
    description:
      "پایش مداوم KPI‌ها، بهبود اتوماسیون‌ها و گسترش جریان‌های هوشمند برای افزایش بازده سرمایه‌گذاری دیجیتال شما."
  }
];

export function Process() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">مسیر همکاری با ما</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            فرایند همراهی Agentic AI Agency برای خلق تحول در کسب‌وکار شما شفاف، سریع و مبتنی بر داده است.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-slate-700/60 p-8 bg-slate-900/50">
              <span className="text-primary-200 text-sm font-semibold">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300 leading-loose">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
