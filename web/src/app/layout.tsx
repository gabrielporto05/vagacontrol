import { AuthProvider } from '@/contexts/AuthContext'
import { ChildrenType } from '@/types/User'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VagaControl - Sistema de Estacionamento',
  description: 'Sistema SaaS para controle de vagas, entradas e saídas de estacionamentos.',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '89',
    highPrice: '499',
    priceCurrency: 'BRL'
  }
}

export const metadata: Metadata = {
  title: 'VagaControl | Sistema para Controle de Estacionamentos',

  description: 'Controle vagas, entradas, saídas e mensalistas do seu estacionamento. Sistema completo em tempo real.',

  openGraph: {
    title: 'VagaControl - Sistema para Estacionamentos',
    description: 'Gerencie seu estacionamento com nosso sistema completo. Automatize e aumente seus lucros.',
    type: 'website',
    locale: 'pt_BR'
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: 'https://vagacontrol.com.br'
  },

  viewport: 'width=device-width, initial-scale=1',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
}

function StructuredData() {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const RootLayout = ({ children }: Readonly<ChildrenType>) => {
  return (
    <html lang='pt-BR'>
      <head>
        <StructuredData />

        <meta name='theme-color' content='#1e40af' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
