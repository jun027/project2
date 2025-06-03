'use client'

import { memo, useState } from 'react'

import { HEADER_NAV_LINKS } from '@/constants/header-nav-link'
import { useRouter } from '@/routes/hooks'
import { StyledPopover } from './components/custom-popover'

function MenuDesktop() {
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null)

  const [openedPopover, setOpenedPopover] = useState(false)

  const [popoverList, setPopoverList] = useState([])

  const popoverEnter = () => {
    setOpenedPopover(true)
  }

  const popoverLeave = () => {
    setOpenedPopover(false)
  }

  const handlePopoverOpen = (data, { currentTarget }) => {
    if (data.child && data.child.length > 0) {
      setPopoverList(data.child)
      setAnchorEl(currentTarget)
      setOpenedPopover(true)
    }
  }

  const handleRouter = (data) => {
    setOpenedPopover(false)
    if (!data.child || data.child.length === 0) {
      router.push(data.link)
    }
  }

  const handlePopoverClose = () => {
    setOpenedPopover(false)
  }

  return (
    <div className="flex items-center">
      {HEADER_NAV_LINKS.map((cur) => {
        if (!cur.enabled) return null

        return (
          <button
            key={cur.title}
            aria-haspopup="true"
            className="min-w-36 px-3 py-2 rounded-md hover:bg-[#35645ba7] duration-200"
            onMouseEnter={(e) => handlePopoverOpen(cur, e)}
            onMouseLeave={handlePopoverClose}
            onClick={() => handleRouter(cur)}
          >
            <p className="desktop-regular-h5 text-white">{cur.title}</p>
          </button>
        )
      })}
      <StyledPopover
        id="mouse-over-popover"
        open={openedPopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            onMouseEnter: popoverEnter,
            onMouseLeave: popoverLeave,
          },
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {popoverList.map((data) => {
          return (
            <button
              key={data.title}
              aria-hidden
              className="relative desktop-regular-h5 py-2 text-dark-900 flex flex-row justify-center items-center gap-x-3 group"
              onClick={() => handleRouter(data)}
            >
              <span className="inline-block aspect-square w-2 rounded-full bg-dark-700 opacity-0 group-hover:opacity-100 duration-100" />
              {data.title}
            </button>
          )
        })}
      </StyledPopover>
    </div>
  )
}

export default memo(MenuDesktop)
