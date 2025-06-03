'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { MdOutlineVisibility, MdVisibilityOff } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { IoMdRefresh } from 'react-icons/io'

import { useGoogleLogin } from '@react-oauth/google'
import PageTitle from '@/components/hook-form/page-title'
import FormProvider from '@/components/hook-form/form-provider'
import FormTitle from '@/components/hook-form/form-title'
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import { PATHS } from '@/routes/page'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconButton, InputAdornment } from '@mui/material'
import { useBoolean } from '@/hook/use-boolean'
import { useAuthContext } from '@/auth/hooks'
import { useRouter } from '@/routes/hooks'
import loginService from '@/services/auth/login'
import PicAuthCode from '@/utils/pic-auth-code'

function LoginView() {
  const router = useRouter()

  const { checkUserSession } = useAuthContext()

  const { value: showPassword, onToggle: showPasswordToggle } = useBoolean(false)

  const [authCode, setAuthCode] = useState('')

  const picAuthCodeRef = useRef(null)

  const schema = z.object({
    account: z.string().min(1, '帳號不得為空').min(8, '帳號最少 8 個字元'),
    password: z
      .string()
      .min(6, '密碼至少需要 6 個字元')
      .max(12, '密碼最多 12 個字元')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
        '密碼必須是 6 到 12 個字元的英文字母和數字組合'
      ),
    validateCode: z
      .string()
      .min(1, '請輸入驗證碼')
      .refine((val) => val === authCode, '驗證碼錯誤'),
    remember: z.boolean().optional(),
  })

  const defaultValues = {
    account: '',
    password: '',
    validateCode: '',
    remember: false,
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods

  const handleRememberEvent = async (key, account) => {
    try {
      if (key) {
        localStorage.setItem('pu_account', account)
      } else {
        localStorage.removeItem('pu_account')
      }
    } catch (error) {
      console.error('Error during set session: ', error)

      throw error
    }
  }

  const handleRefreshAuthCode = useCallback(() => {
    picAuthCodeRef.current.onRefresh()
  }, [])

  const onSubmitButtonClick = async (data) => {
    const payload = {
      username: data.account,
      password: data.password,
      login_type: 'account',
      login_relate: null,
    }

    await handleRememberEvent(data.remember, data.account)

    await loginService(payload)

    await checkUserSession?.()

    router.refresh()
  }

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    onSuccess: async (tokenResponse) => {
      const payload = {
        username: null,
        password: null,
        login_type: 'google',
        login_relate: {
          code: tokenResponse.code,
        },
      }

      await loginService(payload)

      await checkUserSession?.()

      router.refresh()
    },
    onError: () => {
      console.log('Login Failed')
    },
  })

  useEffect(() => {
    // load a value from local storage
    const account = localStorage.getItem('pu_account')

    if (account) {
      methods.setValue('account', account)
      methods.setValue('remember', true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const codeHandler = () => {
    const words = 'QWERTYUIPASDFGHJKLZXCVBNM123456789'
    let code = ''

    // 驗證碼為四碼
    for (let i = 0; i < 4; i++) {
      code += words[Math.floor(Math.random() * 34)]
    }
    setAuthCode(code)
    return code
  }

  return (
    <div className="max-w-650 mx-auto pb-5 lg:max-w-[722px] lg:px-10 lg:pb-[102px]">
      <div className="bg-white px-4 py-12 lg:px-12 lg:rounded-2xl">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitButtonClick)}>
          {/* Title */}
          <PageTitle title="會員登入" />

          <div className="space-y-4 mt-6 mb-16">
            {/* Account */}
            <div className="space-y-2">
              <FormTitle musted title="會員帳號" />
              <RHFTextField disabled={isSubmitting} name="account" placeholder="請輸入您的帳號" />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <FormTitle musted title="密碼" />
              <RHFTextField
                disabled={isSubmitting}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="請輸入您的密碼"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          disabled={isSubmitting}
                          aria-label="toggle password visibility"
                          onClick={showPasswordToggle}
                          edge="end"
                        >
                          {showPassword ? (
                            <MdVisibilityOff color="#3C7269" />
                          ) : (
                            <MdOutlineVisibility color="#3C7269" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            {/* Validate Code */}
            <div>
              <FormTitle musted title="驗證碼" />
              <div>
                <div className="space-y-2 lg:space-y-0 lg:flex lg:flex-row lg:gap-x-2">
                  <div className="lg:flex-1">
                    <RHFTextField
                      disabled={isSubmitting}
                      name="validateCode"
                      type="text"
                      placeholder="請輸入驗證碼"
                      disabledError
                    />
                    {errors.validateCode && (
                      <p className="text-xs mt-[3px] mx-[14px] text-[#d32f2f] lg:hidden">
                        {errors.validateCode.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-center flex-wrap space-x-2">
                    <PicAuthCode ref={picAuthCodeRef} code={codeHandler} />
                    <button
                      disabled={isSubmitting}
                      type="button"
                      className="desktop-regular-p text-brown-700 flex flex-row items-center gap-x-1 px-4 py-2 btn-hover"
                      onClick={handleRefreshAuthCode}
                    >
                      <span>刷新</span>
                      <IoMdRefresh fontSize={24} />
                    </button>
                  </div>
                </div>
              </div>
              {errors.validateCode && (
                <p className="hidden text-xs mt-[3px] mx-[14px] text-[#d32f2f] lg:block">
                  {errors.validateCode.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div>
              <div className="flex justify-start items-start gap-x-2">
                <RHFCheckbox
                  disabled={isSubmitting}
                  className="mt-[2px]"
                  name="remember"
                  id={'checkbox-html-for-remember-me'}
                />
                <label
                  htmlFor="checkbox-html-for-remember-me"
                  className="cursor-pointer desktop-regular-p text-dark-900"
                >
                  記住我
                </label>
              </div>
              {errors.isAgree && (
                <p className="text-xs mt-[3px] mx-[14px] text-[#d32f2f]">
                  {errors.isAgree.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <Link
              href={PATHS.Auth.child.ForgotPassword.child.Request.path}
              className="inline-block underline underline-offset-2 desktop-regular-h6 text-dark-500"
            >
              忘記密碼？
            </Link>

            {/* Social Medial Login */}
            {
              <div className="space-y-4">
                <h6 className="desktop-regular-h6 text-dark-900 text-center">快速登入</h6>
                <span className="block h-[1px] bg-dark-300" />
                <div className="flex flex-col items-stretch gap-y-3 lg:gap-x-9 lg:justify-center lg:flex-row lg:items-center">
                  {/* <Link href="https://www.google.com" target="_blank">
                    <div className="flex gap-x-3 items-center">
                      <Image
                        className="w-8 aspect-square"
                        src="/images/icon/fb-01.png"
                        alt="Google"
                        width={144}
                        height={144}
                      />
                      <p className="hidden lg:inline-block desktop-light-h6 text-dark-900">
                        Facebook
                      </p>
                    </div>
                  </Link> */}

                  <button
                    type="button"
                    onClick={() => googleLogin()}
                    className="border p-2 rounded-4 block bg-white hover:bg-gray-50 focus:bg-gray-50 duration-200 transition-colors lg:border-0"
                  >
                    <div className="flex justify-start gap-x-3 items-center">
                      <Image
                        className="w-8 aspect-square"
                        src="/images/icon/google-01.png"
                        alt="Google"
                        width={144}
                        height={144}
                      />
                      <p className="mobile-regular-h5 lg:inline-block desktop-light-h6 text-dark-900">
                        Google
                      </p>
                    </div>
                  </button>

                  {/* <Link href="https://www.google.com" target="_blank">
                    <div className="flex gap-x-3 items-center">
                      <Image
                        className="w-8 aspect-square"
                        src="/images/icon/line-01.png"
                        alt="Google"
                        width={144}
                        height={144}
                      />
                      <p className="hidden lg:inline-block desktop-light-h6 text-dark-900">Line</p>
                    </div>
                  </Link> */}
                </div>
              </div>
            }
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full btn-basic btn-hover bg-primary-500 text-white"
            >
              登入
            </button>
            <Link
              href={PATHS.Auth.child.SignUp.path}
              target="_self"
              className="w-full btn-basic btn-hover bg-white text-primary-500 border-primary-500 border-1"
            >
              註冊
            </Link>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default LoginView
