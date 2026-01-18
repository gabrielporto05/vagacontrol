'use client'

import { Bell, Menu, Search } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { user } = useAuth()

  return (
    <header className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      <button type='button' className='-m-2.5 p-2.5 text-gray-700 lg:hidden' onClick={onMenuClick}>
        <span className='sr-only'>Abrir menu</span>
        <Menu className='h-6 w-6' />
      </button>

      {/* Separador */}
      <div className='h-6 w-px bg-gray-200 lg:hidden' />

      <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
        {/* Search */}
        <div className='relative flex flex-1'>
          <Search className='pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
          <input
            type='search'
            placeholder='Buscar...'
            className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
          />
        </div>

        <div className='flex items-center gap-x-4 lg:gap-x-6'>
          {/* Botão de notificações */}
          <button type='button' className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative'>
            <span className='sr-only'>Ver notificações</span>
            <Bell className='h-6 w-6' />
            <span className='absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white' />
          </button>

          {/* Botões de ação */}
          <div className='hidden sm:flex sm:items-center sm:gap-x-3'>
            <Button variant='outline' size='sm' className='border-blue-600 text-blue-600 hover:bg-blue-50'>
              Registrar Entrada
            </Button>
            <Button
              size='sm'
              className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
            >
              Registrar Saída
            </Button>
          </div>

          {/* Separador */}
          <div className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200' />

          {/* Informações do estacionamento atual */}
          {/* {user?.parking && ( */}
          <div className='hidden lg:flex lg:items-center lg:gap-x-2'>
            <div className='text-sm'>
              <p className='font-semibold text-gray-900'>{/* {user.parking.name} */} Estacionamento 1</p>
              <p className='text-gray-500'>{/* {user.parking.availableSlots} */} 50 vagas livres</p>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </header>
  )
}
