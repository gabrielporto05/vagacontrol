'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
/* import ParkingContent from './components/ParkingContent'
import UsersContent from './components/UsersContent'
import MonthlyContent from './components/MonthlyContent'
import PaymentsContent from './components/PaymentsContent' */
import { Home, ParkingCircle, Users, Calendar, CreditCard } from 'lucide-react'
import DashboardContent from '@/components/dashboard/DashboardContent'

type ActiveTab = 'dashboard' | 'parking' | 'users' | 'monthly' | 'payments'

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'parking', label: 'Estacionamentos', icon: ParkingCircle },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'monthly', label: 'Mensalistas', icon: Calendar },
    { id: 'payments', label: 'Pagamentos', icon: CreditCard }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />
      case 'parking':
        return <DashboardContent />
      case 'users':
        return <DashboardContent />
      case 'monthly':
        return <DashboardContent />
      case 'payments':
        return <DashboardContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className='space-y-6'>
      {/* Header com boas-vindas */}
      <div>
        <h1 className='text-2xl font-semibold text-gray-900'>Olá, {user?.name || 'Usuário'}!</h1>
        <p className='text-gray-600'>Bem-vindo ao painel de controle do VagaControl</p>
      </div>

      {/* Abas para navegação rápida (mobile/alternativa) */}
      <div className='lg:hidden'>
        <nav className='flex space-x-4 overflow-x-auto pb-2'>
          {tabs.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                <Icon className='w-4 h-4' />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Conteúdo principal */}
      {renderContent()}
    </div>
  )
}
