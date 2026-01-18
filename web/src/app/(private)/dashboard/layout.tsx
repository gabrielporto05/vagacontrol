'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!user) {
      router.replace('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Sidebar para desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        <Sidebar />
      </div>

      {/* Sidebar mobile */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className='fixed inset-0 bg-gray-900/80' onClick={() => setSidebarOpen(false)} />
        <div className='fixed inset-y-0 left-0 w-72'>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className='lg:pl-72'>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className='py-6 px-4 sm:px-6 lg:px-8'>{children}</main>
      </div>
    </div>
  )
}
