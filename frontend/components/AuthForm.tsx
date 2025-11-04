"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

type Props = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: Props) {
  const router = useRouter();
  const { login, register } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLogin = mode === "login";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = data.get("email")?.toString() ?? "";
    const password = data.get("password")?.toString() ?? "";
    const fullName = data.get("full_name")?.toString() ?? "";
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(fullName, email, password);
      }
      router.push("/");
    } catch (err: any) {
      const message = err?.response?.data?.detail ?? "خطایی رخ داده است. لطفا دوباره تلاش کنید.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="glass rounded-3xl p-8 space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-white">{isLogin ? "ورود به حساب کاربری" : "ایجاد حساب جدید"}</h1>
          <p className="text-sm text-slate-300">
            {isLogin
              ? "برای دسترسی به پنل و استفاده از خدمات وارد شوید."
              : "حساب کاربری خود را برای شروع همکاری با ما ایجاد کنید."}
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
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
                placeholder="مثال: نیما رسولی"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
              placeholder="example@domain.ir"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-2">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={8}
              className="w-full rounded-2xl bg-slate-900/70 border border-slate-700/80 px-4 py-3 text-slate-100 focus:border-primary-400 focus:outline-none"
              placeholder="حداقل ۸ کاراکتر"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-primary-500 via-sky-500 to-blue-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-glow hover:scale-[1.01] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "در حال ارسال..." : isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>
        {error && <p className="text-sm text-rose-300 text-center">{error}</p>}
        <div className="text-sm text-slate-300 text-center">
          {isLogin ? (
            <>
              حساب کاربری ندارید؟{" "}
              <Link href="/register" className="text-primary-200 hover:text-primary-100">
                ثبت‌نام کنید
              </Link>
            </>
          ) : (
            <>
              قبلا ثبت‌نام کرده‌اید؟{" "}
              <Link href="/login" className="text-primary-200 hover:text-primary-100">
                وارد شوید
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
