'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { MdOutlineVisibility, MdVisibilityOff } from 'react-icons/md'
import toast from 'react-hot-toast'

import { PATHS } from '@/routes/page'
import FormProvider from '@/components/hook-form/form-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import FiledTitle from '@/components/hook-form/field-title'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import FormTitle from '@/components/hook-form/form-title'
import { RHFSelect } from '@/components/hook-form/rhf-select'
import { FormHelperText, IconButton, InputAdornment, MenuItem } from '@mui/material'
import { RHFRadioButton } from '@/components/hook-form/rhf-radio-button'
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox'
import { IoMdRefresh } from 'react-icons/io'
import PageTitle from '@/components/hook-form/page-title'
import { useBoolean } from '@/hook/use-boolean'
import { useCountryTown } from '@/hook/use-country-town'
import { REGISTER_TYPE_ACCOUNT, SEX_TYPE_FEMALE, SEX_TYPE_MALE } from '@/auth/context/constant'
import registerService from '@/services/auth/register'
import { useRouter } from '@/routes/hooks'
import PicAuthCode from '@/utils/pic-auth-code'

function SignUpView({ countryOptions: initialCountryOptions = [], areaMap: initialAreaMap = {} }) {
  const router = useRouter()

  const { countryOptions, areaOptions, onCityChange } = useCountryTown({
    initialCountryOptions,
    initialAreaMap,
  })

  const { value: showPassword, onToggle: showPasswordToggle } = useBoolean(false)

  const { value: showConfirmPassword, onToggle: showConfirmPasswordToggle } = useBoolean(false)

  const [authCode, setAuthCode] = useState('')

  const picAuthCodeRef = useRef(null)

  const schema = z
    .object({
      account: z.string().min(1, '帳號不得為空').min(8, '帳號最少 8 個字元'),
      password: z
        .string()
        .min(6, '密碼至少需要 6 個字元')
        .max(12, '密碼最多 12 個字元')
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
          '密碼必須是 6 到 12 個字元的英文字母和數字組合'
        ),
      confirmPassword: z
        .string()
        .min(6, '密碼至少需要 6 個字元')
        .max(12, '密碼最多 12 個字元')
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
          '密碼必須是 6 到 12 個字元的英文字母和數字組合'
        ),
      name: z.string().min(1, '會員姓名不得為空'),
      gender: z.string(),
      phone: z
        .string()
        .min(1, '聯絡手機不得為空')
        .regex(/^09\d{8}$/, '請輸入正確的手機號碼格式'),
      city: z.union([z.string().min(1, '請選擇縣市'), z.number()]),
      area: z.union([z.string().min(1, '請選擇地區'), z.number()]),
      address: z.string().min(1, '地址不得為空'),
      validationId: z.string().min(1, '此欄位不得為空'),
      email: z.string().email('請輸入正確的 Email 格式'),
      validateCode: z
        .string()
        .min(1, '請輸入驗證碼')
        .refine((val) => val === authCode, '驗證碼錯誤'),
      isAgree: z.boolean(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: '密碼與確認密碼不一致',
      path: ['confirmPassword'],
    })
    .refine((data) => data.isAgree === true, {
      message: '您必須同意會員條款',
      path: ['isAgree'],
    })

  const defaultValues = {
    account: '',
    password: '',
    confirmPassword: '',
    name: '',
    gender: SEX_TYPE_MALE,
    phone: '',
    city: '',
    area: '',
    address: '',
    validationId: '',
    email: '',
    validateCode: '',
    isAgree: false,
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const {
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = methods

  const city = watch('city')

  const onSubmitButtonClick = async (data) => {
    const payload = {
      register_type: REGISTER_TYPE_ACCOUNT,
      username: data.account,
      password: data.password,
      name: data.name,
      gender: data.gender,
      phone: data.phone,
      city: data.city,
      area: data.area,
      address: data.address,
      id_number: data.validationId,
      email: data.email,
    }

    await registerService(payload)

    router.push(PATHS.Auth.child.Login.path)

    toast.success('註冊成功')
  }

  const handleRefreshAuthCode = useCallback(() => {
    picAuthCodeRef.current.onRefresh()
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

  useEffect(() => {
    setValue('area', '')
    onCityChange(city)
  }, [city, onCityChange, setValue])

  return (
    <div className="max-w-650 mx-auto pb-5 lg:max-w-[1406px] lg:px-10 lg:pb-[102px]">
      <div className="bg-white px-4 py-12 lg:px-[119px] lg:rounded-2xl">
        <FormProvider
          className="space-y-12 lg:space-y-7"
          methods={methods}
          onSubmit={handleSubmit(onSubmitButtonClick)}
        >
          {/* Title */}
          <PageTitle title="加入普蓮" />

          {/* Member Account & Info */}
          <div className="flex flex-col gap-y-14 lg:flex-row lg:gap-y-0 lg:gap-x-8">
            {/* Member Account */}
            <div className="space-y-9 lg:flex-1">
              <FiledTitle title="會員帳號資料" />
              <div className="space-y-4">
                {/* Member Account */}
                <div className="space-y-2">
                  <FormTitle musted title="會員帳號" />
                  <RHFTextField name="account" placeholder="至少 8 個字元" />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <FormTitle musted title="會員密碼" />
                  <RHFTextField
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="請設定 6-12 碼的英文字母和數字組合"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton
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

                {/* Confirm Password */}
                <div className="space-y-2">
                  <FormTitle musted title="再次輸入密碼" />
                  <RHFTextField
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="再次輸入密碼"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={showConfirmPasswordToggle}
                              edge="end"
                            >
                              {showConfirmPassword ? (
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
              </div>
            </div>

            {/* Member Info */}
            <div className="space-y-9 lg:flex-1">
              <FiledTitle title="會員基本資料" />
              <div className="space-y-4">
                {/* Member Name */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <FormTitle musted title="會員姓名" />
                    <div className="flex flex-row items-center gap-x-2">
                      <RHFRadioButton
                        id="radio-button-male"
                        value={SEX_TYPE_MALE}
                        name="gender"
                        label="男士"
                      />
                      <RHFRadioButton
                        id="radio-button-female"
                        value={SEX_TYPE_FEMALE}
                        name="gender"
                        label="女士"
                      />
                    </div>
                  </div>
                  <RHFTextField name="name" type="text" placeholder="請輸入會員名稱" />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <FormTitle musted title="聯絡手機" />
                  <RHFTextField name="phone" type="tel" placeholder="請輸入手機號碼" />
                </div>

                {/* City & District & Address */}
                <div className="space-y-2 lg:space-y-3">
                  <FormTitle musted title="通訊地址" />

                  <div className="space-y-2 lg:flex lg:flex-row lg:space-y-0 lg:gap-x-3">
                    {/* City */}
                    <div className="lg:w-full">
                      <RHFSelect name="city">
                        {countryOptions.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </RHFSelect>
                    </div>

                    {/* District */}
                    <div className="lg:w-full">
                      <RHFSelect name="area">
                        {areaOptions.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </RHFSelect>
                    </div>
                  </div>

                  {/* Address */}
                  <RHFTextField name="address" type="text" placeholder="請輸入地址" />
                </div>

                {/* validationId */}
                <div className="space-y-2">
                  <FormTitle musted title="身分證字號/公司統編/護照號碼" />
                  <RHFTextField
                    name="validationId"
                    type="text"
                    placeholder="請輸入身分證字號/公司統編/護照號碼"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <FormTitle musted title="E-mail" />
                  <RHFTextField name="email" type="email" placeholder="請輸入您的電子信箱" />
                </div>

                {/* Validate Code */}
                <div>
                  <FormTitle musted title="驗證碼" />
                  <div>
                    <div className="space-y-2 lg:space-y-0 lg:flex lg:flex-row lg:gap-x-2">
                      <div className="lg:flex-1">
                        <RHFTextField
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
              </div>
            </div>
          </div>

          {/* Agree Terms & Privacy */}
          <div className="lg:max-w-[351px] lg:mx-auto">
            <div className="flex justify-start items-start gap-x-2">
              <RHFCheckbox className="mt-[2px]" name="isAgree" id={'checkbox-html-for-is-agree'} />
              <label
                htmlFor="checkbox-html-for-is-agree"
                className="desktop-regular-p text-dark-900"
              >
                我已閱讀並同意
                <Link href={PATHS.PrivacyPolicy.path} className="text-primary-700">
                  「隱私權政策」
                </Link>
                於本機構使用
              </label>
            </div>
            {errors.isAgree && (
              <FormHelperText sx={{ marginX: '24px' }} error>
                {errors.isAgree.message}
              </FormHelperText>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-y-4 lg:flex-row-reverse lg:gap-x-6 lg:gap-y-0 lg:max-w-[408px] lg:mx-auto">
            <button type="submit" className="w-full btn-solid btn-hover" disabled={isSubmitting}>
              確認送出
            </button>
            <Link href={PATHS.Home.path} target="_self" className="w-full btn-outline btn-hover">
              返回首頁
            </Link>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUpView
