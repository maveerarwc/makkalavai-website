import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'International Council of Eelam Tamils',
  description: 'Coordinating the Global Tamil Diaspora for Rights, Justice & Self-Determination',
  openGraph: {
    title: 'International Council of Eelam Tamils',
    description: 'Coordinating the Global Tamil Diaspora for Rights, Justice & Self-Determination',
    url: 'https://makkalavai.com',
    siteName: 'Makkalavai',
    images: [
      {
        url: 'https://makkalavai.com/logo.png',
        width: 800,
        height: 800,
        alt: 'International Council of Eelam Tamils',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'International Council of Eelam Tamils',
    description: 'Coordinating the Global Tamil Diaspora for Rights, Justice & Self-Determination',
    images: ['https://makkalavai.com/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
