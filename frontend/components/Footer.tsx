import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/60 bg-dark/80">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4 text-sm text-slate-300">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Agentic AI Agency</h3>
          <p>
            آژانس تخصصی هوشمندسازی و اتوماسیون کسب‌وکارها به کمک ایجنت‌های قدرتمند و اختصاصی برای رشد سریع‌تر و
            پایدارتر.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-white">دسترسی سریع</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-primary-200 transition" href="/products">
                محصولات
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-200 transition" href="/articles">
                مقالات
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-200 transition" href="/academy">
                آکادمی
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary-200 transition" href="/contact">
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-white">خدمات اصلی</h4>
          <ul className="space-y-2">
            <li>تحلیل و عارضه‌یابی کسب‌وکار</li>
            <li>طراحی اتوماسیون‌های هوشمند اختصاصی</li>
            <li>ساخت و پیاده‌سازی جریان‌کاری هوشمند</li>
            <li>فروش و سفارشی‌سازی ایجنت‌های پیشرفته</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-white">ارتباط با ما</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-primary-300" />
              <span>۰۲۱-۲۸۴۲۹۵۴۲</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-primary-300" />
              <a href="mailto:hello@agenticaiagency.ir" className="hover:text-primary-200 transition">
                hello@agenticaiagency.ir
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-primary-300" />
              <span>تهران، بلوار نلسون ماندلا، پلاک ۱۲</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700/50 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Agentic AI Agency. تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
