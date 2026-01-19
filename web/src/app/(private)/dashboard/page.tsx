'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { RoleEnum } from '@/types/User'
import { useEffect } from 'react'

const DashboardPage = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) return

    if (user.role === RoleEnum.ADMIN) {
      router.replace('/dashboard/sistema')
    }

    if (user.role === RoleEnum.PROPRIETARIO) {
      router.replace(`/dashboard/parking/${user.parkingId}`)
    }

    if (user.role === RoleEnum.PORTEIRO) {
      router.replace('/dashboard/controle')
    }
  }, [user, router])

  return null
}

export default DashboardPage
