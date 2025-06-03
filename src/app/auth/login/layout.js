import PropTypes from 'prop-types'

import MainLayout from '@/layouts/main'
import BaseLayout from '@/layouts/base'
import { GuestGuard } from '@/auth/guard'

export default function Layout({ children }) {
  return (
    <MainLayout>
      <GuestGuard>
        <BaseLayout>{children}</BaseLayout>
      </GuestGuard>
    </MainLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
