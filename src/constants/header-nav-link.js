import { PATHS } from '@/routes/page'

import { GoHomeFill } from 'react-icons/go'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { BsFillBuildingFill } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { IoInformationCircleSharp } from 'react-icons/io5'

export const HEADER_NAV_LINKS = [
  {
    title: PATHS.Home.title,
    link: PATHS.Home.path,
    enabled: true,
    icon: GoHomeFill,
    child: [],
  },
  {
    title: PATHS.AboutUs.title,
    link: PATHS.AboutUs.path,
    enabled: true,
    icon: BsFillPeopleFill,
    child: [
      {
        title: '創辦人理念',
        link: PATHS.AboutUs.path + '#founder',
      },
      {
        title: '歷史沿革',
        link: PATHS.AboutUs.path + '#history',
      },
      {
        title: '成立宗旨',
        link: PATHS.AboutUs.path + '#purpose',
      },
      {
        title: '聯絡資訊/服務據點',
        link: PATHS.AboutUs.path + '#serve',
      },
    ],
  },
  {
    title: PATHS.Donate.title,
    link: PATHS.Donate.child.Form.path,
    enabled: true,
    icon: BiSolidDonateHeart,
    child: [],
  },
  {
    title: '急難救助',
    link: PATHS.Home.path,
    enabled: false,
    icon: FaHandshakeSimple,
    child: [
      {
        title: '個案援助',
        link: PATHS.Home.path,
      },
      {
        title: '公益團體補助',
        link: PATHS.Home.path,
      },
      {
        title: '注意事項Q&A',
        link: PATHS.Home.path,
      },
      {
        title: '求助表單下載',
        link: PATHS.Home.path,
      },
      {
        title: '申請檢附文件',
        link: PATHS.Home.path,
      },
    ],
  },
  {
    title: PATHS.Industry.title,
    link: PATHS.Industry.path,
    enabled: true,
    icon: BsFillBuildingFill,
    child: [
      {
        title: PATHS.Industry.child.FuDeGong.title,
        link: PATHS.Industry.child.FuDeGong.path,
      },
      {
        title: PATHS.Industry.child.GRS.title,
        link: PATHS.Industry.child.GRS.path,
      },
      {
        title: PATHS.Industry.child.Tapio.title,
        link: PATHS.Industry.child.Tapio.path,
      },
      {
        title: PATHS.Industry.child.PuJiTang.title,
        link: PATHS.Industry.child.PuJiTang.path,
      },
      {
        title: PATHS.Industry.child.AnYangCun.title,
        link: PATHS.Industry.child.AnYangCun.path,
      },
    ],
  },
  {
    title: '活動影音',
    link: PATHS.Home.path,
    enabled: false,
    icon: FaYoutube,
    child: [
      {
        title: 'Facebook',
        link: PATHS.Home.path,
      },
      {
        title: 'Youtube',
        link: PATHS.Home.path,
      },
      {
        title: '相簿影音專區',
        link: PATHS.Home.path,
      },
    ],
  },
  {
    title: '愛心捐款',
    link: PATHS.Home.path,
    enabled: false,
    icon: BiSolidDonateHeart,
    child: [
      {
        title: '一般轉帳',
        link: PATHS.Home.path,
      },
      {
        title: '信用卡',
        link: PATHS.Home.path,
      },
      {
        title: '第三方支付',
        link: PATHS.Home.path,
      },
    ],
  },
  {
    title: '公開資訊',
    link: PATHS.Home.path,
    enabled: false,
    icon: IoInformationCircleSharp,
    child: [
      {
        title: '志工計劃',
        link: PATHS.Home.path,
      },
      {
        title: '項目報告',
        link: PATHS.Home.path,
      },
      {
        title: '決算書',
        link: PATHS.Home.path,
      },
      {
        title: '財務報告',
        link: PATHS.Home.path,
      },
    ],
  },
]
