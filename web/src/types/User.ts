export type UserType = {
  id: string
  name: string
  email: string
  role: RoleEnum
  createdAt: string
}

export type AuthContextType = {
  user: UserType | null
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: (credentials: SignUpCredentials) => Promise<void>
  signOut: () => void
}

export type SignUpCredentials = {
  name: string
  email: string
  password: string
}

export type SignInCredentials = {
  email: string
  password: string
}

export type ChildrenType = {
  children: React.ReactNode
}

export type AuthResponseType = {
  user: UserType
  access_token: string
}

export enum RoleEnum {
  ADMIN = 'ADMIN',
  PROPRIETARIO = 'PROPRIETARIO',
  PORTEIRO = 'PORTEIRO'
}
