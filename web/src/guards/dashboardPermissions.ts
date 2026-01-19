import { RoleEnum } from '@/types/User'

export const dashboardPermissions: Record<string, { roles: RoleEnum[]; requiresParking?: boolean }> = {
  '/dashboard/sistema': {
    roles: [RoleEnum.ADMIN]
  },

  '/dashboard/parkings': {
    roles: [RoleEnum.ADMIN]
  },

  '/dashboard/parking': {
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO],
    requiresParking: true
  },

  '/dashboard/porteiros': {
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },

  '/dashboard/relatorios': {
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO]
  },

  '/dashboard/controle': {
    roles: [RoleEnum.ADMIN, RoleEnum.PROPRIETARIO, RoleEnum.PORTEIRO]
  }
}
