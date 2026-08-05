import Link from "next/link";
import Image from "next/image";

const promotions = [
  {
    title: "Химчистка салона + мойка днища в подарок",
    badge: "Акция до 31.08.2026",
    text:
      "При заказе химчистки салона автомобиля в ТрансХаб мойка днища выполняется бесплатно.",
    image: "/images/promotions/cleaning.png",
  },
  {
    title: "Бесплатная диагностика",
    badge: "Акция до 31.08.2026",
    text:
      "Проверьте техническое состояние автомобиля перед ремонтом. Подробности уточняйте у специалистов.",
    image: "/images/promotions/diagnostic.png",
  },
];

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* Заголовок */}
      <section className="border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-14">
          
          <div className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
            Специальные предложения
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-semibold">
            Акции ТрансХаб
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            Выгодные предложения на ремонт, обслуживание и дополнительные услуги
            нашего комплекса.
          </p>

        </div>
      </section>


      {/* Акции */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-10">

          <div className="grid gap-6 md:grid-cols-2">

            {promotions.map((promo) => (

              <article
                key={promo.title}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60"
              >

                <div className="relative h-64">

                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent"/>
                  
                </div>


                <div className="p-6">

                  <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {promo.badge}
                  </span>


                  <h2 className="mt-4 text-xl font-semibold">
                    {promo.title}
                  </h2>


                  <p className="mt-3 text-sm text-slate-300">
                    {promo.text}
                  </p>


                  <Link
                    href="/contacts"
                    className="mt-5 inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
                  >
                    Записаться
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* Контактный блок */}
      <section className="border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

            <h2 className="text-xl font-semibold">
              Хотите воспользоваться акцией?
            </h2>

            <p className="mt-2 text-slate-300">
              Позвоните нам или оставьте заявку через страницу контактов.
            </p>


            <Link
              href="/contacts"
              className="mt-5 inline-flex rounded-full border border-amber-400 px-5 py-3 text-sm text-amber-300 hover:bg-amber-400/10"
            >
              Контакты
            </Link>

          </div>

        </div>
      </section>


    </main>
  );
}
