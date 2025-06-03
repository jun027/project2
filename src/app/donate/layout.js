import PropTypes from 'prop-types'

import MainLayout from '@/layouts/main'
import BaseLayout from '@/layouts/base'

export default function Layout({ children }) {
  return (
    <MainLayout>
      <BaseLayout>{children}</BaseLayout>
    </MainLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
