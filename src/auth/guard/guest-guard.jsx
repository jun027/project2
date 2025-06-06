'use client'

import { Suspense, useEffect, useState } from 'react'

import { useRouter, useSearchParams } from '@/routes/hooks'
import { CONFIG } from '@/config-global'
import { SplashScreen } from '@/components/loading-screen'

import { useAuthContext } from '../hooks'

function GuestGuardContext({ children }) {
  const router = useRouter()

  const searchParams = useSearchParams()

  const { loading, authenticated } = useAuthContext()

  const [isChecking, setIsChecking] = useState(true)

  const returnTo = searchParams.get('returnTo') || CONFIG.auth.redirectPath

  const checkPermissions = async () => {
    if (loading) {
      return
    }

    if (authenticated) {
      router.replace(returnTo)
      return
    }

    setIsChecking(false)
  }

  useEffect(() => {
    checkPermissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading])

  if (isChecking) {
    return <SplashScreen />
  }

  return <>{children}</>
}

export function GuestGuard({ children }) {
  return (
    <Suspense>
      <GuestGuardContext>{children}</GuestGuardContext>
    </Suspense>
  )
}
