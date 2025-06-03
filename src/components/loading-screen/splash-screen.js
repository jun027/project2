'use client'

import Image from 'next/image'

export function SplashScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',
        background: '#F8F6EC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        className="aspect-square w-20 animate-bounce"
        src={'/images/logo/logo-1.png'}
        alt="logo"
        width={401}
        height={401}
      />
    </div>
  )
}
