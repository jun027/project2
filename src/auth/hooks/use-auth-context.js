'use client'

import { useContext } from 'react'

import { AuthContext } from '@/auth/context/auth-context'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext: Context must be used inside AuthProvider')
  }

  return context
}
