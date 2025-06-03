import { GoHome } from 'react-icons/go'

const ASSETS = {
  Home: {
    title: '首頁',
    link: '/',
    icon: GoHome,
  },
}

export const PATHS = {
  Home: {
    path: '/',
    title: '首頁',
    subTitle: 'Home',
  },
  Auth: {
    path: '/auth',
    title: '會員中心',
    subTitle: 'Account',
    child: {
      Login: {
        path: '/auth/login',
        title: '會員登入',
        subTitle: 'Login',
        list: [
          ASSETS.Home,
          {
            title: '會員登入',
          },
        ],
      },
      SignUp: {
        path: '/auth/signup',
        title: '會員註冊',
        subTitle: 'Register',
        list: [
          ASSETS.Home,
          {
            title: '會員註冊',
          },
        ],
      },
      ForgotPassword: {
        path: '/auth/forgot_password',
        title: '忘記密碼',
        subTitle: 'Forgot Password',
        child: {
          Request: {
            path: '/auth/forgot_password/request',
            title: '忘記密碼',
            subTitle: 'Forgot Password',
            list: [
              ASSETS.Home,
              {
                title: '會員登入',
                link: '/auth/login',
              },
              {
                title: '忘記密碼',
              },
            ],
          },
          Confirm: {
            path: '/auth/forgot_password/confirm',
            title: '忘記密碼',
            subTitle: 'Forgot Password',
            list: [
              ASSETS.Home,
              {
                title: '會員登入',
                link: '/auth/login',
              },
              {
                title: '忘記密碼',
              },
            ],
          },
        },
      },
      ResetPassword: {
        path: '/auth/reset_password',
        title: '重設密碼',
        subTitle: 'Reset Password',
        list: [
          ASSETS.Home,
          {
            title: '會員登入',
            link: '/auth/login',
          },
          {
            title: '忘記密碼',
          },
        ],
      },
    },
  },
  PrivacyPolicy: {
    path: '/privacy_policy',
    title: '隱私權政策',
    subTitle: 'Privacy Policy',
  },
  User: {
    path: '/user',
    title: '會員中心',
    subTitle: 'Account',
    child: {
      DonateRecord: {
        path: '/user/record',
        title: '會員專區',
        subTitle: 'Member',
        list: [
          ASSETS.Home,
          {
            title: '會員專區',
          },
          {
            title: '捐款紀錄',
          },
        ],
      },
      Donate: {
        path: '/user/donate',
        title: '捐款',
        subTitle: 'Donate',
        child: {
          Recurring: {
            path: '/user/donate/recurring',
            title: '定期定額',
            subTitle: 'Recurring Donation',
          },
          Small: {
            path: '/user/donate/small',
            title: '小額捐款',
            subTitle: 'Small Donation',
          },
        },
      },
      MemberInformation: {
        path: '/user/profile',
        title: '會員資料',
        subTitle: 'Member',
        list: [
          ASSETS.Home,
          {
            title: '會員專區',
          },
          {
            title: '會員資料',
          },
        ],
      },
    },
  },
  Donate: {
    path: '/donate',
    title: '愛心捐款',
    subTitle: 'Donate',
    child: {
      Form: {
        path: '/donate/form',
        title: '捐款表單',
        subTitle: 'Donate',
        list: [
          ASSETS.Home,
          {
            title: '愛心捐款',
          },
          {
            title: '捐款表單',
          },
        ],
      },
      Payment: {
        path: '/donate/payment',
        title: '捐款表單',
        subTitle: 'Donate',
        list: [
          ASSETS.Home,
          {
            title: '愛心捐款',
          },
          {
            title: '捐款表單',
          },
        ],
      },
      Complete: {
        path: '/donate/complete',
        title: '捐款表單',
        subTitle: 'Donate',
        list: [
          ASSETS.Home,
          {
            title: '愛心捐款',
          },
          {
            title: '捐款表單',
          },
        ],
      },
    },
  },
  AboutUs: {
    path: '/about',
    title: '關於我們',
    subTitle: 'About Us',
  },
  Industry: {
    path: '/industry',
    title: '旗下產業',
    subTitle: 'Industry',
    child: {
      FuDeGong: {
        path: '/industry/fu-de-gong',
        title: '恆春郡福德宮',
        subTitle: 'Fu De Gong',
      },
      GRS: {
        path: '/industry/grs',
        title: '進睿國際有限公司',
        subTitle: 'GRS',
      },
      Tapio: {
        path: '/industry/tapio',
        title: '塔皮奧科技股份有限公司',
        subTitle: 'Tapio',
      },
      PuJiTang: {
        path: '/industry/pu-ji-tang',
        title: '普濟堂',
        subTitle: 'Pu Ji Tang',
      },
      AnYangCun: {
        path: '/industry/an-yang-cun',
        title: '安養村',
        subTitle: 'An Yang Cun',
      },
    },
  },
  EmergencyAssistance: {
    path: '/emergency-assistance',
    title: '緊急救援',
    subTitle: 'Emergency Assistance',
    child: {
      PublicOrganizationGrant: {
        path: '/emergency-assistance/public-organization-grant',
        title: '急難救助',
        subTitle: 'Emergency Assistance',
        list: [
          {
            link: '/emergency-assistance/public-organization-grant',
            title: '急難救助',
            icon: GoHome,
          },
          {
            title: '公益團體補助',
          },
        ],
      },
      CaseAssistance: {
        path: '/emergency-assistance/case-assistance',
        title: '急難救助',
        subTitle: 'Emergency Assistance',
        list: [
          {
            link: '/emergency-assistance/case-assistance',
            title: '急難救助',
            icon: GoHome,
          },
          {
            title: '個案援助',
          },
        ],
      },
    },
  },
}
