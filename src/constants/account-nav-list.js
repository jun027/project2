import { PATHS } from '@/routes/page'

import { IoPerson } from 'react-icons/io5'
import { TbReportAnalytics } from 'react-icons/tb'

export const ACCOUNT_NAV_LIST = [
  // * headerOrder 用在登入後，一般會員 hover 後的下拉選單順序
  {
    title: '捐款紀錄',
    link: PATHS.User.child.DonateRecord.path,
    displayMobile: true,
    icon: TbReportAnalytics,
    child: [],

    loginData: {
      title: '捐款紀錄',
      headerOrder: 2,
    },
  },
  {
    title: '會員資料',
    link: PATHS.User.child.MemberInformation.path,
    displayMobile: true,
    icon: IoPerson,
    child: [],

    loginData: {
      title: '會員基本資料',
      headerOrder: 1,
    },
  },
]
