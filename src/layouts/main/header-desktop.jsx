import { ImageView } from '@/components/imageView'
import { PATHS } from '@/routes/page'
import Link from 'next/link'
import LoginButtonContainer from './login-button/container'
import MenuDesktop from './menu-desktop'

function HeaderDesktop() {
  return (
    <div className="hidden xl:flex xl:flex-row xl:justify-between xl:items-center">
      <Link href={PATHS.Home.path} className="lg:space-x-8 lg:flex lg:flex-row lg:items-center">
        <ImageView
          imageName="logo"
          className={'lg:aspect-square lg:w-[100px]'}
          mobile={{
            src: '/images/logo/logo-1.png',
            width: 401,
            height: 401,
          }}
          desktop={{
            src: '/images/logo/logo-1.png',
            width: 401,
            height: 401,
          }}
        />

        <div className="flex flex-col text-white">
          <h4 className="lg:desktop-regular-h4 lg:text-center">普蓮公益慈善協會</h4>
          <h5 className="lg:desktop-regular-p lg:text-center">Pulian Charity Foundation</h5>
        </div>
      </Link>

      <div className="flex flex-row xl:gap-x-10 2xl:gap-x-14">
        <MenuDesktop />
        <LoginButtonContainer />
      </div>
    </div>
  )
}

export default HeaderDesktop
