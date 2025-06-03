import { PATHS } from '@/routes/page'
import Link from 'next/link'

function UnLoginButton() {
  return (
    <Link
      href={PATHS.Auth.child.Login.path}
      className="py-2 px-8 desktop-regular-h5 text-white 2xl:px-6 xl:px-3 xl:inline-block"
    >
      會員登入
    </Link>
  )
}

export default UnLoginButton
