'use client'

import { dashboardPermissions } from '@/guards/dashboardPermissions'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Loading from '@/components/Loading'
import { RoleEnum } from '@/types/User'
import { useEffect } from 'react'

export default function RouteGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace('/login')
      return
    }

    const route = Object.keys(dashboardPermissions).find(key => pathname.startsWith(key))

    if (!route) return

    const permission = dashboardPermissions[route]

    if (!permission.roles.includes(user.role)) {
      router.replace('/dashboard')
      return
    }

    if (permission.requiresParking && user.role === RoleEnum.PROPRIETARIO && !user.parkingId) {
      router.replace('/dashboard')
    }
  }, [user, pathname, router])

  if (!user) return <Loading />

  return <>{children}</>
}
