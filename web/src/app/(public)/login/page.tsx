'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Car } from 'lucide-react'
import { LoginFormData, loginSchema } from '@/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const LoginPage = () => {
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true)
      setError(null)

      await signIn(data)
    } catch {
      setError('E-mail ou senha inválidos. Por favor, tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      <div
        className='hidden lg:flex flex-col justify-between relative overflow-hidden bg-cover bg-center'
        style={{
          backgroundImage: "url('/estacionamento.jpg')"
        }}
      >
        <div className='absolute inset-0 bg-black/60 z-10' />

        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/70 to-indigo-900/80 z-10' />

        <div className='relative z-20 px-16 py-12'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg'>
              <div className='w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center'>
                <Car className='w-5 h-5 text-white' />
              </div>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-white'>VagaControl</h1>
              <p className='text-blue-200 text-sm font-medium'>Sistema Profissional</p>
            </div>
          </div>

          <div className='mt-20 max-w-lg'>
            <h2 className='text-4xl font-bold text-white mb-6 leading-tight'>
              Controle seus
              <span className='block text-blue-300'>Estacionamentos e Garagens</span>
            </h2>

            <p className='text-lg text-blue-100 leading-relaxed mb-10'>
              Gerencie vagas, entradas, saídas e mensalistas com eficiência. Tecnologia desenvolvida para otimizar sua
              operação e aumentar seus resultados.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <ShieldCheck className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-blue-100'>Segurança e confiabilidade</span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <ShieldCheck className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-blue-100'>Operação em tempo real</span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <ShieldCheck className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-blue-100'>Relatórios detalhados</span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <ShieldCheck className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-blue-100'>Registro de entradas e saídas</span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                  <ShieldCheck className='w-4 h-4 text-blue-300' />
                </div>
                <span className='text-blue-100'>Controle financeiro integrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-20 px-16 py-6 border-t border-white/10'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-blue-200'>© {new Date().getFullYear()} VagaControl</span>
            <span className='text-sm text-blue-200'>✓ Sistema online</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-6 py-12'>
        <Card className='w-full max-w-md shadow-2xl border-slate-200/80 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm'>
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600' />

          <CardHeader className='space-y-3 pt-8 pb-6'>
            <div className='flex justify-center mb-2'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md'>
                <Lock className='w-8 h-8 text-blue-600' />
              </div>
            </div>
            <CardTitle className='text-2xl font-bold text-center text-slate-800'>Acesso ao Sistema</CardTitle>
            <p className='text-sm text-slate-600 text-center'>
              Entre com suas credenciais para gerenciar seu estacionamento
            </p>
          </CardHeader>

          <CardContent className='pb-8'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700 flex items-center gap-2'>
                  <Mail className='w-4 h-4' />
                  E-mail
                </label>
                <div className='relative'>
                  <Input
                    placeholder='seu@email.com'
                    type='email'
                    className='h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                    {...register('email')}
                  />
                </div>
                {errors.email && (
                  <p className='text-sm text-red-600 mt-1 flex items-center gap-1'>{errors.email.message}</p>
                )}
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700 flex items-center gap-2'>
                  <Lock className='w-4 h-4' />
                  Senha
                </label>
                <div className='relative'>
                  <Input
                    placeholder='••••••••'
                    type={showPassword ? 'text' : 'password'}
                    className='pr-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                    {...register('password')}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600'
                  >
                    {showPassword ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
                  </button>
                </div>
                {errors.password && (
                  <p className='text-sm text-red-600 mt-1 flex items-center gap-1'>{errors.password.message}</p>
                )}
              </div>

              {/* <div className='flex items-center justify-between text-sm'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input type='checkbox' className='rounded border-slate-300 text-blue-600 focus:ring-blue-500' />
                  <span className='text-slate-600'>Lembrar-me</span>
                </label>
                <Link
                  href='/forgot-password'
                  className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
                >
                  Esqueceu a senha?
                </Link>
              </div> */}

              {error && (
                <div className='p-3 rounded-lg bg-red-50 border border-red-200'>
                  <p className='text-sm text-red-700 text-center font-medium'>{error}</p>
                </div>
              )}

              <Button
                type='submit'
                className='w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={loading}
              >
                {loading ? (
                  <span className='flex items-center justify-center gap-2'>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    Entrando...
                  </span>
                ) : (
                  'Acessar Sistema'
                )}
              </Button>
            </form>

            <div className='mt-8 pt-6 border-t border-slate-100'>
              <div className='flex items-center justify-center gap-2 text-sm text-slate-500'>
                <ShieldCheck className='w-4 h-4 text-green-500' />
                <span>Conexão segura • SSL criptografado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
