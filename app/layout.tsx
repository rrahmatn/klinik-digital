import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Footer from '@/components/footer';

const inter = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klinik Digital || Konsutasikan Keluhan IT Anda Bersama Kami',
  description: 'Project Coba Coba by : rrahmatn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}
