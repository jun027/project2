import { axs } from '@/utils/axios'

const prefix = '/donate'

const selectList = {
  payFormAPI: async (payload) => {
    const response = await axs(`${prefix}/payform`, payload, 'POST')
    return response
  },
  historyAPI: async (payload) => {
    const response = await axs(`${prefix}/history`, payload, 'POST')
    return response
  },
}

export const { payFormAPI, historyAPI } = selectList
export default selectList
