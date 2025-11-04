"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-10">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-xs text-sky-200 shadow-lg border border-slate-700/80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ما شریک هوشمندی کسب‌وکار شما هستیم
        </motion.span>
        <motion.h1
          className="text-3xl md:text-5xl font-black leading-relaxed md:leading-tight text-slate-50 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          هوشمندسازی فرآیندها و فروش ایجنت‌های اختصاصی برای رشد سریع‌تر کسب‌وکار شما
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-slate-300 max-w-2xl leading-loose"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          با راهکارهای نوآورانه‌ی Agentic AI Agency حفره‌های هزینه کسب‌وکارتان را شناسایی، حذف و جریان‌های کاری هوشمند
          طراحی کنید تا با خیال راحت روی رشد و توسعه تمرکز کنید.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-glow hover:scale-[1.02] transition"
          >
            مشاهده ایجنت‌ها و محصولات
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-600/70 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 hover:text-primary-200 hover:border-primary-400 transition"
          >
            درخواست مشاوره و ارزیابی
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
