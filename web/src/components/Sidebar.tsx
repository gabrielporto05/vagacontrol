'use client'

import { Home, ParkingCircle, BarChart3, Settings, LogOut, Menu, Shield, Car } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Loading from '@/components/Loading'
import { RoleEnum } from '@/types/User'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Dashboard Sistema',
    href: '/dashboard/sistema',
    icon: Home,
    roles: [RoleEnum.ADMIN]
  },
  {
    name: 'Estacionamentos',
    icon: ParkingCircle,
    href: '/dashboard/parkings',
    roles: [RoleEnum.ADMIN]
  },
  {
    name: 'Dashboard Estacionamento',
    href: '/dashboard/parking/[id]',
    icon: ParkingCircle,
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },
  {
    name: 'Configurações Estacionamento',
    href: '/dashboard/parking/[id]/configuracoes',
    icon: Settings,
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },
  {
    name: 'Porteiros',
    href: '/dashboard/porteiros',
    icon: Shield,
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },
  {
    name: 'Relatórios',
    href: '/dashboard/relatorios',
    icon: BarChart3,
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },
  {
    name: 'Entradas / Saídas',
    href: '/dashboard/controle',
    icon: Car,
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO, RoleEnum.PORTEIRO]
  }
]

interface SidebarProps {
  onClose?: () => void
}

const Sidebar = ({ onClose }: SidebarProps) => {
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

  if (!user) return <Loading />

  const allowedNavigation = navigation.filter(item => item.roles.includes(user.role))

  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
      <div className='flex h-16 shrink-0 items-center gap-3'>
        <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center'>
          <Car className='w-6 h-6 text-white' />
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

      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {allowedNavigation.map(item => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={cn(
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold w-full',
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-6 w-6',
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

          <li className='-mx-6 mt-auto'>
            <div className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'>
              <div className='h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center'>
                <span className='text-white font-medium'>{user.name.charAt(0)}</span>
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

export default Sidebar
