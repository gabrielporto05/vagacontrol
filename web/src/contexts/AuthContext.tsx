'use client'

import { AuthContextType, ChildrenType, SignInCredentials, SignUpCredentials, UserType } from '@/types/User'
import { getCurrentUser, signInService, signUpService } from '@/services/authService'
import { createContext, useContext, useEffect, useState } from 'react'
import { removeToken, setToken } from '@/utils/token'
import { useRouter } from 'next/navigation'

export const initialAuthContext: AuthContextType = {
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {}
}

const AuthContext = createContext<AuthContextType>(initialAuthContext)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getCurrentUser()
        setUser(userData)
      } catch {
        removeToken()
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const signIn = async (credentials: SignInCredentials) => {
    const { access_token, user } = await signInService(credentials)
    setToken(access_token)
    setUser(user)
    router.push('/dashboard')
  }

  const signUp = async (credentials: SignUpCredentials) => {
    await signUpService(credentials)
  }

  const signOut = () => {
    removeToken()
    setUser(null)
    router.push('/login')
  }

  if (loading) return null

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
