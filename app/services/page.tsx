import Image from "next/image";
import Link from "next/link";

const CONTACTS = {
  address: "Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1",
  mainPhone: "+7 (931) 322-33-33",
};

const hours = [
  { title: "Сервис (СТО)", value: "09:00–21:00", badge: "Ежедневно" },
  { title: "Мойка", value: "24/7", badge: "Круглосуточно" },
  { title: "Кафе", value: "24/7", badge: "Круглосуточно" },
  { title: "Гостиница", value: "24/7", badge: "Круглосуточно" },
];

const services = [
  {
    title: "Грузовое СТО",
    image: "/images/services/service-truck1.jpg",
    bullets: [
      "Диагностика и ремонт узлов и агрегатов",
      "Тормоза, подвеска, рулевое управление",
      "Пневмосистема, электрика",
      "Двигатель, трансмиссия, выхлоп",
    ],
  },
  {
    title: "Легковое СТО",
    image: "/images/services/service-car1.jpg",
    bullets: [
      "Техническое обслуживание",
      "Диагностика, ремонт ходовой",
      "Тормозная система, электрика",
      "Шиномонтаж и сопутствующие работы",
    ],
  },
  {
    title: "Грузовая мойка",
    image: "/images/services/service-wash.jpg",
    bullets: [
      "Мойка грузовых автомобилей и фургонов",
      "Ручная мойка, комплексные услуги",
      "Санитарная обработка транспорта",
      "Работаем круглосуточно 24/7",
    ],
  },
  {
    title: "Склад запчастей",
    image: "/images/services/service-parts2.jpg",
    bullets: [
      "Оригинальные запчасти и проверенные аналоги",
      "Подбор расходников под ваш транспорт",
      "Сокращение простоя за счёт наличия",
    ],
  },
  {
    title: "Мотель / гостиница",
    image: "/images/services/service-motel2.jpg",
    bullets: [
      "Размещение водителей и гостей комплекса",
      "Круглосуточный режим 24/7",
      "Комфортные условия для отдыха в пути",
    ],
  },
  {
    title: "Кафе и инфраструктура",
    image: "/images/services/service-extra2.jpg",
    bullets: [
      "Кафе работает 24/7",
      "Доп. инфраструктура для водителей",
      "Удобно совместить сервис и отдых",
    ],
  },
];
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-xs uppercase tracking-wide text-slate-400">Услуги</div>
          <h1 className="mt-2 text-3xl font-semibold">Сервис, мойка и инфраструктура «ТрансХаб»</h1>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl">
            Полный комплекс услуг для грузового и легкового транспорта на одной территории.
            Адрес: {CONTACTS.address}.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
            >
              Записаться на сервис
            </Link>
            <a
              href={`tel:${CONTACTS.mainPhone.replace(/\D/g, "")}`}
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
            >
              Позвонить: {CONTACTS.mainPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Время работы */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-lg md:text-xl font-semibold">Время работы</h2>

          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {hours.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{h.title}</div>
                    <div className="mt-1 text-2xl font-semibold">{h.value}</div>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
                    {h.badge}
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-300">
                  {h.title === "Сервис (СТО)" ? "Запись рекомендуется" : "Без выходных"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-4 text-sm text-slate-300">
            Если вы едете по трассе — можно совместить обслуживание, мойку и отдых на территории комплекса.
          </div>
        </div>
      </section>

      {/* Сетка услуг */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg md:text-xl font-semibold">Основные направления</h2>
            <Link href="/contacts" className="text-sm text-amber-400 hover:text-amber-300">
              Контакты и запись →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm"
              >
                <div className="relative h-44">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-3">
                    <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
                      {s.title}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <ul className="space-y-2 text-sm text-slate-200">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <Dot />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
                    >
                      Записаться
                    </Link>
                    <Link
                      href="/contacts"
                      className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
                    >
                      Уточнить детали
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Нижний CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
            <div>
              <div className="text-lg font-semibold">Нужна консультация или запись?</div>
              <div className="mt-1 text-sm text-slate-300">
                Перейдите в контакты — подскажем по времени, стоимости и доступности постов.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/contacts"
                className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Перейти в контакты
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-5 py-2.5 text-sm hover:border-amber-400 transition"
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-6 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">© {new Date().getFullYear()} ТрансХаб. Все права защищены.</div>
      </footer>
    </div>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />;
}