'use client'

import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast'

import FieldTitle from '@/components/hook-form/field-title'
import FormProvider from '@/components/hook-form/form-provider'
import FormTitle from '@/components/hook-form/form-title'
import { RHFSelect } from '@/components/hook-form/rhf-select'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { MenuItem, Select } from '@mui/material'
import { useCountryTown } from '@/hook/use-country-town'
import { useAuthContext } from '@/auth/hooks'
import { GENDER_OPTIONS } from '@/constants/gender'
import updateMemberInfoService from '@/services/member/updateMemberInfo'

function ProfileView({ countryOptions: initialCountryOptions = [], areaMap: initialAreaMap = {} }) {
  const { countryOptions, areaOptions, onCityChange } = useCountryTown({
    initialCountryOptions,
    initialAreaMap,
  })

  const { user, checkUserSession } = useAuthContext()

  const schema = z.object({
    name: z.string().min(1, '會員姓名不得為空'),
    phone: z
      .string()
      .min(1, '聯絡手機不得為空')
      .regex(/^09\d{8}$/, '請輸入正確的手機號碼格式'),
    city: z.union([z.string().min(1, '請選擇縣市'), z.number()]),
    district: z.union([z.string().min(1, '請選擇地區'), z.number()]),
    address: z.string().min(1, '地址不得為空'),
    email: z.string().email('請輸入正確的 Email 格式'),
  })

  const defaultValues = {
    account: user?.account || '',
    name: user?.name || '',
    gender: user?.gender || GENDER_OPTIONS.Male.value,
    phone: user?.phone || '',
    city: '',
    district: '',
    address: user?.address || '',
    validationId: user?.idNumber || '',
    email: user?.email || '',
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const {
    watch,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = methods

  const city = watch('city')
  const gender = watch('gender')

  const onSubmitButtonClick = useCallback(
    async (data) => {
      const payload = {
        name: data.name,
        phone: data.phone,
        city: data.city,
        area: data.district,
        address: data.address,
        email: data.email,
      }

      const { code, message } = await updateMemberInfoService(payload)

      if (code === 0) {
        toast.success(message)
        await checkUserSession()
      } else {
        toast.error(message)
      }
    },
    [checkUserSession]
  )

  const handleCityChange = useCallback(
    (e) => {
      setValue('city', e.target.value)
      onCityChange(e.target.value)
      setValue('district', '')
    },
    [onCityChange, setValue]
  )

  const handleCancelButtonClick = useCallback(() => {
    setValue('name', user.name)
    setValue('phone', user.phone)
    setValue('city', user.city)
    onCityChange(user.city)
    setValue('district', user.area)
    setValue('address', user.address)
    setValue('email', user.email)
  }, [setValue, user, onCityChange])

  useEffect(() => {
    if (user) {
      setValue('city', user.city)
      onCityChange(user.city)
      setValue('district', user.area)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-12 lg:max-w-[516px] lg:mx-auto">
      <FormProvider
        className="space-y-12 lg:space-y-12"
        methods={methods}
        onSubmit={handleSubmit(onSubmitButtonClick)}
      >
        <div className="space-y-9">
          <FieldTitle
            title="會員帳號資料"
            sideColor="bg-secondary-600"
            textClass="text-secondary-600"
          />

          <div>
            <div className="space-y-4">
              <div className="space-y-2">
                <FormTitle title="會員帳號" />
                <RHFTextField name="account" type="text" disabled placeholder="請輸入會員帳號" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-9">
          <FieldTitle
            title="會員基本資料"
            sideColor="bg-secondary-600"
            textClass="text-secondary-600"
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <FormTitle title="姓名" />
              <div className="flex gap-x-3 items-center">
                <div className="flex-1">
                  <RHFTextField name="name" type="text" placeholder="請輸入姓名" />
                </div>
                <p>
                  {Object.values(GENDER_OPTIONS).find((item) => item.value === gender)?.label ||
                    '無'}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <FormTitle title="手機" />
              <RHFTextField name="phone" type="text" placeholder="請輸入手機號碼" />
            </div>

            {/* City & District & Address */}
            <div className="space-y-2 lg:space-y-3">
              <FormTitle title="通訊地址" />

              <div className="space-y-2 lg:flex lg:flex-row lg:space-y-0 lg:gap-x-3">
                {/* City */}
                <div className="lg:w-full">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    fullWidth
                    value={city}
                    onChange={handleCityChange}
                    sx={{
                      '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                          borderWidth: '1px',
                          borderColor: '#ADB5BD',
                        },
                      },
                    }}
                    inputProps={{
                      sx: {
                        padding: '12px 16px',
                      },
                    }}
                    error={!!errors.city}
                  >
                    {countryOptions.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                {/* District */}
                <div className="lg:w-full">
                  <RHFSelect name="district">
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

            <div className="space-y-2">
              <FormTitle title="身分證字號" />
              <RHFTextField
                name="validationId"
                disabled
                type="text"
                placeholder="請輸入身分證字號/公司統編/護照號碼"
              />
            </div>

            <div className="space-y-2">
              <FormTitle title="E-mail" />
              <RHFTextField name="email" type="email" placeholder="請輸入 Email" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row-reverse lg:justify-center lg:gap-y-0 lg:gap-x-6">
          <button
            type="submit"
            className="btn-solid btn-hover py-4 lg:w-[192px]"
            disabled={isSubmitting}
          >
            儲存
          </button>
          <button
            type="reset"
            className="btn-outline btn-hover py-4 lg:w-[192px]"
            onClick={handleCancelButtonClick}
            disabled={isSubmitting}
          >
            取消修改
          </button>
        </div>
      </FormProvider>
    </div>
  )
}

export default ProfileView
