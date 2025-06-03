import { payFormAPI } from '@/apis/donate'

const payFormService = async (payload) => {
  try {
    const response = await payFormAPI(payload)

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default payFormService
