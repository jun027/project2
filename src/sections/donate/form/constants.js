// 線上付款
export const ONLINE_PAYMENT_METHODS = {
  Bank: {
    id: 'radio-button-bank-transfer',
    label: '銀行轉帳',
    value: 1,
  },
  ATM: {
    id: 'radio-button-atm',
    label: 'ATM',
    value: 2,
  },
  CreditCard: {
    id: 'radio-button-credit-card',
    label: '信用卡',
    value: 3,
  },
}

// 第三方支付
export const THIRD_PARTY_PAYMENT_METHODS = {
  ApplePay: {
    label: 'Apple Pay',
    value: 4,
  },
  LinePay: {
    label: 'Line Pay',
    value: 5,
  },
  SamsungPay: {
    label: 'Samsung Pay',
    value: 6,
  },
}

// 收據類型
export const RECEIPT_TYPE = {
  PaperReceipt: {
    id: 'radio-button-paper-receipt',
    value: '1',
    enabled: true,
  },
  ElectronicReceipt: {
    id: 'radio-button-electronic-receipt',
    value: '2',
    enabled: false,
  },
  NoReceipt: {
    id: 'radio-button-no-receipt',
    value: '3',
    enabled: true,
  },
}
