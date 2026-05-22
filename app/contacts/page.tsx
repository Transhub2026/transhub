import Link from "next/link";

const CONTACTS = {
  address: "Большие Колпаны д, Киевское шоссе 53 км, д. 2, корп. 1",
  mainPhone: "+7 (931) 322-33-33",
  mainPhoneDigits: "79313223333",

  truck: { title: "Грузовое СТО", phone: "+7 (921) 300-66-45", email: "master@trans-hub.ru" },
  car: { title: "Легковое СТО", phone: "+7 (931) 386-62-03", email: "lsto@trans-hub.ru" },
  wash: { title: "Мойка", phone: "+7 (999) 008-16-42", email: "moika@trans-hub.ru" },
};

function phoneToTel(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export default function ContactsPage() {
  // Яндекс карта (координаты: 59.529554, 30.076431)
  const yandexMapSrc =
  "https://yandex.ru/map-widget/v1/?ll=30.084031%2C59.525182&z=16&pt=30.084031,59.525182,pm2rdm";

  const routeLink =
  "https://yandex.ru/maps/?ll=30.084031,59.525182&mode=routes&rtext=~59.525182,30.084031&rtt=auto&z=16";


  const whatsappLink = `https://wa.me/${CONTACTS.mainPhoneDigits}`;
  const telegramLink = `https://t.me/share/url?url=https://trans-hub.ru&text=${encodeURIComponent(
    "Здравствуйте! Хочу записаться на сервис в ТрансХаб."
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">Контакты</div>
              <h1 className="mt-2 text-3xl font-semibold">Как с нами связаться</h1>
              <p className="mt-3 text-sm text-slate-300 max-w-2xl">
                Позвоните в нужное подразделение или используйте кнопки ниже. Мы на связи.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={routeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-sm"
              >
                Построить маршрут
              </a>
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
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_420px]">
            {/* Карта */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-sm">
              <div className="relative h-[420px]">
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

            {/* Контакты */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-sm font-semibold">Адрес</div>
              <div className="mt-1 text-sm text-slate-300">{CONTACTS.address}</div>

              <div className="mt-4 text-sm font-semibold">Основной телефон</div>
              <a className="mt-1 block text-base font-semibold" href={phoneToTel(CONTACTS.mainPhone)}>
                {CONTACTS.mainPhone}
              </a>

              <div className="mt-6 grid gap-3">
                <DeptCard title={CONTACTS.truck.title} phone={CONTACTS.truck.phone} email={CONTACTS.truck.email} />
                <DeptCard title={CONTACTS.car.title} phone={CONTACTS.car.phone} email={CONTACTS.car.email} />
                <DeptCard title={CONTACTS.wash.title} phone={CONTACTS.wash.phone} email={CONTACTS.wash.email} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/20 px-4 py-2 text-xs hover:border-amber-400 transition"
                >
                  На главную
                </Link>
              </div>

              <div className="mt-4 text-[11px] text-slate-400">
                При необходимости добавим форму “Оставить заявку” прямо на этой странице.
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
    </div>
  );
}

function DeptCard(props: { title: string; phone: string; email: string }) {
  const tel = `tel:${props.phone.replace(/\D/g, "")}`;
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3">
      <div className="text-[11px] uppercase tracking-wide text-amber-300">{props.title}</div>
      <a href={tel} className="mt-1 block text-sm font-semibold">
        {props.phone}
      </a>
      <a href={`mailto:${props.email}`} className="mt-0.5 block text-xs text-slate-300">
        {props.email}
      </a>
    </div>
  );
}