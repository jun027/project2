'use client'

import { useAuthContext } from '@/auth/hooks'
import UnLoginButton from './un-login-button'
import LoginButton from './login-button'
import { Skeleton } from '@mui/material'

function LoginButtonContainer() {
  const { user, loading } = useAuthContext()

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Skeleton width={80} height={30} animation="wave" />
      </div>
    )
  }

  return user ? <LoginButton /> : <UnLoginButton />
}

export default LoginButtonContainer
