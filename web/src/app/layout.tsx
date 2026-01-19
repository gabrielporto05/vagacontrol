import { Geist, Geist_Mono } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { ChildrenType } from '@/types/User'
import type { Metadata } from 'next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'VagaControl',
  description: 'Aplicação para controle de vagas de estacionamento e garagens.'
}

const RootLayout = ({ children }: Readonly<ChildrenType>) => {
  return (
    <html lang='pt-BR'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
