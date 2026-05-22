// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";

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
          
          <SiteHeader />

          

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

