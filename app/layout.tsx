import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Footer from '@/components/footer';
import Solusi from '@/components/solusi';

const inter = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klinik Digital | Konsutasikan Keluhan IT Anda Bersama Kami',
  description: 'Project Coba Coba by : rrahmatn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          {children}
          <Navbar />
          <Solusi/>
          <Footer />
        </body>
    </html>
  )
}
