"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/company", label: "О компании" },
  { href: "/blog", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/60 bg-neutral-950/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Логотип + адрес */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-40 shrink-0 md:h-16 md:w-56">
              <Image
                src="/logo-transhub.svg"
                alt="ТрансХаб"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden lg:block text-xs leading-tight text-neutral-300">
              <div className="font-medium text-neutral-100">
                Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1
              </div>
              <div className="mt-1 font-semibold text-neutral-50">
                +7 (931) 322-33-33
              </div>
            </div>
          </Link>

          {/* Меню на компьютере */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-500 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Кнопка бургер на телефоне */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-slate-50"
            aria-label="Открыть меню"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Адрес на телефоне */}
        <div className="mt-2 text-xs text-neutral-300 lg:hidden">
          Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1
        </div>

        {/* Выпадающее меню на телефоне */}
        {isOpen && (
          <nav className="mt-3 grid gap-2 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-50 hover:border-amber-400 hover:text-amber-300 transition"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:+79313223333"
              className="rounded-2xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Позвонить
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}