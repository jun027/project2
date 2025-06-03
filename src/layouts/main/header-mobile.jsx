'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'

import { ImageView } from '@/components/imageView'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PATHS } from '@/routes/page'
import useMobileMenuContext from '@/store/use-mobile-menu-context'

function HeaderMobile() {
  const setOpen = useMobileMenuContext((state) => state.setOpen)

  const onOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  return (
    <div>
      <div className="xl:hidden">
        <div className="flex justify-between items-center">
          <Link href={PATHS.Home.path}>
            <ImageView
              imageName="logo"
              className={'aspect-square w-[35px]'}
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
          </Link>

          <div className="flex flex-col text-white">
            <h4 className="mobile-medium-h4 text-center">普蓮公益慈善協會</h4>
            <h5 className="mobile-light-h5 text-center">Pulian Charity Foundation</h5>
          </div>

          <button className="p-3" onClick={onOpen}>
            <FontAwesomeIcon fontSize={22} className="text-white" icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile
