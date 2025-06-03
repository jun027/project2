import { SignUpView } from '@/sections/auth/signup'
import { getCountryTownAction } from '@/actions/getCountryTown'

export default async function SignUpPage() {
  let data = await getCountryTownAction()

  const countryOptions = data.country_list.map((country) => ({
    label: country.country_name,
    value: country.country_code,
  }))

  const areaMap = data.town_list

  return <SignUpView countryOptions={countryOptions} areaMap={areaMap} />
}
