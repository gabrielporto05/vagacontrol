const getToken = (): string | null => {
  const token = localStorage.getItem('access_token')

  return token
}

const setToken = (token: string) => {
  localStorage.setItem('access_token', token)
}

const removeToken = () => {
  localStorage.removeItem('access_token')
}

export { getToken, setToken, removeToken }
