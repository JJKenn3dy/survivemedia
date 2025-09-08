import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata = {
  metadataBase: new URL('https://survivemedia.ru'),
  title: 'Survive Media',
  description: 'Размещение рекламы в сети YouTube/Telegram/: 800k+ подписчиков, 600k+ просмотров в месяц.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: 'https://survivemedia.ru',
    title: 'Survive Media',
    description: 'Реклама на YouTube/Telegram/Tik-Tok',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survive Media',
    description: 'Реклама на YouTube/Telegram/Tik-Tok',
    images: ['/og.jpg'],
  },
  themeColor: '#0A0A0F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-[#0A0A0F] text-white">{children}</body>
    </html>
  )
}


