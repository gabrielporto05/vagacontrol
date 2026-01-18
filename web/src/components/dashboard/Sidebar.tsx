'use client'

import {
  Home,
  ParkingCircle,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Building,
  Shield
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Estacionamentos', href: '#estacionamentos', icon: ParkingCircle },
  { name: 'Proprietários', href: '#proprietarios', icon: Users },
  { name: 'Porteiros', href: '#porteiros', icon: Shield },
  { name: 'Mensalistas', href: '#mensalistas', icon: Calendar },
  { name: 'Controle de Vagas', href: '#vagas', icon: Building },
  { name: 'Pagamentos', href: '#pagamentos', icon: CreditCard },
  { name: 'Relatórios', href: '#relatorios', icon: BarChart3 },
  { name: 'Configurações', href: '#configuracoes', icon: Settings }
]

interface SidebarProps {
  onClose?: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (href: string) => {
    if (onClose) onClose()
    if (href.startsWith('/')) {
      router.push(href)
    }
    // Para links âncora, rolar suavemente
  }

  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
      {/* Logo */}
      <div className='flex h-16 shrink-0 items-center gap-3'>
        <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center'>
          <ParkingCircle className='w-6 h-6 text-white' />
        </div>
        <div>
          <h1 className='text-xl font-bold text-gray-900'>VagaControl</h1>
          <p className='text-xs text-gray-500'>Sistema Profissional</p>
        </div>
        {onClose && (
          <button onClick={onClose} className='ml-auto lg:hidden'>
            <Menu className='w-6 h-6 text-gray-500' />
          </button>
        )}
      </div>

      {/* Navegação */}
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map(item => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={cn(
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full text-left',
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-6 w-6 shrink-0',
                          isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                        )}
                      />
                      {item.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </li>

          {/* Perfil do usuário */}
          <li className='-mx-6 mt-auto'>
            <div className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'>
              <div className='h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center'>
                <span className='text-white font-medium'>{user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}</span>
              </div>
              <div className='flex-1 min-w-0'>
                <p className='font-semibold text-gray-900'>{user?.name || 'Usuário'}</p>
                <p className='text-xs text-gray-500'>{user?.role}</p>
              </div>
              <button onClick={signOut} className='text-gray-400 hover:text-red-600' title='Sair'>
                <LogOut className='w-5 h-5' />
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
