// 取得縣市鄉鎮
export async function getCountryTownAction() {
  const response = await fetch(`${process.env.BASE_URL}api/v1/selectlist/countrytown`, {
    cache: 'no-store',
  })
  return response.json()
}

// 取得收據類型
export async function getReceiptTypeAction() {
  const response = await fetch(`${process.env.BASE_URL}api/v1/selectlist/receipttype`, {
    cache: 'no-store',
  })
  return response.json()
}

// 取得捐款項目類型
export async function getItemTypeAction() {
  const response = await fetch(`${process.env.BASE_URL}api/v1/selectlist/itemtype`, {
    cache: 'no-store',
  })
  return response.json()
}

// 取得收款類型
export async function getPayTypeAction() {
  const response = await fetch(`${process.env.BASE_URL}api/v1/selectlist/paytype`, {
    cache: 'no-store',
  })
  return response.json()
}
