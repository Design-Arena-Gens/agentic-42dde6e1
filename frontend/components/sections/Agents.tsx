import Image from "next/image";

const agents = [
  {
    name: "Agentic Sales Navigator",
    description:
      "ایجنت تخصصی فروش با قابلیت اولویت‌بندی لیدها، پیشنهاد هوشمند مسیر ارتباط و تولید پاسخ‌های شخصی‌سازی شده.",
    useCases: ["اسکoring لید", "تولید پاسخ در واتساپ/ایمیل", "پایش عملکرد تیم فروش"],
    badge: "پرفروش‌ترین"
  },
  {
    name: "Agentic Ops Orchestrator",
    description:
      "مدیریت عملیات با اتوماسیون کامل سفارش تا تحویل، پایش SLA، تخصیص هوشمند وظایف و هماهنگی تیم‌های پراکنده.",
    useCases: ["اتوماسیون عملیات", "هماهنگی چند تیمی", "کنترل کیفیت"],
    badge: "به‌زودی نسخه ۲"
  },
  {
    name: "Agentic Insight Analyst",
    description:
      "تحلیل‌گر داده با قابلیت متصل شدن به دیتابیس‌ها، تولید گزارش‌های خودکار، تحلیل روند و پیشنهاد اقدام‌های اصلاحی.",
    useCases: ["آنالیز مالی", "تحلیل رفتار مشتری", "پایش KPI"],
    badge: "پیشنهاد ویژه"
  }
];

export function Agents() {
  return (
    <section className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">ایجنت‌های قابل سفارشی‌سازی</h2>
            <p className="mt-3 text-slate-300 leading-loose max-w-2xl">
              ایجنت‌های آماده‌ی Agentic AI Agency بر اساس چالش‌های پر تکرار کسب‌وکارها طراحی شده و قابل سفارشی‌سازی بر
              اساس فرایندهای شما هستند.
            </p>
          </div>
          <div className="relative h-36 w-full md:w-64">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/30 via-sky-400/20 to-transparent blur-2xl" />
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=640"
              alt="هوش مصنوعی"
              fill
              className="rounded-3xl object-cover border border-slate-700/50"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name} className="glass rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition">
              <span className="self-start rounded-full border border-primary-400/40 px-3 py-1 text-xs text-primary-200">
                {agent.badge}
              </span>
              <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
              <p className="text-slate-300 leading-loose flex-1">{agent.description}</p>
              <div className="space-y-2">
                <span className="text-sm text-slate-400 font-semibold">کاربردها:</span>
                <ul className="text-sm text-slate-200 space-y-1 pr-4 list-disc list-inside">
                  {agent.useCases.map((useCase) => (
                    <li key={useCase}>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
