import type { Metadata } from 'next'
import { Geist, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Luna Wellness | Center for Holistic Health and Wellbeing',
  description: 'Personalized wellness programs for your physical and mental wellbeing. Meditation, yoga, psychological counseling and comprehensive health programs.',
  keywords: 'wellness, meditation, yoga, health, wellbeing, psychology, mindfulness, holistic health',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${crimsonText.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
