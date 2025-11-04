const articles = [
  {
    title: "چگونه اتوماسیون هوشمند هزینه‌های پنهان سازمان را کاهش می‌دهد؟",
    excerpt:
      "در این مقاله روند شناسایی نقاط اتلاف منابع و طراحی الگوریتم‌های کاهش هزینه را با مثال‌های واقعی بررسی می‌کنیم.",
    category: "تحلیل فرآیند",
    readTime: "۸ دقیقه",
    publishDate: "۲۵ اردیبهشت ۱۴۰۳"
  },
  {
    title: "۵ سناریوی کاربردی برای استفاده از ایجنت‌های فروش در بازار ایران",
    excerpt:
      "بررسی تجربه مشتریان Agentic AI در فروش B2B و B2C و تاثیر ایجنت‌های شخصی‌سازی شده بر روی نرخ تبدیل و وفاداری مشتری.",
    category: "فروش هوشمند",
    readTime: "۶ دقیقه",
    publishDate: "۱۷ خرداد ۱۴۰۳"
  },
  {
    title: "راهنمای گام‌به‌گام پیاده‌سازی جریان‌کاری هوشمند در سازمان",
    excerpt:
      "از نقشه‌برداری جریان‌ها تا اتصال سیستم‌های مختلف و گزارش‌گیری لحظه‌ای، فرایند کامل پیاده‌سازی را مرور می‌کنیم.",
    category: "اتوماسیون سازمانی",
    readTime: "۱۰ دقیقه",
    publishDate: "۲۹ خرداد ۱۴۰۳"
  }
];

const categories = ["همه", "تحلیل فرآیند", "فروش هوشمند", "اتوماسیون سازمانی", "هوش مصنوعی کاربردی"];

export default function ArticlesPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white">صفحه‌ی مقالات و بینش‌ها</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-loose">
            به‌روزترین دیدگاه‌ها و تجربه‌های عملی تیم Agentic AI درباره‌ی هوشمندسازی، اتوماسیون و استفاده از ایجنت‌ها در
            صنایع مختلف.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-700/60 bg-slate-900/60 px-5 py-2 text-xs text-slate-200"
            >
              {category}
            </span>
          ))}
        </div>
        <section className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="glass rounded-3xl p-6 space-y-4">
              <div className="text-xs text-slate-400 flex justify-between">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-white leading-relaxed">{article.title}</h2>
              <p className="text-sm text-slate-300 leading-loose">{article.excerpt}</p>
              <div className="text-xs text-slate-400">{article.publishDate}</div>
              <button className="text-sm text-primary-200 hover:text-primary-100 transition self-start">مطالعه بیشتر</button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
