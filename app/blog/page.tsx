"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PostType = "news" | "promo";

type Post = {
  id: string;
  type: PostType;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const COMPANY_NOTICE = {
  title: "Информация для владельцев КАМАЗ",
  bullets: [
    "Компания является дилером КАМАЗА.",
    "В штате есть инженер по гарантии КАМАЗ.",
    "Работает диагност (диагностика и поиск неисправностей).",
  ],
};

const posts: Post[] = [
  {
    id: "diagnostics",
    type: "news",
    title: "Автоэлектрик и компьютерная диагностика грузовых автомобилей",
    date: "Актуально",
    excerpt:
      "В ТрансХаб доступно новое направление обслуживания. Проводим компьютерную диагностику электронных систем, поиск неисправностей и работы автоэлектрика грузового транспорта.",
    image: "/images/news/diagnostic.jpg",
  },
];

export default function BlogPage() {
  const [tab, setTab] = useState<PostType>("news");

  const filtered = useMemo(() => {
    return posts.filter((p) => p.type === tab);
  }, [tab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Шапка страницы */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-xs uppercase tracking-wide text-slate-400">
            Новости и акции
          </div>
          <h1 className="mt-2 text-3xl font-semibold">Новости компании</h1>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl">
            Публикуем акции, изменения в работе, новые услуги и важные объявления.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
            >
              Записаться на сервис
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
            >
              На главную
            </Link>
          </div>
        </div>
      </section>

      {/* Инфо-блок КАМАЗ */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <GoldIcon />
              <div className="min-w-0">
                <div className="text-sm font-semibold">{COMPANY_NOTICE.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {COMPANY_NOTICE.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Dot />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-slate-300">
                  По вопросам гарантии и диагностики — перейдите в{" "}
                  <Link href="/contacts" className="text-amber-300 hover:text-amber-200">
                    контакты
                  </Link>{" "}
                  и выберите нужное подразделение.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Лента */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-10">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              Пока нет публикаций в этом разделе.
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
                      {p.type === "promo" ? "Акция" : "Новость"}
                    </span>
                    <span className="text-[11px] text-slate-400">{p.date}</span>
                  </div>

                  <h2 className="mt-2 text-base font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
                    >
                      Записаться
                    </Link>
                    {/* Когда будете делать отдельные страницы новостей — заменим на /blog/[slug] */}
                    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/20 px-4 py-2 text-xs text-slate-300">
                      Подробнее — позже
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

          </div>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />;
}

function GoldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        fill="#fbbf24"
        d="M12 2l2.4 6.6L21 9l-5 4.2L17.5 20 12 16.7 6.5 20 8 13.2 3 9l6.6-.4L12 2z"
      />
    </svg>
  );
}
