import { create } from 'zustand'
import { produce } from 'immer'

export const useDonateFormContext = create((set, get) => ({
  amount: 0,
  item_id: 0,
  donate_name: '',
  id_number: '',
  phone: '',
  email: '',
  city: '',
  area: '',
  address: '',
  receipt_type: 0,
  receipt_extra: {
    receipt_title: '',
    receipt_city: '',
    receipt_area: '',
    receipt_address: '',
    receipt_email: '',
  },
  pay_type: 0,
  pay_extra: {
    bank_5last: '',
  },
  is_public: false,
  storeFormData: (payload) => {
    set(
      produce((draft) => {
        draft.amount = payload.amount
        draft.item_id = payload.item_id
        draft.donate_name = payload.donate_name
        draft.id_number = payload.id_number
        draft.phone = payload.phone
        draft.email = payload.email
        draft.city = payload.city
        draft.area = payload.area
        draft.address = payload.address
        draft.receipt_type = payload.receipt_type
        draft.receipt_extra = payload.receipt_extra
        draft.pay_type = payload.pay_type
        draft.is_public = payload.is_public
      })
    )
  },
  getData: () => {
    return {
      amount: get().amount,
      item_id: get().item_id,
      donate_name: get().donate_name,
      id_number: get().id_number,
      phone: get().phone,
      email: get().email,
      city: get().city,
      area: get().area,
      address: get().address,
      receipt_type: get().receipt_type,
      receipt_extra: get().receipt_extra,
      pay_type: get().pay_type,
      pay_extra: get().pay_extra,
      is_public: get().is_public,
    }
  },
  clearData: () => {
    set(
      produce((draft) => {
        draft.amount = 0
        draft.item_id = 0
        draft.donate_name = ''
        draft.id_number = ''
        draft.phone = ''
        draft.email = ''
        draft.city = ''
        draft.area = ''
        draft.address = ''
        draft.receipt_type = 0
        draft.receipt_extra = {
          receipt_title: '',
          receipt_city: '',
          receipt_area: '',
          receipt_address: '',
          receipt_email: '',
        }
        draft.pay_type = 0
        draft.pay_extra = {
          bank_5last: '',
        }
        draft.is_public = false
      })
    )
  },
}))

export default useDonateFormContext
