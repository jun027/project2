import { useCallback, useState } from 'react'
import { IoPerson } from 'react-icons/io5'

import { useRouter } from '@/routes/hooks'
import { useAuthContext } from '@/auth/hooks'
import { useBoolean } from '@/hook/use-boolean'
import { StyledPopover } from '../components/custom-popover'
import { ACCOUNT_NAV_LIST } from '@/constants/account-nav-list'

export default function LoginButton() {
  const router = useRouter()

  const { handleLogout } = useAuthContext()

  const {
    value: isLogoutLoading,
    onTrue: logoutLoadingOnTrue,
    onFalse: logoutLoadingOnFalse,
  } = useBoolean(false)

  const [anchorEl, setAnchorEl] = useState(null)

  const [openedPopover, setOpenedPopover] = useState(false)

  const accountNavListCopy = JSON.parse(JSON.stringify(ACCOUNT_NAV_LIST))

  const popoverEnter = () => {
    setOpenedPopover(true)
  }

  const popoverLeave = () => {
    setOpenedPopover(false)
  }

  const handleRouter = (data) => {
    setOpenedPopover(false)
    if (!data.child || data.child.length === 0) {
      router.push(data.link)
    }
  }

  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenedPopover(true)
  }

  const handlePopoverClose = () => {
    setOpenedPopover(false)
  }

  const handleLogoutClick = useCallback(async () => {
    if (isLogoutLoading) return

    logoutLoadingOnTrue()

    try {
      await handleLogout()

      router.refresh()
    } catch (error) {
      console.error(error)
      logoutLoadingOnFalse()
    }
  }, [handleLogout, isLogoutLoading, logoutLoadingOnFalse, logoutLoadingOnTrue, router])

  return (
    <div>
      <button
        aria-haspopup="true"
        className="flex flex-col items-center gap-1 hover:bg-[#35645ba7] p-3 rounded-md duration-200"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <IoPerson fontSize={24} className="text-white" />
        <p className="desktop-regular-h5 text-white">一般會員</p>
      </button>

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
        {accountNavListCopy
          .sort((a, b) => a.loginData.headerOrder - b.loginData.headerOrder)
          .map((data) => {
            return (
              <button
                key={data.title}
                aria-hidden
                className="relative desktop-regular-h5 py-2 text-dark-900 flex flex-row justify-center items-center gap-x-3 group"
                onClick={() => handleRouter(data)}
              >
                <span className="inline-block aspect-square w-2 rounded-full bg-dark-700 opacity-0 group-hover:opacity-100 duration-100" />
                {data.loginData.title}
              </button>
            )
          })}
        <button
          aria-hidden
          className="relative desktop-regular-h5 py-2 text-dark-900 flex flex-row justify-center items-center gap-x-3 group"
          onClick={handleLogoutClick}
        >
          <span className="inline-block aspect-square w-2 rounded-full bg-dark-700 opacity-0 group-hover:opacity-100 duration-100" />
          登出
        </button>
      </StyledPopover>
    </div>
  )
}
