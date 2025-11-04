"use client";

import { FormEvent, useState } from "react";
import api from "@/lib/api";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message")
    };
    try {
      setState("loading");
      const response = await api.post("/contact", payload);
      setState("success");
      setMessage(response.data?.message ?? "پیام شما با موفقیت ارسال شد.");
      form.reset();
    } catch (error: any) {
      setState("error");
      const apiMessage = error?.response?.data?.detail ?? "ارسال فرم با خطا مواجه شد.";
      setMessage(apiMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
      <div>
        <label htmlFor="full_name" className="block text-sm font-semibold text-slate-200 mb-2">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required
          className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
          placeholder="مثال: سارا احمدی"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
            ایمیل سازمانی
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
            placeholder="مثال: sara@company.ir"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2">
            شماره تماس
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
            placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-slate-200 mb-2">
          نام کسب‌وکار / برند
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
          placeholder="نام برند شما"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
          توضیح درخواست و نیازمندی‌ها
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
          placeholder="لطفا چالش‌ها و نیازهای خود را توضیح دهید..."
        />
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-glow hover:scale-[1.01] transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "در حال ارسال..." : "درخواست مشاوره"}
      </button>
      {state !== "idle" && (
        <p
          className={`text-sm font-medium ${
            state === "success" ? "text-emerald-300" : state === "error" ? "text-rose-300" : "text-slate-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
