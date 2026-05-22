"use client";
import Image from "next/image";

import Link from "next/link";

import { useMemo, useRef, useState } from "react";;


const CONTACTS = {
  address: "Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1",
  
mainPhone: "+7 (931) 322-33-33",
  mainPhoneDigits: "79313223333",

  truck: { title: "Грузовое СТО", phone: "+7 (921) 300-66-45", email: "master@trans-hub.ru" },
  car: { title: "Легковое СТО", phone: "+7 (931) 386-62-03", email: "lsto@trans-hub.ru" },
  wash: { title: "Мойка", phone: "+7 (999) 008-16-42", email: "moika@trans-hub.ru" },
};

const services = [
  { title: "Грузовое СТО", image: "/images/services/service-truck.jpg", text: "Ремонт и обслуживание грузовых авто, автобусов и спецтехники." },
  { title: "Легковое СТО", image: "/images/services/service-car.jpg", text: "ТО, диагностика, ремонт, шиномонтаж и работы по ходовой." },
  { title: "Грузовая мойка", image: "/images/services/service-wash.png", text: "Быстрая мойка грузовой техники и фургонов. Просторные боксы." },
  { title: "Склад запчастей", image: "/images/services/service-parts.jpg", text: "Оригинальные и проверенные аналоги. Сокращаем время ремонта." },
  { title: "Доп. услуги", image: "/images/services/service-extra.jpg", text: "На территории есть шиномонтаж, кафе, заправка." },
  { title: "Мотель и стоянка", image: "/images/services/service-motel.jpg", text: "Размещение водителей и охраняемая стоянка 24/7." },
];

const advantages = [
  { title: "Официальный сервисный центр", text: "Соблюдаем технологии и регламенты." },
  { title: "Полный комплекс услуг", text: "СТО, мойка, запчасти, мотель и стоянка — на одной территории." },
  { title: "Собственный склад запчастей", text: "Быстрее ремонт — меньше простой техники." },
  { title: "10 лет на рынке", text: "Опытная команда и стабильный сервис." },
  { title: "Удобная локация", text: "Киевское шоссе, 53 км — удобно по трассе." },
  { title: "Круглосуточно 24/7", text: "Работаем без выходных." },
];

const promos = [
  {
    title: "Акция: бесплатная диагностика",
    date: "Актуально",
    excerpt: "Условия и сроки уточняйте по телефону или через страницу «Контакты».",
  },
  {
    title: "Спецпредложения по сезонным работам",
    date: "Актуально",
    excerpt: "Публикуем предложения по ТО и дополнительным работам.",
  },
];

const news = [
  {
    title: "Обновления графика и режима работы подразделений",
    date: "Новости",
    excerpt: "Оперативно сообщаем о графике и изменениях в услугах.",
  },
  {
    title: "Новые услуги и расширение сервиса",
    date: "Новости",
    excerpt: "Пишем о новых направлениях и возможностях комплекса.",
  },
];

function phoneToTel(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export default function HomePage() {
  const [tab, setTab] = useState<"promos" | "news">("promos");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);


  // Яндекс карта — точка (по координатам)
  const yandexMapSrc =
    "https://yandex.ru/map-widget/v1/?ll=30.084031%2C59.525182&z=16&pt=30.084031,59.525182,pm2rdm";

  // Кнопка "Построить маршрут" — сразу открывает режим маршрута к точке
  const routeLink =
    "https://yandex.ru/maps/?ll=30.084031,59.525182&mode=routes&rtext=~59.525182,30.084031&rtt=auto&z=16";

  const whatsappLink = `https://wa.me/${CONTACTS.mainPhoneDigits}`;
  const telegramLink = useMemo(() => {
    const txt = "Здравствуйте! Хочу записаться на сервис в ТрансХаб.";
    return `https://t.me/share/url?url=https://trans-hub.ru&text=${encodeURIComponent(txt)}`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
     
      {/* HERO */}
      <section className="relative border-b border-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/hero/hero.jpg" alt="ТрансХаб" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Комплексный сервис 24/7
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Комплексный сервис грузовых и легковых автомобилей
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl">
              «ТрансХаб» — современный автосервис в Ленинградской области.
              Грузовое и легковое СТО, грузовая мойка, склад запчастей, мотель и стоянка —
              всё на одной территории.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
              >
                Записаться на сервис
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/25 px-5 py-2.5 text-sm text-slate-50 hover:border-amber-400 transition"
              >
                Услуги
              </Link>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              Адрес: {CONTACTS.address}. Работаем круглосуточно.
            </div>
          </div>

          {/* Мини-карточки справа */}
   {/* Видео вместо новогодней картинки */}
<button
  type="button"
  onClick={() => setIsVideoOpen(true)}
  onMouseEnter={() => previewVideoRef.current?.play()}
  onMouseLeave={() => {
    if (previewVideoRef.current) {
      previewVideoRef.current.pause();
      previewVideoRef.current.currentTime = 0;
    }
  }}
  className="group relative overflow-hidden rounded-3xl border border-slate-800 shadow-lg bg-slate-900"
>
  <video
    ref={previewVideoRef}
    src="/videos/transhub-video.mp4"
    muted
    playsInline
    preload="metadata"
    className="h-full w-full object-cover opacity-60 group-hover:opacity-90 transition"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/10" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-2xl font-bold shadow-lg group-hover:bg-emerald-400 transition">
      ▶
    </div>
  </div>

  <div className="absolute left-5 bottom-5 text-left">
    <div className="text-[11px] uppercase tracking-wide text-amber-300">
      Видео о комплексе
    </div>
    <div className="mt-1 text-lg font-semibold text-slate-50">
      Посмотрите «ТрансХаб» в работе
    </div>
  </div>
</button>

        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-slate-950 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-lg md:text-xl font-semibold">Преимущества</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <GoldIcon />
                  <div>
                    <div className="text-sm font-semibold">{a.title}</div>
                    <div className="mt-1 text-xs text-slate-300">{a.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги (с фото) */}
      <section className="bg-slate-950 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg md:text-xl font-semibold">Услуги</h2>
            <Link href="/services" className="text-sm text-amber-400 hover:text-amber-300">
              Все услуги →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm"
              >
                <div className="relative h-40">
                  <Image src={s.image} alt={s.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="mt-1 text-xs text-slate-300">{s.text}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Новости и акции (две вкладки) */}
      <section className="bg-slate-950 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-lg md:text-xl font-semibold">Новости и акции</h2>

            <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/40 p-1">
              <button
                onClick={() => setTab("promos")}
                className={[
                  "px-4 py-2 text-xs rounded-full transition",
                  tab === "promos"
                    ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                    : "text-slate-300 hover:text-slate-50",
                ].join(" ")}
              >
                Акции
              </button>
              <button
                onClick={() => setTab("news")}
                className={[
                  "px-4 py-2 text-xs rounded-full transition",
                  tab === "news"
                    ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                    : "text-slate-300 hover:text-slate-50",
                ].join(" ")}
              >
                Новости
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {(tab === "promos" ? promos : news).map((n) => (
              <div key={n.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
                    {tab === "promos" ? "Акция" : "Новость"}
                  </span>
                  <span className="text-[11px] text-slate-400">{n.date}</span>
                </div>
                <div className="mt-2 text-sm font-semibold">{n.title}</div>
                <div className="mt-1 text-xs text-slate-300">{n.excerpt}</div>

                <div className="mt-3">
                  <Link href="/blog" className="text-xs text-amber-400 hover:text-amber-300">
                    Перейти в раздел →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты + Яндекс карта */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-lg md:text-xl font-semibold">Контакты</h2>
            <div className="flex flex-wrap gap-2">
              <a
                href={phoneToTel(CONTACTS.mainPhone)}
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
              >
                Позвонить
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                WhatsApp
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
              >
                Telegram
              </a>
              <a
                href={routeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Построить маршрут
              </a>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_420px]">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-sm">
              <div className="relative h-[340px]">
                <iframe
                  src={yandexMapSrc}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="ТрансХаб на карте"
                  className="absolute inset-0"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Адрес</div>
              <div className="mt-1 text-sm text-slate-300">{CONTACTS.address}</div>

              <div className="mt-4 text-sm font-semibold">Телефон</div>
              <a className="mt-1 block text-base font-semibold" href={phoneToTel(CONTACTS.mainPhone)}>
                {CONTACTS.mainPhone}
              </a>

              <div className="mt-5 grid gap-2 text-xs text-slate-300">
                <Line label="Грузовое СТО" value={CONTACTS.truck.phone} href={phoneToTel(CONTACTS.truck.phone)} />
                <Line label="Легковое СТО" value={CONTACTS.car.phone} href={phoneToTel(CONTACTS.car.phone)} />
                <Line label="Мойка" value={CONTACTS.wash.phone} href={phoneToTel(CONTACTS.wash.phone)} />
              </div>

              <div className="mt-5">
                <Link
                  href="/contacts"
                  className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
                >
                  Перейти на страницу контактов
                </Link>
              </div>

              <div className="mt-4 text-[11px] text-slate-400">
                Далее можно добавить форму “Перезвоните мне” и/или “Заявка на сервис”.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-6 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} ТрансХаб. Все права защищены.
        </div>
      </footer>

     {isVideoOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 px-4">
    <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl">
      <button
        type="button"
        onClick={() => setIsVideoOpen(false)}
        className="absolute right-4 top-4 z-10 rounded-full bg-neutral-900/80 px-4 py-2 text-sm text-neutral-50 border border-neutral-700 hover:border-amber-400 transition"
      >
        Закрыть
      </button>

      <video
        src="/videos/transhub-video.mp4"
        controls
        autoPlay
        className="h-full w-full bg-black"
      />
    </div>
  </div>
)}
    </div>
  );
}

function TopContactCard(props: { title: string; phone: string; email: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 shadow-sm">
      <div className="flex items-start gap-3">
        <SmallPictogram />
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-wide text-amber-300">{props.title}</div>
          <a className="mt-1 block text-sm font-semibold text-slate-50" href={`tel:${props.phone.replace(/\D/g, "")}`}>
            {props.phone}
          </a>
          <a className="mt-0.5 block text-xs text-slate-300 truncate" href={`mailto:${props.email}`}>
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function MiniCard(props: { title: string; phone?: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-sm">
      <div className="text-[11px] uppercase tracking-wide text-amber-300">{props.title}</div>
      {props.phone ? (
        <a className="mt-1 block text-sm font-semibold" href={`tel:${props.phone.replace(/\D/g, "")}`}>
          {props.phone}
        </a>
      ) : (
        <div className="mt-1 text-xs text-slate-300">{props.note}</div>
      )}
    </div>
  );
}

function Line(props: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-slate-300">{props.label}</span>
      <a className="font-medium text-slate-100" href={props.href}>
        {props.value}
      </a>
    </div>
  );
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

function SmallPictogram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        fill="#fbbf24"
        d="M6.6 10.8c1.6 3.1 3.7 5.3 6.8 6.8l2.3-2.3c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.7 22.2 1.8 13.3 1.8 2.1 1.8 1.5 2.3 1 3 1h3.4c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.6 3.2.1.4 0 .9-.3 1.2l-2.3 2.2z"
      />
    </svg>
  );
}