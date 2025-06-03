import BaseLayout from '@/layouts/base'
import MainLayout from '@/layouts/main'
import AccountSidebar from './components/account-sidebar'
import { AuthGuard } from '@/auth/guard'

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <MainLayout>
        <BaseLayout>
          <div className="pb-5 lg:pb-[72px] lg:px-10">
            <div className="max-w-650 mx-auto bg-white lg:max-w-[1592px] lg:rounded-2xl">
              <div className="px-4 py-6 space-y-[10px] lg:space-y-6 lg:p-12">
                <h3 className="desktop-regular-h5 lg:desktop-regular-h3 text-brown-700">
                  一般會員
                </h3>
                <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-y-0 lg:gap-x-20">
                  <AccountSidebar />
                  <div className="lg:flex-1 lg:w-1">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </BaseLayout>
      </MainLayout>
    </AuthGuard>
  )
}
