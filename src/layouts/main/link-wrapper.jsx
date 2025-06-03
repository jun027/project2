'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { memo, useRef } from 'react'

function LinkWrapper({ list, wrapperStatus, onClose }) {
  const refRoot = useRef(null)

  return (
    <div
      ref={refRoot}
      className="px-5 pb-5 overflow-hidden duration-300"
      style={{ height: wrapperStatus ? 0 : refRoot.current.scrollHeight }}
    >
      <div className="pt-2">
        {list.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            className={clsx(
              'block px-8 py-2',
              wrapperStatus ? 'pointer-events-none' : 'pointer-events-auto'
            )}
            onClick={onClose}
          >
            <span className="text-primary-500 desktop-regular-p">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default memo(LinkWrapper)
