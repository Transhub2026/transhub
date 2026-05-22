// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ТрансХаб — сервис грузовых и легковых авто",
  description:
    "Комплексное СТО в Ленинградской области: ремонт и обслуживание грузовых и легковых автомобилей, мойка, мотель, стоянка.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-neutral-950 text-neutral-50">
        <div className="min-h-screen flex flex-col">
          {/* Шапка */}
          <header className="sticky top-0 z-50 border-b border-emerald-950/60 bg-neutral-950/95 backdrop-blur">
  <div className="max-w-6xl mx-auto px-4 py-3">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      
      {/* Логотип + адрес */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-40 shrink-0 md:h-16 md:w-56">
          <Image
            src="/logo-transhub.svg"
            alt="ТрансХаб"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="hidden sm:block text-xs leading-tight text-slate-300">
          <div className="font-medium text-slate-100">
            Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1
          </div>
          <a
            href="tel:+79313223333"
            className="mt-1 block font-semibold text-slate-50"
          >
            +7 (931) 322-33-33
          </a>
        </div>
      </div>

      {/* Навигация */}
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
        <Link
          href="/"
          className="shrink-0 rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
        >
          Главная
        </Link>

        <Link
          href="/services"
          className="shrink-0 rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
        >
          Услуги
        </Link>

        <Link
          href="/company"
          className="shrink-0 rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
        >
          О компании
        </Link>

        <Link
          href="/blog"
          className="shrink-0 rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
        >
          Новости
        </Link>

        <Link
          href="/contacts"
          className="shrink-0 rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
        >
          Контакты
        </Link>
      </nav>

      {/* Кнопки справа */}
      <div className="flex gap-2">
        <a
          href="tel:+79313223333"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-50 hover:border-amber-400 transition lg:flex-none"
        >
          Позвонить
        </a>

        <a
          href="https://yandex.ru/maps/?ll=30.084031,59.525182&mode=routes&rtext=~59.525182,30.084031&rtt=auto&z=16"
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition lg:flex-none"
        >
          Маршрут
        </a>
      </div>
    </div>

    {/* Адрес на мобильном */}
    <div className="mt-2 block text-xs text-slate-300 sm:hidden">
      Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1
    </div>
  </div>
</header>
          

          {/* Контент */}
          <main className="flex-1">
            {children}
          </main>

          {/* Футер */}
         <footer className="border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>© {new Date().getFullYear()} ТрансХаб. Все права защищены.</div>
              <div className="flex gap-4">
                <a href="/privacy">Политика конфиденциальности</a>
                <span>Разработка: ваша команда</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

