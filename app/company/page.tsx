import Image from "next/image";
import Link from "next/link";

const CONTACTS = {
  address: "Большие Колпаны д, Киевское шоссе 53 км, д. 2",
};

const stats = [
  { title: "Транспортный кластер 24/7", text: "Инфраструктура для обслуживания и отдыха на одной территории." },
  { title: "Общая площадь 6 Га", text: "Пространство для сервисов, стоянки и сопутствующих услуг." },
  { title: "Круглосуточная охрана", text: "Территория под контролем 24/7." },
  { title: "Современное оборудование", text: "Оснащение сервисных зон и моечного комплекса." },
  { title: "Гарантия качества", text: "На услуги сервиса предоставляется гарантия." },
  { title: "Удобная локация", text: "Киевское шоссе / Е-95, рядом A120." },
];

const stoTruck = {
  title: "Грузовое СТО — 7 постов",
  items: [
    "Выхлопная система",
    "Двигатель",
    "Кабина",
    "Пневмосистема",
    "Подвеска",
    "Рулевое управление",
    "Тормоза",
    "Трансмиссия",
    "Электрика",
  ],
  note: "Режим работы СТО: 9:00–21:00, без выходных.",
};

const stoCar = {
  title: "Легковое СТО — 5 постов",
  items: [
    "Техническое обслуживание",
    "Развал-схождение 3D",
    "Ремонт ДВС",
    "Ремонт КПП",
    "Ремонт ходовой части",
    "Ремонт тормозов",
    "Автоэлектрика",
  ],
  note: "СТО оснащены современным оборудованием. Сотрудники проходят сертификацию. На услуги предоставляется гарантия.",
};

const wash = {
  title: "Грузовой автомоечный комплекс",
  left: [
    "Портальная мойка на 2 поста",
    "Ручная мойка",
    "Химчистка салона",
    "Санитарная обработка транспортного средства",
  ],
  right: [
    "Портальная мойка KÄRCHER: автобусы больших и малых размеров, «гармошки», автопоезда и самосвалы",
    "Высокая скорость и качество обслуживания: от 20 минут — 1 машина (мойка грузовиков сверху)",
    "Санитарная обработка обязательна для транспорта с продуктами — согласно требованиям, не менее 1 раза в месяц",
  ],
  notes: ["Режим работы 24/7", "Качественная автохимия", "Комфортная зона ожидания"],
};

const otherServices = {
  title: "Другие услуги",
  primary: [
    "Охраняемая стоянка грузовиков более 1 Га",
    "Кафе",
    "Душевые и прачечная для водителей",
    "Сдача в аренду земельных участков, офисов, складов, торговых помещений",
  ],
  onTerritory: [
    "Грузовой и легковой шиномонтаж",
    "Продажа грузовых шин и шин для спец-техники",
    "Газовая заправка",
    "Заправка дизельным топливом",
  ],
};

const corporate = {
  title: "Для корпоративных клиентов",
  bullets: [
    "ООО «ТрансХаб-Сервис» с 2020 года обслуживает корпоративные парки (легковые и грузовые).",
    "Комплексное обслуживание транспортных средств по 1 договору.",
    "Гарантия на выполненные услуги.",
    "Электронный документооборот.",
    "Любые виды оплаты: безналичный расчет, наличные, по карте.",
    "Индивидуальные условия сотрудничества.",
    "Персональный менеджер сопровождает на всех этапах взаимодействия.",
    "Расширяем собственные ремонтные мощности и площади.",
    "Создаем комфортные условия для водителей.",
  ],
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative border-b border-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_45%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            О компании
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            «ТрансХаб» — транспортный кластер 24/7
          </h1>

          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-300">
            Комплекс для обслуживания грузового и легкового транспорта: СТО, мойка, стоянка и
            сопутствующая инфраструктура. Адрес: {CONTACTS.address}.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
            >
              Записаться / связаться
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/25 px-5 py-2.5 text-sm text-slate-50 hover:border-amber-400 transition"
            >
              Смотреть услуги
            </Link>
          </div>
        </div>
      </section>

      {/* СТАТЫ */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-lg md:text-xl font-semibold">Ключевые факты</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <GoldIcon />
                  <div>
                    <div className="text-sm font-semibold">{s.title}</div>
                    <div className="mt-1 text-xs text-slate-300">{s.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* По желанию можно добавить изображение схемы территории из презентации */}
          {/* <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
            <div className="relative h-[340px]">
              <Image src="/images/company/territory-scheme.jpg" alt="Схема территории" fill className="object-cover opacity-90" />
            </div>
          </div> */}
        </div>
      </section>

      {/* СТО */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg md:text-xl font-semibold">Грузовой и легковой автосервис</h2>
            <span className="text-xs text-slate-400">Посты и направления работ</span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <InfoPanel title={stoTruck.title} note={stoTruck.note} items={stoTruck.items} />
            <InfoPanel title={stoCar.title} note={stoCar.note} items={stoCar.items} />
          </div>
        </div>
      </section>

      {/* МОЙКА */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg md:text-xl font-semibold">{wash.title}</h2>
            <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
              24/7
            </span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Что доступно</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {wash.left.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Dot />
                    <span className="text-slate-200">{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid gap-2">
                {wash.notes.map((n) => (
                  <div key={n} className="rounded-xl border border-slate-800 bg-slate-950/30 px-3 py-2 text-xs text-slate-300">
                    {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Особенности</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {wash.right.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Dot />
                    <span className="text-slate-200">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ДРУГИЕ УСЛУГИ */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-lg md:text-xl font-semibold">{otherServices.title}</h2>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">На территории комплекса</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {otherServices.primary.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Dot />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Также доступно</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {otherServices.onTerritory.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Dot />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* КОРПОРАТИВ */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-lg md:text-xl font-semibold">{corporate.title}</h2>
            <span className="text-xs text-slate-400">Условия работы и сопровождение</span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_420px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <ul className="space-y-2 text-sm text-slate-200">
                {corporate.bullets.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Dot />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Готовы обсудить сотрудничество?</div>
              <p className="mt-2 text-sm text-slate-300">
                Свяжитесь с нами — подберём условия под ваш парк и формат обслуживания.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/contacts"
                  className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
                >
                  Перейти в контакты
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/25 px-4 py-2 text-xs text-slate-50 hover:border-amber-400 transition"
                >
                  На главную
                </Link>
              </div>

              <div className="mt-4 text-[11px] text-slate-400">
                При желании добавим на сайт форму: «Запрос коммерческого предложения».
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500">
         </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-6 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">© {new Date().getFullYear()} ТрансХаб. Все права защищены.</div>
      </footer>
    </div>
  );
}

function InfoPanel(props: { title: string; note: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{props.title}</div>
        <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
          Сервис
        </span>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-200">
        {props.items.map((x) => (
          <li key={x} className="flex gap-2">
            <Dot />
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/30 px-3 py-2 text-xs text-slate-300">
        {props.note}
      </div>
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