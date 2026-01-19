'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  ShieldCheck,
  Users,
  Zap,
  Car,
  ParkingCircle,
  LineChart,
  Bell
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Car className='w-6 h-6' />,
      title: 'Controle de Entrada/Saída',
      description: 'Registro automático de veículos com leitura de placas e tempo real de permanência.'
    },
    {
      icon: <ParkingCircle className='w-6 h-6' />,
      title: 'Gestão de Vagas',
      description: 'Controle preciso de vagas disponíveis, reservadas e ocupadas em tempo real.'
    },
    {
      icon: <DollarSign className='w-6 h-6' />,
      title: 'Faturamento Automático',
      description: 'Cálculo automático de valores, emissão de recibos e controle financeiro integrado.'
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Mensalistas',
      description: 'Gestão completa de clientes mensalistas com controle de renovação e cobrança.'
    },
    {
      icon: <LineChart className='w-6 h-6' />,
      title: 'Relatórios Detalhados',
      description: 'Análises completas de movimento, faturamento e ocupação para tomada de decisão.'
    },
    {
      icon: <Bell className='w-6 h-6' />,
      title: 'Alertas Inteligentes',
      description: 'Notificações de eventos importantes, vagas livres e clientes em atraso.'
    }
  ]

  const plans = [
    {
      name: 'Inicial',
      price: 'R$ 89',
      period: '/mês',
      description: 'Perfeito para pequenos estacionamentos',
      features: ['Até 50 vagas', 'Controle básico', 'Relatórios simples', 'Suporte por email', '1 usuário'],
      highlighted: false
    },
    {
      name: 'Profissional',
      price: 'R$ 199',
      period: '/mês',
      description: 'Ideal para estacionamentos médios',
      features: [
        'Até 200 vagas',
        'Controle completo',
        'Relatórios avançados',
        'Suporte prioritário',
        'Até 5 usuários',
        'Integração com câmeras'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 499',
      period: '/mês',
      description: 'Para grandes redes de estacionamento',
      features: [
        'Vagas ilimitadas',
        'Controle multi-unidades',
        'Dashboard corporativo',
        'Suporte 24/7',
        'Usuários ilimitados',
        'API personalizada',
        'Treinamento dedicado'
      ],
      highlighted: false
    }
  ]

  return (
    <div className='min-h-screen'>
      <h1 className='hidden'>VagaControl - Sistema Completo para Gestão de Estacionamentos</h1>

      <section className='relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white'>
        <div className='absolute inset-0 bg-black/40 z-0' />
        <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-full blur-3xl' />

        <div className='relative z-10 container mx-auto px-6 py-24'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
              <span className='text-sm font-medium'>Sistema online e seguro</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              Controle seu
              <span className='block text-blue-300'>Estacionamento com Inteligência</span>
            </h1>

            <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed'>
              O sistema completo para gerenciar vagas, entradas, saídas e mensalistas. Tecnologia que otimiza sua
              operação e maximiza seus lucros.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Link href='/register'>
                <Button
                  size='lg'
                  className='bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-blue-900/30'
                >
                  <Zap className='mr-2 w-5 h-5' />
                  Começar Agora - 14 dias grátis
                </Button>
              </Link>
              <Link href='/login'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl'
                >
                  Já tenho conta
                </Button>
              </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>99.9%</div>
                <div className='text-blue-200'>Disponibilidade</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>+500</div>
                <div className='text-blue-200'>Estacionamentos</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>24/7</div>
                <div className='text-blue-200'>Suporte</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>R$ 0</div>
                <div className='text-blue-200'>Setup inicial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-slate-50'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-slate-900 mb-4'>Tudo que você precisa em um só lugar</h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Um sistema completo desenvolvido especificamente para a gestão de estacionamentos
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  activeFeature === index ? 'border-blue-400 shadow-lg' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4'>
                    <div className='text-blue-600'>{feature.icon}</div>
                  </div>
                  <CardTitle className='text-xl'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-slate-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-slate-900 mb-6'>Dashboard Intuitivo e Poderoso</h2>
              <p className='text-lg text-slate-600 mb-8'>
                Visualize todas as informações importantes em um único painel. Controle em tempo real, relatórios
                detalhados e tomada de decisão baseada em dados.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-green-500' />
                  <span className='text-slate-700'>Monitoramento em tempo real</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-green-500' />
                  <span className='text-slate-700'>Gráficos e métricas atualizadas</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-green-500' />
                  <span className='text-slate-700'>Acesso multiplataforma</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-2xl'>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-slate-300 rounded-full' />
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-white rounded-xl p-4 shadow'>
                    <div className='text-sm text-slate-500'>Vagas Livres</div>
                    <div className='text-2xl font-bold text-green-600'>42</div>
                  </div>
                  <div className='bg-white rounded-xl p-4 shadow'>
                    <div className='text-sm text-slate-500'>Ocupadas</div>
                    <div className='text-2xl font-bold text-blue-600'>58</div>
                  </div>
                </div>
                <div className='bg-white rounded-xl p-4 shadow mb-6'>
                  <div className='flex justify-between items-center mb-4'>
                    <div className='text-sm font-medium'>Movimento Hoje</div>
                    <BarChart3 className='w-5 h-5 text-blue-600' />
                  </div>
                  <div className='h-32 flex items-end gap-1'>
                    {[30, 45, 60, 75, 65, 55, 40, 50, 70, 80, 65, 55].map((height, i) => (
                      <div
                        key={i}
                        className='flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t'
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className='flex items-center justify-between text-sm text-slate-600'>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4' />
                    <span>Atualizado agora</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <ShieldCheck className='w-4 h-4 text-green-500' />
                    <span>Sistema online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-gradient-to-b from-slate-50 to-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-slate-900 mb-4'>Planos que Cabem no seu Bolso</h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Escolha o plano ideal para o tamanho do seu estacionamento. Sem contrato, cancele quando quiser.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 relative overflow-hidden rounded-2xl ${
                  plan.highlighted ? 'border-blue-500 shadow-2xl transform scale-105' : 'border-slate-200'
                }`}
              >
                {plan.highlighted && (
                  <div className='absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 text-sm font-semibold'>
                    MAIS POPULAR
                  </div>
                )}
                <CardHeader className={`pt-${plan.highlighted ? '12' : '6'}`}>
                  <CardTitle className='text-2xl text-center mb-2'>{plan.name}</CardTitle>
                  <div className='text-center'>
                    <span className='text-4xl font-bold text-slate-900'>{plan.price}</span>
                    <span className='text-slate-500'>{plan.period}</span>
                  </div>
                  <p className='text-slate-600 text-center text-sm'>{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3 mb-8'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center gap-3'>
                        <CheckCircle2 className='w-5 h-5 text-green-500 flex-shrink-0' />
                        <span className='text-slate-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href='/register'>
                    <Button
                      className={`w-full py-6 text-lg font-semibold ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                          : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                    >
                      Começar Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-bold mb-6'>Pronto para Transformar seu Estacionamento?</h2>
            <p className='text-xl text-blue-100 mb-10'>
              Junte-se a mais de 500 estacionamentos que já automatizaram sua gestão com o VagaControl.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/register'>
                <Button
                  size='lg'
                  className='bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-lg font-semibold rounded-xl shadow-2xl'
                >
                  Teste Gratuitamente por 14 Dias
                </Button>
              </Link>
              <Link href='/login'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold rounded-xl'
                >
                  Fazer Login
                </Button>
              </Link>
            </div>
            <p className='text-blue-200 text-sm mt-6'>
              Não é necessário cartão de crédito • Cancelamento a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-900 text-white py-12'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
                  <div className='w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded flex items-center justify-center'>
                    <Car className='w-4 h-4 text-white' />
                  </div>
                </div>
                <div>
                  <div className='text-xl font-bold'>VagaControl</div>
                  <div className='text-sm text-slate-400'>Sistema Profissional</div>
                </div>
              </div>
              <p className='text-slate-400'>Sistema completo para gestão de estacionamentos e garagens.</p>
            </div>

            <div>
              <h3 className='font-semibold text-lg mb-4'>Produto</h3>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    API
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-lg mb-4'>Empresa</h3>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-lg mb-4'>Legal</h3>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white'>
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm'>
            <p>© {new Date().getFullYear()} VagaControl. Todos os direitos reservados.</p>
            <p className='mt-2'>Desenvolvido com ❤️ para otimizar a gestão de estacionamentos em todo o Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
