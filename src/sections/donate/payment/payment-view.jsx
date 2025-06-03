'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaRegCopy } from 'react-icons/fa6'
import { z } from 'zod'

import FormProvider from '@/components/hook-form/form-provider'
import PageTitle from '@/components/hook-form/page-title'
import RHFTextField from '@/components/hook-form/rhf-text-field'
import { DONATE_ACCOUNT } from '@/constants/common'
import { PATHS } from '@/routes/page'
import payFormService from '@/services/donate/payform'
import useDonateFormContext from '@/store/use-donate-form-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from '@/routes/hooks'

function PaymentView() {
  const router = useRouter()

  const getData = useDonateFormContext((state) => state.getData)
  const clearData = useDonateFormContext((state) => state.clearData)

  const schema = z.object({
    account: z.string().trim().min(1, '此欄位不得為空').length(5, '需為帳戶後 5 碼'),
  })

  const defaultValues = {
    account: '',
  }

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const { handleSubmit } = methods

  const onSubmitButtonClick = useCallback(
    async (data) => {
      const payload = {
        ...getData(),
        pay_extra: {
          ...getData().pay_extra,
          bank_5last: data.account,
        },
      }

      await payFormService(payload)

      clearData()

      router.push(PATHS.Donate.child.Complete.path)
    },
    [getData, router, clearData]
  )

  const handleCopyButtonClick = useCallback(() => {
    navigator.clipboard.writeText(DONATE_ACCOUNT)
    toast.success('已複製')
  }, [])

  return (
    <div className="max-w-650 mx-auto pb-5 lg:max-w-[1406px] lg:px-10 lg:pb-[102px]">
      <div className="bg-white px-4 py-6 rounded-2xl lg:px-[119px]">
        <FormProvider
          className="space-y-6 lg:space-y-7"
          methods={methods}
          onSubmit={handleSubmit(onSubmitButtonClick)}
        >
          {/* Title */}
          <PageTitle title="Step2. 付款" />

          <div className="flex flex-col gap-y-6 justify-start items-center">
            <p className="desktop-regular-h6 text-dark-900 lg:desktop-regular-h5">
              QRcode 掃描支付
            </p>

            <Image
              className="aspect-square w-1/2 mx-auto max-w-52"
              src="/images/payment-qr-code-01.png"
              alt="qrCode"
              width={400}
              height={400}
            />

            <div className="flex flex-col items-center gap-y-3">
              <p className="desktop-regular-h6 text-dark-900 lg:desktop-regular-h4">
                銀行匯款帳戶：
              </p>
              <div className="flex gap-x-2 items-center">
                <button type="button" onClick={handleCopyButtonClick}>
                  <FaRegCopy size={20} className="text-primary-500" />
                </button>
                <p
                  role="button"
                  className="desktop-regular-h6 text-dark-900 lg:desktop-regular-h5"
                  onClick={handleCopyButtonClick}
                >
                  {DONATE_ACCOUNT}
                </p>
              </div>
            </div>

            <div className="lg:max-w-[410px] lg:mx-auto">
              <RHFTextField name="account" placeholder="請填寫帳戶後五碼" />
              <label className="mobile-regular-h5 text-dark-500 lg:desktop-regular-p">
                注意事項：匯款完成後，請務必填寫帳戶後五碼，以便我們快速核對並加速處理您的匯款確認。感謝您的配合！
              </label>
            </div>

            <button type="submit" className="w-full btn-solid btn-hover py-4 desktop-regular-h6">
              完成，送出
            </button>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default PaymentView
