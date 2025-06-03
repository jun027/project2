import { Toaster } from 'react-hot-toast'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import './globals.css'

import { DepositBadgeView } from '@/components/deposit-badge'
import React from '@heroicons/react'
import { AuthProvider } from '@/auth/context/auth-provider'
import MobileMenuView from '@/components/mobile-menu/mobile-menu-view'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const metadata = {
  title: '普蓮公益慈善協會',
  description:
    '我們的慈善協會致力於將愛心傳遞至世界每個角落，以「愛心連結世界，慈善改變生活」為宗旨，推動社會公平與人道關懷。我們透過透明、公正的慈善計劃，為有需要的人提供物質與心靈的支持，帶來真正的改變與希望。',
  keywords: 'Hualien,Pulian Charity Foundation',
  metadataBase: new URL('https://pulian.org/'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW" className="font-noto-sans-tc">
      <body className="relative" suppressHydrationWarning={true}>
        <AuthProvider>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            {children}
          </GoogleOAuthProvider>
          <MobileMenuView />
          <DepositBadgeView />
          <Toaster
            toastOptions={{
              duration: 5000,
              position: 'top-right',
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}
