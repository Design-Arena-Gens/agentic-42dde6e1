const programs = [
  {
    title: "بوت‌کمپ استراتژی هوشمندسازی",
    level: "پیشرفته",
    duration: "۴ هفته",
    description:
      "آموزش عملی طراحی استراتژی هوشمندسازی، شناسایی نقاط اتلاف و ساخت نقشه راه اجرایی برای سازمان‌های متوسط و بزرگ.",
    outcomes: ["تحلیل فرآیند", "طراحی اتوماسیون", "مدیریت تغییر"]
  },
  {
    title: "کارگاه ساخت ایجنت‌های سفارشی",
    level: "میانی",
    duration: "۲ روز",
    description:
      "پیاده‌سازی گام به گام ایجنت‌های اختصاصی با اتصال به داده‌های واقعی، تعریف پرسونای مشتری و سناریوهای تعاملی.",
    outcomes: ["طراحی سناریو", "اتصال به API", "ارزیابی عملکرد"]
  },
  {
    title: "دوره‌ی جریان‌سازی هوشمند تیم‌ها",
    level: "مبتدی تا میانی",
    duration: "۳ هفته",
    description:
      "آموزش به مدیران تیم برای تعریف جریان‌های کاری هوشمند، انتخاب ابزار و پایش شاخص‌ها با داشبوردهای لحظه‌ای.",
    outcomes: ["طراحی جریان", "یکپارچه‌سازی ابزارها", "پایش KPI"]
  }
];

export default function AcademyPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <section className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white">آکادمی Agentic AI</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            برنامه‌های آموزشی تخصصی برای مدیران و تیم‌هایی که می‌خواهند هوش مصنوعی را به شکل عملی در کسب‌وکار خود پیاده‌سازی
            کنند.
          </p>
        </section>
        <section className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="glass rounded-3xl p-8 space-y-5">
              <div className="text-xs text-slate-400 flex justify-between">
                <span>سطح: {program.level}</span>
                <span>مدت زمان: {program.duration}</span>
              </div>
              <h2 className="text-xl font-semibold text-white leading-relaxed">{program.title}</h2>
              <p className="text-sm text-slate-300 leading-loose">{program.description}</p>
              <div className="space-y-2">
                <span className="text-xs text-slate-400">خروجی‌های کلیدی:</span>
                <ul className="text-sm text-slate-200 space-y-1 pr-4 list-disc list-inside">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full rounded-full border border-slate-600/70 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-primary-400 hover:text-primary-200 transition">
                درخواست اطلاعات دوره
              </button>
            </div>
          ))}
        </section>
        <section className="glass rounded-3xl p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">همکاری سازمانی</h2>
          <p className="text-slate-300 leading-loose text-center">
            امکان برگزاری دوره‌های اختصاصی برای تیم‌های سازمانی در محل شرکت شما یا به صورت آنلاین فراهم است. در صورت نیاز
            به برنامه‌ی سفارشی، با ما از طریق فرم تماس در ارتباط باشید.
          </p>
        </section>
      </div>
    </div>
  );
}
