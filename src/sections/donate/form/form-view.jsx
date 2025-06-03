'use client'

import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import FormProvider from '@/components/hook-form/form-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import PageTitle from '@/components/hook-form/page-title'
import FieldTitle from '@/components/hook-form/field-title'
import { RHFSelect } from '@/components/hook-form/rhf-select'
import { Divider, FormHelperText, MenuItem, Select } from '@mui/material'
import { RHFRadioButton } from '@/components/hook-form/rhf-radio-button'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import PaymentButton from '@/sections/donate/components/payment-button'
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox'
import { useCountryTown } from '@/hook/use-country-town'
import { useOptions } from '@/hook/use-options'

import { useAuthContext } from '@/auth/hooks'
import useDonateFormContext from '@/store/use-donate-form-context'
import { PATHS } from '@/routes/page'
import { useRouter } from '@/routes/hooks/use-router'
import FormTitle from '@/components/hook-form/form-title'

import { ONLINE_PAYMENT_METHODS, RECEIPT_TYPE } from './constants'
import schema from './formSchema'

function DonateView({
  donateItemOptions: initialDonateItemOptions = [],
  countryOptions: initialCountryOptions = [],
  receiptTypeOptions: initialReceiptTypeOptions = [],
  payTypeData: initialPayTypeData = [],
  areaMap: initialAreaMap = {},
}) {
  const { user } = useAuthContext()

  const router = useRouter()

  const storeFormData = useDonateFormContext((state) => state.storeFormData)
  const clearData = useDonateFormContext((state) => state.clearData)

  const {
    countryOptions: customCountryOptions,
    areaOptions: customAreaOptions,
    onCityChange: onCityChangeCustom,
  } = useCountryTown({
    initialCountryOptions,
    initialAreaMap,
  })

  const { options: donateItemOptions } = useOptions(initialDonateItemOptions, {
    value: '',
    label: '請選擇捐款項目',
  })

  const {
    countryOptions: receiptCountryOptions,
    areaOptions: receiptAreaOptions,
    onCityChange: onCityChangeReceipt,
  } = useCountryTown({
    initialCountryOptions,
    initialAreaMap,
  })

  const defaultValues = {
    donateAmount: 0,
    donateItem: '',
    donateMethod: 1,

    customName: '',
    customIDNumber: '',
    customPhone: '',
    customEmail: '',
    customCity: '',
    customDistrict: '',
    customAddress: '',

    receiptType: '1',
    receiptTitle: '',
    receiptCity: '',
    receiptDistrict: '',
    receiptAddress: '',
    receiptEmail: '',
    receiptAgreeToTerms: false,
    receiptDisagreeToPublicName: false,
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const {
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  const customCity = watch('customCity')
  const customDistrict = watch('customDistrict')
  const customAddress = watch('customAddress')
  const customEmail = watch('customEmail')
  const receiptType = watch('receiptType')
  const receiptCity = watch('receiptCity')
  const isAutoFillMemberInfo = watch('isAutoFillMemberInfo')
  const isAutoFillReceiptInfo = watch('isAutoFillReceiptInfo')
  const isNoReceipt = receiptType === RECEIPT_TYPE.NoReceipt.value

  const onSubmitButtonClick = useCallback(
    async (data) => {
      const payload = {
        amount: data.donateAmount,
        item_id: data.donateItem,
        donate_name: data.customName,
        id_number: data.customIDNumber,
        phone: data.customPhone,
        email: data.customEmail,
        city: data.customCity,
        area: data.customDistrict,
        address: data.customAddress,
        receipt_type: Number(data.receiptType),
        receipt_extra: {
          receipt_title: data.receiptTitle,
          receipt_city: data.receiptCity,
          receipt_area: data.receiptDistrict,
          receipt_address: data.receiptAddress,
          receipt_email: data.receiptEmail,
        },
        pay_type: data.donateMethod,
        no_public: data.receiptDisagreeToPublicName,
      }

      storeFormData(payload)

      router.push(PATHS.Donate.child.Payment.path)
    },
    [router, storeFormData]
  )

  const handlePaymentButtonClick = useCallback(
    (e) => {
      const value = e.currentTarget.getAttribute('data-value')
      setValue('donateAmount', Number(value))
      methods.trigger('donateAmount')
    },
    [setValue, methods]
  )

  const handleClearButtonClick = useCallback(() => {
    setValue('donateAmount', 0)
    setValue('donateItem', '')
    setValue('donateMethod', 1)

    setValue('customName', '')
    setValue('customIDNumber', '')
    setValue('customPhone', '')
    setValue('customEmail', '')
    setValue('customCity', '')
    setValue('customDistrict', '')
    setValue('customAddress', '')

    setValue('receiptType', '1')
    setValue('receiptTitle', '')
    setValue('receiptCity', '')
    setValue('receiptDistrict', '')
    setValue('receiptAddress', '')
    setValue('receiptEmail', '')

    setValue('receiptAgreeToTerms', false)
    setValue('receiptDisagreeToPublicName', false)
  }, [setValue])

  // render 付款選項
  const renderPaymentSection = useMemo(() => {
    return (
      <div className="flex flex-col gap-y-6">
        <FieldTitle title="付款選項" />

        {/* Donate Amount */}
        <div className="flex flex-col gap-y-6">
          <label className="field-label">捐款金額</label>
          <div className="flex flex-col gap-y-3">
            <FormTitle musted title="新台幣：" />
            <div className="lg:max-w-[410px]">
              <RHFTextField name="donateAmount" type="number" placeholder="請輸入捐款金額" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <PaymentButton value={300} onClick={handlePaymentButtonClick} />
            <PaymentButton value={600} onClick={handlePaymentButtonClick} />
            <PaymentButton value={1000} onClick={handlePaymentButtonClick} />
            <PaymentButton value={2000} onClick={handlePaymentButtonClick} />
            <PaymentButton value={5000} onClick={handlePaymentButtonClick} />
          </div>
        </div>

        {/* Donate Item */}
        <div className="flex flex-col gap-y-3">
          <FormTitle musted title="捐款項目" />
          <div className="lg:max-w-[410px]">
            <RHFSelect name="donateItem">
              {donateItemOptions.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </RHFSelect>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col gap-y-2">
          <h5 className="desktop-regular-h5 text-dark-900">選擇付款方式</h5>
          <div className="flex flex-col gap-y-2">
            <label className="field-label">線上付款：</label>
            <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
              {Object.values(ONLINE_PAYMENT_METHODS).map((item) => {
                const result = initialPayTypeData.filter(
                  (payTypeItem) => payTypeItem.type === item.value
                )
                const disabled = result.length === 0

                return (
                  <RHFRadioButton
                    disabled={disabled}
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    name="donateMethod"
                    label={item.label}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="field-label">第三方支付：</label>
            <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
              <RHFRadioButton
                disabled
                id="radio-button-apple-pay"
                value="4"
                name="donateMethod"
                label="Apple Pay"
              />
              <RHFRadioButton
                disabled
                id="radio-button-line-pay"
                value="5"
                name="donateMethod"
                label="Line Pay"
              />
              <RHFRadioButton
                disabled
                id="radio-button-samsung-pay"
                value="6"
                name="donateMethod"
                label="Samsung Pay"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }, [donateItemOptions, handlePaymentButtonClick, initialPayTypeData])

  const handleCustomCityChange = useCallback(
    (e) => {
      onCityChangeCustom(e.target.value)
      setValue('customCity', e.target.value)
      setValue('customDistrict', '')
      methods.trigger('customCity')
    },
    [methods, onCityChangeCustom, setValue]
  )

  const handleReceiptCityChange = useCallback(
    (e) => {
      onCityChangeReceipt(e.target.value)
      setValue('receiptCity', e.target.value)
      setValue('receiptDistrict', '')
      methods.trigger('receiptCity')
    },
    [methods, onCityChangeReceipt, setValue]
  )

  // render 捐款人資訊
  const renderDonateSection = useMemo(() => {
    return (
      <div className="space-y-9">
        <FieldTitle title="捐款人資訊" />
        <div className="space-y-4">
          <div className="flex flex-row items-center gap-x-2">
            <RHFCheckbox name="isAutoFillMemberInfo" id="isAutoFillMemberInfo" disabled={!user} />
            <label className="desktop-regular-h6 text-dark-600" htmlFor="isAutoFillMemberInfo">
              自動帶入會員資料
            </label>
          </div>

          <div className="flex flex-col gap-y-2">
            <FormTitle htmlFor="customName" musted title="捐款人姓名 / 公司名稱" />
            <RHFTextField name="customName" type="text" id="customName" placeholder="限 13 個字" />
          </div>

          <div className="flex flex-col gap-y-2">
            <FormTitle htmlFor="customIDNumber" musted title="證件號碼 / 統一編號" />
            <RHFTextField
              name="customIDNumber"
              id="customIDNumber"
              type="text"
              placeholder="請輸入證件號碼或是統一編號"
            />
            <p className="desktop-regular-p text-dark-500">
              （請輸入證件號碼或統一編號，若為身份證字號，可提供財政部作為年度綜合所得稅申報使用）
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <FormTitle htmlFor="customPhone" musted title="聯絡電話" />
            <RHFTextField
              name="customPhone"
              type="tel"
              id="customPhone"
              placeholder="請輸入您的連絡電話"
            />
            <p className="desktop-regular-p text-dark-500">（例：0212345678 或 0912345678）</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <FormTitle htmlFor="customEmail" musted title="E-mail" />
            <RHFTextField
              name="customEmail"
              type="email"
              id="customEmail"
              placeholder="請輸入您的 E-mail"
            />
          </div>

          <div className="flex flex-col gap-y-3">
            <FormTitle musted title="通訊地址" />

            <div className="space-y-2 lg:space-y-0 lg:flex lg:flex-row lg:gap-x-3">
              {/* City */}
              <div className="lg:inline-block lg:w-full lg:max-w-[250px]">
                <div className="lg:block">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    fullWidth
                    value={customCity}
                    onChange={handleCustomCityChange}
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
                    error={!!errors.customCity}
                  >
                    {customCountryOptions.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                {errors.customCity && (
                  <FormHelperText sx={{ marginX: '14px' }} error>
                    {errors.customCity.message}
                  </FormHelperText>
                )}
              </div>

              {/* District */}
              <div className="lg:inline-block lg:w-full lg:max-w-[250px]">
                <RHFSelect name="customDistrict">
                  {customAreaOptions.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </div>
            </div>

            {/* Address */}
            <RHFTextField name="customAddress" type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </div>
    )
  }, [
    customAreaOptions,
    customCity,
    customCountryOptions,
    errors.customCity,
    handleCustomCityChange,
    user,
  ])

  // render 收據資訊
  const renderReceiptSection = useMemo(() => {
    return (
      <div className="space-y-9">
        <FieldTitle title="收據寄送" />

        <div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row items-center gap-x-2">
              <RHFCheckbox name="isAutoFillReceiptInfo" id="isAutoFillReceiptInfo" />
              <label className="desktop-regular-h6 text-dark-600" htmlFor="isAutoFillReceiptInfo">
                同捐款人
              </label>
            </div>
            <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-4">
              {initialReceiptTypeOptions.map((item) => {
                const receiptTypeItem = Object.values(RECEIPT_TYPE).find(
                  (receiptTypeItem) => receiptTypeItem.value === item.value
                )

                if (!receiptTypeItem || !receiptTypeItem.enabled) return null

                return (
                  <RHFRadioButton
                    key={receiptTypeItem.id}
                    id={receiptTypeItem.id}
                    name="receiptType"
                    value={item.value}
                    label={item.label}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {!isNoReceipt && (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <FormTitle htmlFor="receiptTitle" musted title="收據抬頭" />
              <RHFTextField name="receiptTitle" id="receiptTitle" placeholder="請輸入收據抬頭" />
            </div>

            <div className="flex flex-col gap-y-3">
              <FormTitle musted title="通訊地址" />

              <div className="space-y-2 lg:space-y-0 lg:flex lg:flex-row lg:gap-x-3">
                {/* City */}
                <div className="lg:inline-block lg:w-full lg:max-w-[250px]">
                  <div className="lg:block">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      displayEmpty
                      fullWidth
                      value={receiptCity}
                      onChange={handleReceiptCityChange}
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
                      error={!!errors.receiptCity}
                    >
                      {receiptCountryOptions.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  {errors.receiptCity && (
                    <FormHelperText sx={{ marginX: '14px' }} error>
                      {errors.receiptCity.message}
                    </FormHelperText>
                  )}
                </div>

                {/* District */}
                <div className="lg:inline-block lg:w-full lg:max-w-[250px]">
                  <RHFSelect name="receiptDistrict">
                    {receiptAreaOptions.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </div>
              </div>

              {/* Address */}
              <RHFTextField name="receiptAddress" type="text" placeholder="請輸入地址" />
            </div>

            <div className="flex flex-col gap-y-2">
              <FormTitle htmlFor="receiptEmail" musted title="電子信箱" />
              <RHFTextField name="receiptEmail" id="receiptEmail" placeholder="請輸入 E-mail" />
            </div>
          </div>
        )}

        {isNoReceipt && <Divider />}

        <div className="space-y-9">
          <div>
            <div className="flex items-start gap-x-2">
              <div className="mt-1">
                <RHFCheckbox name="receiptAgreeToTerms" id="receiptAgreeToTerms" />
              </div>
              <label className="field-label" htmlFor="receiptAgreeToTerms">
                我同意，本捐款表單內之個人基本資料用於開立寄送捐款收據、活動通知及會務聯絡之目的。
              </label>
            </div>
            {errors.receiptAgreeToTerms && (
              <FormHelperText sx={{ marginX: '26px' }} error>
                {errors.receiptAgreeToTerms.message}
              </FormHelperText>
            )}
          </div>

          <div className="flex items-start gap-x-2">
            <div className="mt-1">
              <RHFCheckbox name="receiptDisagreeToPublicName" id="receiptDisagreeToPublicName" />
            </div>
            <label className="field-label space-y-3" htmlFor="receiptDisagreeToPublicName">
              <p>我不同意將全名公開於捐款芳名錄。</p>
              <p>
                ※本會依財團法人法第25條規定，應公開捐款人姓名及金額，如您不同意公開請勾選上述選項。
              </p>
            </label>
          </div>
        </div>
      </div>
    )
  }, [
    errors.receiptAgreeToTerms,
    errors.receiptCity,
    handleReceiptCityChange,
    initialReceiptTypeOptions,
    isNoReceipt,
    receiptAreaOptions,
    receiptCity,
    receiptCountryOptions,
  ])

  // render 按鈕
  const renderButtonSection = useMemo(() => {
    return (
      <div className="flex flex-col gap-y-4 items-stretch lg:flex-row-reverse lg:gap-x-6 lg:justify-center">
        <button type="submit" className="btn-solid btn-hover lg:min-w-[192px]">
          確認送出
        </button>
        <button
          type="button"
          className="btn-outline btn-hover lg:min-w-[192px]"
          onClick={handleClearButtonClick}
        >
          清除重填
        </button>
      </div>
    )
  }, [handleClearButtonClick])

  useEffect(() => {
    if (isAutoFillMemberInfo && user) {
      setValue('customName', user.name)
      setValue('customIDNumber', user.idNumber)
      setValue('customPhone', user.phone)
      setValue('customEmail', user.email)
      setValue('customCity', user.city)
      onCityChangeCustom(user.city)
      setValue('customDistrict', user.area)
      setValue('customAddress', user.address)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoFillMemberInfo, user])

  useEffect(() => {
    if (isAutoFillReceiptInfo) {
      setValue('receiptCity', customCity)
      onCityChangeReceipt(customCity)
      setValue('receiptDistrict', customDistrict)
      setValue('receiptAddress', customAddress)
      setValue('receiptEmail', customEmail)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoFillReceiptInfo])

  useEffect(() => {
    clearData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="max-w-650 mx-auto pb-5 lg:max-w-[1406px] lg:px-10 lg:pb-[102px]">
      <div className="bg-white px-4 py-6 rounded-2xl lg:px-[119px]">
        <FormProvider
          className="space-y-12 lg:space-y-7"
          methods={methods}
          onSubmit={handleSubmit(onSubmitButtonClick)}
        >
          <PageTitle title="Step1. 填寫表單" />

          {renderPaymentSection}

          {renderDonateSection}

          {renderReceiptSection}

          {renderButtonSection}
        </FormProvider>
      </div>
    </div>
  )
}

export default DonateView
