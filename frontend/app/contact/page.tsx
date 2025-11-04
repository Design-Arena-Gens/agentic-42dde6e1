import { ContactForm } from "@/components/ContactForm";

const contactInfo = [
  { label: "پست الکترونیکی", value: "hello@agenticaiagency.ir" },
  { label: "شماره تماس", value: "۰۲۱-۲۸۴۲۹۵۴۲" },
  { label: "آدرس دفتر", value: "تهران، بلوار نلسون ماندلا، پلاک ۱۲، طبقه ۶" },
  { label: "ساعات پاسخگویی", value: "شنبه تا چهارشنبه ۹ تا ۱۸" }
];

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <section className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">ارتباط با Agentic AI</h1>
            <p className="text-slate-300 leading-loose">
              فرم مقابل را برای درخواست مشاوره یا دریافت اطلاعات بیشتر تکمیل کنید. متخصصان ما ظرف حداکثر ۲۴ ساعت کاری با
              شما تماس خواهند گرفت.
            </p>
          </div>
          <ContactForm />
        </section>
        <aside className="glass rounded-3xl p-8 space-y-6 h-fit">
          <h2 className="text-xl font-semibold text-white">اطلاعات تماس مستقیم</h2>
          <ul className="space-y-4 text-sm text-slate-200">
            {contactInfo.map((info) => (
              <li key={info.label} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                <div className="text-xs text-slate-400 mb-1">{info.label}</div>
                <div className="text-base">{info.value}</div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-6 space-y-3 text-sm leading-loose">
            <h3 className="text-base font-semibold text-primary-100">اعلان مهم</h3>
            <p>
              برای پروژه‌های بزرگ سازمانی، امکان عقد قرارداد NDA و استقرار تیم در محل شما نیز فراهم است. در صورت تمایل در
              فرم درخواست خود اشاره کنید.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
