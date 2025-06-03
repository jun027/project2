import { axs } from '@/utils/axios'

const prefix = '/select'

const selectList = {
  receiptTypeAPI: async () => {
    const response = await axs(`${prefix}/receipttype`, null, 'GET')
    return response
  },
  itemTypeAPI: async () => {
    const response = await axs(`${prefix}/itemtype`, null, 'GET')
    return response
  },
  payTypeAPI: async () => {
    const response = await axs(`${prefix}/paytype`, null, 'GET')
    return response
  },
  countryTownAPI: async () => {
    const response = await axs(`${prefix}/countrytown`, null, 'GET')
    return response
  },
}

export const { receiptTypeAPI, itemTypeAPI, payTypeAPI, countryTownAPI } = selectList
export default selectList
