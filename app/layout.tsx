import type { Metadata } from 'next'
import './globals.css'
import DubNav from './components/DubNav'
import HomePage from './components/HomePage'
import Address from './components/Address'
import DemoBanner from './components/DemoBanner'

export const metadata: Metadata = {
  title: 'Waver',
  description: 'created by waver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <>
          <DubNav />
          <HomePage />
          <Address />
          <DemoBanner/>
        </>
      </body>
    </html>
  )
}
