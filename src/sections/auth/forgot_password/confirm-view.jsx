'use client'

import { Suspense, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { z } from 'zod'

import FormProvider from '@/components/hook-form/form-provider'
import PageTitle from '@/components/hook-form/page-title'
import { PATHS } from '@/routes/page'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from '@/routes/hooks'

function ConfirmContainer() {
  const searchParams = useSearchParams()

  const email = searchParams.get('email')

  const schema = z.object({
    email: z.string().email('請輸入正確的 email 格式'),
  })

  const defaultValues = {
    email: '',
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { handleSubmit } = methods

  const onSubmitButtonClick = useCallback((data) => {
    console.log('[onSubmitButtonClick] data: ', data)
  }, [])

  return (
    <div className="max-w-650 mx-auto lg:max-w-[722px] lg:px-10 lg:pb-[86px]">
      <div className="bg-[#fcfcfc] px-4 py-12 rounded-2xl lg:px-12">
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmitButtonClick)}
          className="space-y-6"
        >
          <PageTitle title="忘記密碼" />
          <div className="space-y-12">
            <div className="space-y-3">
              <p className="desktop-regular-h6 text-dark-900">
                我們已經將復原連結傳送到您的電子信箱：
              </p>

              <p className="desktop-bold-h5 text-dark-900">{email}</p>

              <p className="desktop-regular-h6 text-dark-900">
                如果您尚未收到電子郵件，請檢查垃圾郵件資料夾或
                <Link
                  href={PATHS.Auth.child.SignUp.path}
                  className="underline underline-offset-2 text-blue-600"
                >
                  註冊
                </Link>
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={PATHS.Auth.child.Login.path}
                className="block btn-solid btn-hover py-4 desktop-regular-h6"
              >
                返回登入
              </a>
              <button className="w-full btn-outline btn-hover py-4 desktop-regular-h6">
                傳送復原連結
              </button>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

function ConfirmView({ children }) {
  return (
    <Suspense>
      <ConfirmContainer>{children}</ConfirmContainer>
    </Suspense>
  )
}

export default ConfirmView
