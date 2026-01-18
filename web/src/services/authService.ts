import { AuthResponseType, SignInCredentials, SignUpCredentials, UserType } from '@/types/User'
import api from '@/services/api'

const signInService = async (credentials: SignInCredentials): Promise<AuthResponseType> => {
  const { data } = await api.post('/auth/login', credentials)

  return data
}

const signUpService = async (credentials: SignUpCredentials): Promise<void> => {
  await api.post('/auth/register', credentials)
}

const getCurrentUser = async (): Promise<UserType> => {
  const { data } = await api.get('/auth/me')

  return data
}

export { signInService, signUpService, getCurrentUser }
