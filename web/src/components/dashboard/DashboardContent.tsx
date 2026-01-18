'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Car, Clock, DollarSign, TrendingUp, AlertCircle, Users, Zap } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function DashboardContent() {
  // Dados de exemplo
  const stats = [
    { title: 'Vagas Livres', value: '12', icon: Car, color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Vagas Ocupadas', value: '8', icon: Car, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Veículos no Pátio', value: '5', icon: Car, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    {
      title: 'Faturamento Hoje',
      value: 'R$ 450,00',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ]

  const recentEntries = [
    { plate: 'CCP-1532', model: 'Fiat Strada', time: '09:30' },
    { plate: 'ABC-1232', model: 'Honda Civic', time: '09:45' },
    { plate: 'XYZ-7890', model: 'Yamaha MT-07', time: '10:15' }
  ]

  const recentExits = [
    { plate: 'DEF-4567', model: 'Chevrolet Onix', time: '09:00', amount: 'R$ 15,00' },
    { plate: 'GHI-8901', model: 'Toyota Corolla', time: '09:20', amount: 'R$ 20,00' }
  ]

  return (
    <div className='space-y-6'>
      {/* Estatísticas */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map(stat => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className='pt-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-gray-600'>{stat.title}</p>
                    <p className='text-2xl font-bold text-gray-900 mt-2'>{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Gráfico e Ações Rápidas */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        {/* Gráfico */}
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <BarChart3 className='w-5 h-5' />
              Movimentação Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='h-64 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white rounded-lg'>
              <div className='text-center'>
                <BarChart3 className='w-12 h-12 text-gray-300 mx-auto mb-4' />
                <p className='text-gray-500'>Gráfico de movimentação</p>
                <p className='text-sm text-gray-400'>(Integração com API de gráficos)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações Rápidas */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Zap className='w-5 h-5' />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button className='w-full justify-start gap-2 h-12' variant='outline'>
              <Car className='w-4 h-4' />
              Registrar Entrada
            </Button>
            <Button className='w-full justify-start gap-2 h-12' variant='outline'>
              <Car className='w-4 h-4' />
              Registrar Saída
            </Button>
            <Button className='w-full justify-start gap-2 h-12' variant='outline'>
              <DollarSign className='w-4 h-4' />
              Novo Pagamento
            </Button>
            <Button className='w-full justify-start gap-2 h-12' variant='outline'>
              <Users className='w-4 h-4' />
              Adicionar Mensalista
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Entradas e Saídas Recentes */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {/* Entradas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <TrendingUp className='w-5 h-5' />
              Entradas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Placa</TableHead>
                  <TableHead>Modelo</TableHead>
                  <TableHead>Hora</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEntries.map(entry => (
                  <TableRow key={entry.plate}>
                    <TableCell className='font-medium'>{entry.plate}</TableCell>
                    <TableCell>{entry.model}</TableCell>
                    <TableCell>{entry.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Saídas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Clock className='w-5 h-5' />
              Saídas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Placa</TableHead>
                  <TableHead>Modelo</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentExits.map(exit => (
                  <TableRow key={exit.plate}>
                    <TableCell className='font-medium'>{exit.plate}</TableCell>
                    <TableCell>{exit.model}</TableCell>
                    <TableCell>{exit.time}</TableCell>
                    <TableCell className='font-semibold text-green-600'>{exit.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Alertas e Notificações */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <AlertCircle className='w-5 h-5' />
            Alertas do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            <div className='flex items-center gap-3 p-3 bg-yellow-50 rounded-lg'>
              <AlertCircle className='w-5 h-5 text-yellow-600' />
              <div>
                <p className='font-medium text-yellow-800'>2 mensalistas com pagamento em atraso</p>
                <p className='text-sm text-yellow-600'>Verifique a seção de pagamentos</p>
              </div>
            </div>
            <div className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg'>
              <AlertCircle className='w-5 h-5 text-blue-600' />
              <div>
                <p className='font-medium text-blue-800'>Taxa de ocupação: 40%</p>
                <p className='text-sm text-blue-600'>12 vagas disponíveis de 20</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
