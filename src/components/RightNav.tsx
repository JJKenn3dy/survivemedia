'use client';

import { useEffect, useState } from 'react';

const links = [
  { id: 'channels', label: 'Каналы', dot: 'bg-red-400/80' },
  { id: 'packages', label: 'Пакеты', dot: 'bg-purple-400/80' },
  { id: 'contact',  label: 'Заявка', dot: 'bg-green-400/80' },
];

export default function RightNav() {
  const [showRow, setShowRow] = useState(true); // вверху показываем строку

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // если герой виден (достаточно) — показываем строку, иначе колонку
        setShowRow(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.35, 1] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Горизонтальная плашка (видна на hero) */}
      <div
        className={`fixed top-6 right-6 z-50 hidden lg:flex items-center gap-3 rounded-full
                    bg-[#0F0F15]/90 backdrop-blur ring-1 ring-white/10 px-3 py-2 transition
                    ${showRow ? 'opacity-100 translate-y-0 pointer-events-auto'
                              : 'opacity-0   -translate-y-2 pointer-events-none'}`}
      >
        <a href="#channels" className="px-3 py-1.5 text-sm text-gray-200 rounded-full hover:bg-white/5">
          Каналы
        </a>
        <a href="#packages" className="px-3 py-1.5 text-sm text-gray-200 rounded-full hover:bg-white/5">
          Пакеты
        </a>
        <a href="#contact" className="px-3 py-1.5 text-sm text-gray-200 rounded-full hover:bg-white/5">
          Заявка
        </a>
      </div>

      {/* Вертикальная колонка (видна ниже hero) */}
      <ul
        className={`fixed top-6 right-6 z-50 hidden lg:block w-48 rounded-2xl
                    bg-[#0F0F15]/90 backdrop-blur ring-1 ring-white/10 overflow-hidden transition
                    ${showRow ? 'opacity-0 translate-y-2 pointer-events-none'
                              : 'opacity-100 translate-y-0 pointer-events-auto'}`}
      >
        <li>
          <a href="#top" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="text-sm text-gray-200">Вверх</span>
          </a>
        </li>
        {links.map((l) => (
          <li key={l.id} className="border-t border-white/10">
            <a href={`#${l.id}`} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition">
              <span className={`h-1.5 w-1.5 rounded-full ${l.dot}`} />
              <span className="text-sm text-gray-200">{l.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
