import {
  getCountryTownAction,
  getItemTypeAction,
  getPayTypeAction,
  getReceiptTypeAction,
} from '@/actions/getCountryTown'
import { FormView } from '@/sections/donate/form'

export default async function DonatePage() {
  let countryTownData = await getCountryTownAction()
  let itemTypeData = await getItemTypeAction()
  let receiptTypeData = await getReceiptTypeAction()
  let payTypeData = await getPayTypeAction()

  const countryOptions = countryTownData.country_list.map((country) => ({
    label: country.country_name,
    value: country.country_code,
  }))
  const areaMap = countryTownData.town_list

  const donateItemOptions = itemTypeData.map((item) => ({
    label: item.name,
    value: item.type,
  }))

  const receiptTypeOptions = receiptTypeData.map((item) => ({
    label: item.name,
    value: `${item.type}`,
  }))

  return (
    <FormView
      donateItemOptions={donateItemOptions}
      countryOptions={countryOptions}
      receiptTypeOptions={receiptTypeOptions}
      payTypeData={payTypeData}
      areaMap={areaMap}
    />
  )
}
