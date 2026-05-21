// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
          <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                
              </div>
              <nav className="hidden md:flex items-center gap-2 text-sm">
  <a
    href="/"
    className="inline-flex items-center rounded-full px-4 py-2 font-medium
               bg-neutral-900 text-neutral-50
               border border-neutral-500
               hover:border-amber-400 hover:text-amber-300
               transition"
  >
    Главная
  </a>
  <a
    href="/services"
    className="inline-flex items-center rounded-full px-4 py-2 font-medium
               bg-neutral-900 text-neutral-50
               border border-neutral-500
               hover:border-amber-400 hover:text-amber-300
               transition"
  >
    Услуги
  </a>
  <a
    href="/company"
    className="inline-flex items-center rounded-full px-4 py-2 font-medium
               bg-neutral-900 text-neutral-50
               border border-neutral-500
               hover:border-amber-400 hover:text-amber-300
               transition"
  >
    О компании
  </a>
  <a
    href="/blog"
    className="inline-flex items-center rounded-full px-4 py-2 font-medium
               bg-neutral-900 text-neutral-50
               border border-neutral-500
               hover:border-amber-400 hover:text-amber-300
               transition"
  >
    Новости
  </a>
  <a
    href="/contacts"
    className="inline-flex items-center rounded-full px-4 py-2 font-medium
               bg-neutral-900 text-neutral-50
               border border-neutral-500
               hover:border-amber-400 hover:text-amber-300
               transition"
  >
    Контакты
  </a>
</nav>
              <div className="hidden md:flex flex-col text-right text-xs">
                <span className="text-neutral-400">Круглосуточно</span>
                <a href="tel:+79313223333" className="font-semibold">
                  +7 (931) 322-33-33
                </a>
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

