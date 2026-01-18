'use client'

import { AuthContextType, ChildrenType, SignInCredentials, SignUpCredentials, UserType } from '@/types/User'
import { getCurrentUser, signInService, signUpService } from '@/services/authService'
import { createContext, useContext, useEffect, useState } from 'react'
import { removeToken, setToken } from '@/utils/token'
import { useRouter } from 'next/navigation'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter()

  const loadUser = async () => {
    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch {
      removeToken()
      setUser(null)
    } finally {
      setInitialLoading(false)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  const signIn = async (credentials: SignInCredentials) => {
    try {
      const { access_token } = await signInService(credentials)

      setToken(access_token)

      const userData = await getCurrentUser()
      setUser(userData)

      router.push('/dashboard')
    } catch (error) {
      removeToken()
      setUser(null)
      throw error
    }
  }

  const signUp = async (credentials: SignUpCredentials) => {
    await signUpService(credentials)
  }

  const signOut = () => {
    removeToken()
    setUser(null)
    router.push('/login')
  }

  if (initialLoading) return null

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
