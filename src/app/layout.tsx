import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ClientThemeToggle from '@/components/ClientThemeToggle'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSKIT - vibecoding The Future of Web Development',
  description: 'Build your dream website up to 5x faster with our AI-powered development process. Experience the speed of vibecoding.',
  keywords: ['web development', 'AI', 'vibecoding', 'CSKIT', 'Korea', 'fast development'],
  authors: [{ name: 'CSKIT' }],
  openGraph: {
    title: 'CSKIT - vibecoding The Future of Web Development',
    description: 'Build your dream website up to 5x faster with our AI-powered development process.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta httpEquiv="Content-Language" content="en, ko" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>
          {children}
          <ClientThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
