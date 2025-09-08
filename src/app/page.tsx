import RightNav from '@/components/RightNav'; // если используешь RightNav

export default function Home() {
  return (
    <>
      <div id="top" /> {/* для кнопки «Вверх» */}
      <main className="bg-[#0A0A0F] text-white">
        <RightNav /> {/* убери это, если решишь оставить свой inline <nav> */}

        {/* ================= HERO ================= */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="font-inter text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide text-red-600">
              Survive Media
            </h1>

            <p className="font-inter text-xl sm:text-lg md:text-2xl text-gray-300">
              Выбери нас, чтобы выжить!
            </p>

            {/* Метрики */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="w-44 sm:w-52 md:w-52 rounded-xl bg-[#0F0F15] ring-1 ring-white/5 px-6 py-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-red-500">800k+</p>
                <p className="text-gray-400 text-sm leading-snug">подписчиков</p>
              </div>
              <div className="w-44 sm:w-52 md:w-52 rounded-xl bg-[#0F0F15] ring-1 ring-white/5 px-6 py-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">600k+</p>
                <p className="text-gray-400 text-sm leading-snug">просмотров в месяц</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="mailto:ads@survivemedia.ru"
                className="w-40 sm:w-48 h-12 inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
              >
                Рекламодателям
              </a>
              <a
                href="mailto:partners@survivemedia.ru"
                className="w-40 sm:w-48 h-12 inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
              >
                Инфлюенсерам
              </a>
            </div>
          </div>

          {/* Кнопка «вниз» */}
          <div className="absolute bottom-12">
            <a href="#channels" aria-label="К списку каналов">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-red-500 hover:text-red-600 transition animate-pulse-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* ================= КАНАЛЫ ================= */}
        <section id="channels" className="pt-20 pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Наши каналы</h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {/* Каналы (например, Fazbears Times) */}
              <a
                href="https://www.youtube.com/@FazbearsTimes"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full sm:w-[360px] md:w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
              >
                <img
                  src="/avatars/fazbearstimes.jpg"
                  alt="Fazbears Times"
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#ff0000] select-none"
                  draggable="false"
                />
                <h3 className="text-lg font-bold mb-2">Fazbears Times</h3>
                <p className="text-xl font-bold text-gray-200 mb-4">765.200+ подписчиков</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>📺 YouTube: <span className="text-gray-200 font-medium">220.000</span></p>
                  <p>🎵 TikTok: <span className="text-gray-200 font-medium">542.000</span></p>
                  <p>✈ Telegram: <span className="text-gray-200 font-medium">3.200</span></p>
                </div>
              </a>

            {/* DimaJazDD */}
            <a
              href="https://www.youtube.com/@DimaJazDD"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/dimajazdd.jpg"
                alt="DimaJazDD"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#e63946] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">DimaJazDD</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">413.500+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">230.000</span></p>
                <p>🎵 TikTok: <span className="text-gray-200 font-medium">180.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">3.500</span></p>
              </div>
            </a>

            {/* ThePeN */}
            <a
              href="https://www.youtube.com/@ThePeN2804"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/thepen.jpg"
                alt="ThePeN"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#3b82f6] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">ThePeN</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">150.000+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">140.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">10.000</span></p>
              </div>
            </a>

            {/* Гисми */}
            <a
              href="https://www.youtube.com/@gismywhogivingyouanightcall"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/gismi.jpg"
                alt="Гисми"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#a855f7] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">Гисми</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">93.500+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">90.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">3.500</span></p>
              </div>
            </a>

            {/* ЙЦУКЕН */}
            <a
              href="https://www.youtube.com/@ЙЦУКЕН"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/ycuKen.jpg"
                alt="ЙЦУКЕН"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#3b82f6] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">ЙЦУКЕН</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">52.300+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">50.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">2.300</span></p>
              </div>
            </a>

            {/* BUF */}
            <a
              href="https://www.youtube.com/@buffik"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/buf.jpg"
                alt="BUF"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#22c55e] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">BUF</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">45.700+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">45.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">700</span></p>
              </div>
            </a>

            {/* FLEYY */}
            <a
              href="https://www.youtube.com/@FLEYYSKYWALKER"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/fleyy.jpg"
                alt="FLEYY"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#d946ef] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">FLEYY</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">16.950+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">16.700</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">250</span></p>
              </div>
            </a>

            {/* Kari */}
            <a
              href="https://www.youtube.com/@Kar1cca"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
            >
              <img
                src="/avatars/kari.jpg"
                alt="Kari"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#facc15] select-none"
                draggable="false"
              />
              <h3 className="text-lg font-bold mb-2">Kari</h3>
              <p className="text-xl font-bold text-gray-200 mb-4">4.100+ подписчиков</p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📺 YouTube: <span className="text-gray-200 font-medium">4.000</span></p>
                <p>✈ Telegram: <span className="text-gray-200 font-medium">100</span></p>
              </div>
            </a>

            {/* Nocom — центр по ряду */}
            <div className="md:col-span-full flex justify-right">
              <a
                href="https://www.youtube.com/@NOCOMofficial01"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full sm:w-[360px] rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 text-center transition hover:-translate-y-1 hover:ring-white/10"
              >
                <img
                  src="/avatars/nocom.jpg"
                  alt="Nocom"
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-[#06b6d4] select-none"
                  draggable="false"
                />
                <h3 className="text-lg font-bold mb-2">Nocom</h3>
                <p className="text-xl font-bold text-gray-200 mb-4">3.650+ подписчиков</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>📺 YouTube: <span className="text-gray-200 font-medium">3.500</span></p>
                  <p>✈ Telegram: <span className="text-gray-200 font-medium">150</span></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

{/* ================= ПАКЕТЫ ================= */}
        <section id="packages" className="pt-12 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Пакеты размещения</h2>
            <p className="text-center text-gray-400 mt-3">
              Гибкие условия без фиксированных цен на сайте — отправим прайс и медиакит после заявки.
            </p>

            {/* Карточки пакетов */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {/* Start */}
              <article className="flex flex-col h-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 hover:ring-white/10 transition">
                <header className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">🟢 Start (Базовый)</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-600/15 text-green-300 ring-1 ring-green-500/30">
                    Тест-драйв
                  </span>
                </header>
                <ul className="space-y-2.5 text-[15px] text-gray-300">
                  <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />Подписчики каналов: <span className="text-gray-200">3k–20k</span></li>
                  <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />Состав: <span className="text-gray-200">2–3 канала</span></li>
                  <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />Охват: <span className="text-gray-200">~20k–80k</span></li>
                  <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />Форматы: <span className="text-gray-200">упоминания/интеграции, Telegram</span></li>
                </ul>
                <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-green-900 hover:bg-green-700 transition font-medium">
                  Запросить предложение
                </a>
              </article>

            {/* Boost */}
            <article className="flex flex-col h-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 hover:ring-white/10 transition">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">🟡 Boost (Средний)</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/15 text-yellow-300 ring-1 ring-yellow-400/30">
                  Масштабирование
                </span>
              </header>
              <ul className="space-y-2.5 text-[15px] text-gray-300">
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-400" />Подписчики каналов: <span className="text-gray-200">40k–100k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-400" />Состав: <span className="text-gray-200">2–3 канала</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-400" />Охват: <span className="text-gray-200">~50k–250k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-400" />Форматы: <span className="text-gray-200"> интеграции YouTube + посты в Telegram</span></li>
              </ul>
              <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-yellow-700 hover:bg-yellow-600 transition font-medium">
                Запросить предложение
              </a>
            </article>

            {/* Pro */}
            <article className="flex flex-col h-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 hover:ring-white/10 transition">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">🔵 Pro (Крупный)</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-600/15 text-blue-300 ring-1 ring-blue-500/30">
                  Рост охвата
                </span>
              </header>
              <ul className="space-y-2.5 text-[15px] text-gray-300">
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />Подписчики каналов: <span className="text-gray-200">150k–400k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />Состав: <span className="text-gray-200">2–3 канала</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />Охват: <span className="text-gray-200">~150k–350k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />Форматы: <span className="text-gray-200">интеграции, TikTok, Telegram</span></li>
              </ul>
              <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-blue-700 hover:bg-blue-800 transition font-medium">
                Запросить предложение
              </a>
            </article>

            {/* Premium */}
            <article className="flex flex-col h-full rounded-2xl bg-[#121218] ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">🔴 Premium (Флагманский)</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-red-600/20 text-red-300 ring-1 ring-red-500/30">
                  Топ-сети
                </span>
              </header>
              <ul className="space-y-2.5 text-[15px] text-gray-300">
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />Каналы: <span className="text-gray-200">крупные лидеры сети</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />Состав <span className="text-gray-200">2-3 канала</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />Охват: <span className="text-gray-200">~120k–200k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />Форматы: <span className="text-gray-200">интеграции + Telegram, опционально TikTok</span></li>
              </ul>
              <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-red-700 hover:bg-red-800 transition font-medium">
                Получить медиакит
              </a>
            </article>

            {/* All-in */}
            <article className="flex flex-col h-full rounded-2xl bg-[#121218] ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">⚡ All-in (Комбо)</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-fuchsia-600/20 text-fuchsia-300 ring-1 ring-fuchsia-500/30">
                  Максимум охвата
                </span>
              </header>
              <ul className="space-y-2.5 text-[15px] text-gray-300">
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-fuchsia-500" />Каналы: <span className="text-gray-200">вся сеть агентства</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-fuchsia-500" />Состав <span className="text-gray-200">Все каналы</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-fuchsia-500" />Охват: <span className="text-gray-200">~400k–700k</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-fuchsia-500" />Форматы: <span className="text-gray-200">YouTube + TikTok + Telegram</span></li>
              </ul>
              <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-fuchsia-700 hover:bg-fuchsia-800 transition font-medium">
                Запросить медиаплан
              </a>
            </article>

            {/* Custom */}
            <article className="flex flex-col h-full rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 hover:ring-white/10 transition">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">🟣 Custom (Персональный)</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300 ring-1 ring-purple-500/30">
                  Под задачу
                </span>
              </header>
              <ul className="space-y-2.5 text-[15px] text-gray-300">
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500" />Каналы: <span className="text-gray-200">по выбору</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500" />Площадки: <span className="text-gray-200">YouTube, Telegram, TikTok</span></li>
                <li className="flex gap-3 items-start"><span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500" />Форматы: <span className="text-gray-200">интеграции, ролики, конкурсы</span></li>
              </ul>
              <a href="mailto:ads@survivemedia.ru" className="mt-auto h-12 inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium">
                Обсудить задачу
              </a>
            </article>
          </div>

          {/* Разделитель */}
          <div className="mt-12 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="px-3 py-1 text-xs tracking-wide uppercase rounded-full bg-white/5 text-white/70 ring-1 ring-white/10">
                Что влияет на стоимость
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <p className="mt-3 text-center text-sm text-gray-400">
              Цена зависит от формата размещения, ожидаемого охвата и сроков/объёма креатива.
            </p>
          </div>

          {/* Факторы */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[15px]">
            <div className="h-full rounded-xl bg-[#0F0F15] ring-1 ring-white/5 p-4">
              <p className="text-gray-400">Формат</p>
              <p className="text-gray-200 mt-1">
                Интеграция, выделенный ролик, шортс, упоминание, конкурсы, посты в Telegram
              </p>
            </div>
            <div className="h-full rounded-xl bg-[#0F0F15] ring-1 ring-white/5 p-4">
              <p className="text-gray-400">Охват</p>
              <p className="text-gray-200 mt-1">Медианы просмотров, сезонность</p>
            </div>
            <div className="h-full rounded-xl bg-[#0F0F15] ring-1 ring-white/5 p-4">
              <p className="text-gray-400">Сроки и креатив</p>
              <p className="text-gray-200 mt-1">Срочность, объём правок, сценарий</p>
            </div>
          </div>
        </div>
      </section>
        {/* ================= КОНТАКТЫ ================= */}
        <section id="contact" className="pt-12 pb-20 px-6 bg-[#0A0A0F]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Оставить заявку
            </h2>
            <p className="text-center text-gray-400 mt-3">
              Свяжитесь с нами напрямую — ответим и вышлем медиакит.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Рекламодателям */}
              <div className="rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 flex flex-col justify-between">
                <header className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Рекламодателям</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-red-600/20 text-red-300 ring-1 ring-red-500/30">
                    Ads
                  </span>
                </header>

                <div className="text-sm text-gray-300 space-y-2 mb-6">
                  <p>
                    email:{" "}
                    <a
                      href="mailto:ads@survivemedia.ru"
                      className="underline decoration-white/20 hover:decoration-white"
                    >
                      ads@survivemedia.ru
                    </a>
                  </p>
                  <p>
                    tg:{" "}
                    <a
                      href="https://t.me/JJKenn9dy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/20 hover:decoration-white"
                    >
                      @JJKenn9dy
                    </a>
                  </p>
                </div>

                <a
                  href="mailto:ads@survivemedia.ru"
                  className="w-full h-12 flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
                >
                  Отправить заявку
                </a>
              </div>

              {/* Инфлюенсерам */}
              <div className="rounded-2xl bg-[#0F0F15] ring-1 ring-white/5 p-6 flex flex-col justify-between">
                <header className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Инфлюенсерам</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-300 ring-1 ring-purple-500/30">
                    Partners
                  </span>
                </header>

                <div className="text-sm text-gray-300 space-y-2 mb-6">
                  <p>
                    email:{" "}
                    <a
                      href="mailto:partners@survivemedia.ru"
                      className="underline decoration-white/20 hover:decoration-white"
                    >
                      partners@survivemedia.ru
                    </a>
                  </p>
                  <p>
                    tg:{" "}
                    <a
                      href="https://t.me/JJKenn9dy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/20 hover:decoration-white"
                    >
                      @JJKenn9dy
                    </a>
                  </p>
                </div>

                <a
                  href="mailto:partners@survivemedia.ru"
                  className="w-full h-12 flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 transition font-medium"
                >
                  Отправить заявку
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
