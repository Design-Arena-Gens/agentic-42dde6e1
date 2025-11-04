const metrics = [
  {
    value: "۳.۸x",
    title: "شتاب رشد فروش",
    description: "افزایش نرخ تبدیل لیدها با پیاده‌سازی ایجنت‌های فروش هوشمند."
  },
  {
    value: "۷۲٪",
    title: "کاهش هزینه‌های عملیاتی",
    description: "کاهش هزینه‌های پنهان و اشتباهات انسانی با اتوماسیون‌های اختصاصی."
  },
  {
    value: "۴۰۰+",
    title: "ساعت آزاد شده ماهانه",
    description: "صرفه‌جویی در زمان تیم‌ها با جریان‌های کاری هوشمند و خودکار."
  }
];

export function Impact() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">تاثیر همکاری با Agentic AI</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            نتایج واقعی مشتریان ما نشان می‌دهد که ترکیب تحلیل داده و ایجنت‌های اختصاصی چگونه می‌تواند رشد سرمایه‌گذاری شما
            را چند برابر کند.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.value} className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-8 text-center">
              <div className="text-3xl font-black text-primary-200">{metric.value}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{metric.title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
