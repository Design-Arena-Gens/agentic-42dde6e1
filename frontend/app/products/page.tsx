const packages = [
  {
    title: "بسته‌ی رشد شتابان",
    description:
      "طراحی سریع اتوماسیون‌های فروش و بازاریابی با ایجنت‌های اختصاصی برای رشد استارتاپ‌ها و کسب‌وکارهای در حال توسعه.",
    features: ["تحلیل داده‌های فروش", "طراحی قیف فروش هوشمند", "ایجنت‌های پاسخ‌گوی چندزبانه", "یکپارچه با CRM موجود"],
    investment: "از ۶۵ میلیون تومان",
    accent: "bg-gradient-to-r from-primary-500/20 to-sky-400/10"
  },
  {
    title: "بسته‌ی تحول سازمانی",
    description:
      "اتوماسیون کامل عملیات و جریان‌های کاری برای شرکت‌های متوسط تا بزرگ با تمرکز بر بهینه‌سازی منابع و حذف هزینه‌های زائد.",
    features: [
      "تحلیل ۳۶۰ درجه‌ی فرایندها",
      "طراحی و پیاده‌سازی اتوماسیون اختصاصی",
      "پایش KPI با داشبورد لحظه‌ای",
      "آموزش تیم و پشتیبانی ویژه"
    ],
    investment: "از ۱۲۰ میلیون تومان",
    accent: "bg-gradient-to-r from-sky-500/20 to-violet-500/20"
  },
  {
    title: "بسته‌ی ایجنت‌های سفارشی",
    description:
      "ساخت ایجنت‌های کاملاً اختصاصی متناسب با فرایندهای سازمان شما همراه با اتصال به سیستم‌های داخلی و پایگاه‌های داده.",
    features: ["مطالعه رفتار کاربر", "مدل‌های زبانی اختصاصی", "یکپارچه‌سازی با ERP/CRM", "پایش و بهبود مداوم"],
    investment: "از ۱۸۰ میلیون تومان",
    accent: "bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20"
  }
];

const differentiators = [
  "مدل تحلیلی اختصاصی برای تشخیص حفره‌های دورریز هزینه",
  "اتصال مستقیم ایجنت‌ها به داده‌های کسب‌وکار شما",
  "تیم چندرشته‌ای (تحلیلگر داده، اتوماسیون و استراتژی) در کنار شما",
  "پشتیبانی و بهینه‌سازی مستمر پس از استقرار"
];

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <section className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white">محصولات و بسته‌های هوشمندسازی Agentic AI</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            راهکارهای ما بر اساس اندازه و سطح بلوغ کسب‌وکار شما طراحی شده‌اند تا بیشترین بازده را با کمترین ریسک به
            همراه داشته باشند.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.title} className={`glass rounded-3xl p-8 flex flex-col gap-6 ${pkg.accent}`}>
              <div>
                <h2 className="text-xl font-semibold text-white">{pkg.title}</h2>
                <p className="mt-3 text-slate-300 leading-loose">{pkg.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200 leading-relaxed pr-4 list-disc list-inside">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <span className="text-sm text-slate-400">سرمایه‌گذاری مورد نیاز</span>
                <p className="text-lg font-semibold text-primary-200 mt-2">{pkg.investment}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="glass rounded-3xl p-10 space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold text-white">چرا Agentic AI؟</h2>
            <p className="text-slate-300 leading-loose">
              فراتر از ابزار، ما شریک تکنولوژی و استراتژی شما هستیم تا از هوش مصنوعی نتیجه‌ محور بگیرید.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 text-sm leading-loose">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
