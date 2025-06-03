import { axs } from '@/utils/axios'

const prefix = '/member'

const member = {
  getInfoAPI: async () => {
    const response = await axs(`${prefix}/info`, null, 'GET')
    return response
  },
  updateInfoAPI: async (payload) => {
    const response = await axs(`${prefix}/info`, payload, 'POST')
    return response
  },
  getStatusAPI: async () => {
    const response = await axs(`${prefix}/status`, null, 'GET')
    return response
  },
}

export const { getInfoAPI, updateInfoAPI, getStatusAPI } = member
export default member
