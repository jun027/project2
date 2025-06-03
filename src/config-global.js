import packageJson from '../package.json'
import { PATHS } from './routes/page'

export const CONFIG = {
  appName: 'Pulian',
  appVersion: packageJson.version,

  email: 'pulian@pulian.org',
  phone: '03-2462-7084',
  address: '-',
  serviceLine: 'https://lin.ee/LAwIykY',

  socialMedia: {
    instagram: {
      link: 'https://www.instagram.com/puliancharity?igsh=MTYxc2ZjMmo4aXp3bw==',
      iconUrl: '/images/icon/icon-instagram.png',
    },
    threads: {
      link: 'https://www.threads.net/@puliancharity',
      iconUrl: '/images/icon/icon-threads.png',
    },
    facebook: {
      link: 'https://www.facebook.com/profile.php?id=61565557204818',
      iconUrl: '/images/icon/icon-fb.png',
    },
  },

  auth: {
    redirectPath: PATHS.Home.path,
  },
}
