import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { Hamburguer } from '@/components/Hamburguer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4llves.dev',
  description: 'Portifólio do Alves',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Hamburguer />
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
