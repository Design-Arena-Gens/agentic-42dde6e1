import { SparklesIcon, BuildingOffice2Icon, CpuChipIcon, CommandLineIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "تحلیل و عارضه‌یابی هوشمند",
    description:
      "بررسی دقیق داده‌های کسب‌وکار و تشخیص نقاط اتلاف منابع با کمک مدل‌های تحلیلی و هوش مصنوعی اختصاصی.",
    icon: SparklesIcon
  },
  {
    title: "طراحی اتوماسیون‌های اختصاصی",
    description:
      "مهندسی و پیاده‌سازی اتوماسیون‌های متناسب با ساختار سازمانی و ساختار تصمیم‌گیری شما برای افزایش بهره‌وری.",
    icon: CpuChipIcon
  },
  {
    title: "جریان‌کاری هوشمند و اجرا",
    description:
      "ساخت، استقرار و مانیتورینگ جریان‌های کاری هوشمند با داشبوردهای بلادرنگ و گزارش‌های تصمیم‌ساز.",
    icon: CommandLineIcon
  },
  {
    title: "ایجنت‌های آماده‌ی شخصی‌سازی",
    description:
      "دسترسی به مجموعه‌ای از ایجنت‌های قدرتمند از پیش آماده برای فروش و سفارشی‌سازی بر اساس نیاز شما.",
    icon: BuildingOffice2Icon
  }
];

export function Services() {
  return (
    <section className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">خدمات هوشمندسازی Agentic AI</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            ما از کشف مسائلی که سرعت رشد شما را کند کرده‌اند تا اجرای اتوماسیون و پیاده‌سازی ایجنت‌های تخصصی همراه شما
            هستیم.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow border border-slate-700/60"
            >
              <service.icon className="w-10 h-10 text-primary-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-slate-300 leading-loose">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
