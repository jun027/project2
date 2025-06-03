'use client'

import React, { memo, useCallback, useState } from 'react'
import { produce } from 'immer'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'

import useMobileMenuContext from '@/store/use-mobile-menu-context'
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import { HEADER_NAV_LINKS } from '@/constants/header-nav-link'
import { useRouter } from '@/routes/hooks'
import { ACCOUNT_NAV_LIST } from '@/constants/account-nav-list'
import { useAuthContext } from '@/auth/hooks'
import { useBoolean } from '@/hook/use-boolean'

import LoginMenuView from './login-menu-view'
import UnLoginMenuView from './un-login-menu-view'

function MobileMenuView() {
  const router = useRouter()

  const {
    value: isLogoutLoading,
    onTrue: logoutLoadingOnTrue,
    onFalse: logoutLoadingOnFalse,
  } = useBoolean(false)

  const { user, handleLogout } = useAuthContext()

  const open = useMobileMenuContext((state) => state.open)

  const setOpen = useMobileMenuContext((state) => state.setOpen)

  const [collapseList, setCollapseList] = useState(
    HEADER_NAV_LINKS.map((item) => {
      if (!item.child) return null

      return {
        name: item.title,
        open: false,
      }
    })
  )

  const handleDrawerToggle = useCallback(
    (newOpen) => () => {
      setOpen(newOpen)
    },
    [setOpen]
  )

  const handleCollapseClick = useCallback(
    (e) => {
      const collapseName = e.currentTarget.getAttribute('data-name')
      const childLength = e.currentTarget.getAttribute('data-child-length')
      const link = e.currentTarget.getAttribute('data-link')

      if (Number(childLength) > 0) {
        setCollapseList(
          produce((draft) => {
            const collapseItem = draft.find((item) => item.name === collapseName)

            if (collapseItem) {
              collapseItem.open = !collapseItem.open
            }
          })
        )
      } else {
        router.push(link)
        setOpen(false)
      }
    },
    [router, setOpen]
  )

  const handleChildLinkClick = useCallback(
    (e) => {
      const link = e.currentTarget.getAttribute('data-link')

      setOpen(false)
      router.push(link)
    },
    [router, setOpen]
  )

  const handleLogoutClick = useCallback(async () => {
    if (isLogoutLoading) return

    logoutLoadingOnTrue()

    try {
      await handleLogout()

      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)
      logoutLoadingOnFalse()
    }
  }, [handleLogout, isLogoutLoading, logoutLoadingOnFalse, logoutLoadingOnTrue, router, setOpen])

  const renderDrawerList = (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {/* 主選單 */}
      {HEADER_NAV_LINKS.map((link) => {
        if (!link.enabled) return null

        const target = collapseList.find((item) => item.name === link.title)
        const linkOpen = target?.open

        const childList = link.child

        return (
          <React.Fragment key={link.title}>
            <ListItemButton
              data-name={link.title}
              data-child-length={link.child.length}
              data-link={link.link}
              onClick={handleCollapseClick}
              sx={{ padding: '8px 24px' }}
            >
              <Stack sx={{ width: '100%' }} direction="row" alignItems="center" gap={1.5}>
                {link.icon && (
                  <ListItemIcon sx={{ minWidth: 'auto', fontSize: '20px', color: '#5e9818' }}>
                    <link.icon />
                  </ListItemIcon>
                )}
                <div className="flex-1 flex flex-row justify-between items-center">
                  <ListItemText primary={link.title} sx={{ color: '#5e9818' }} />
                  {link.child.length > 0 && (
                    <ListItemIcon sx={{ minWidth: 'auto', fontSize: '20px', color: '#5e9818' }}>
                      {linkOpen ? <FaMinus /> : <FaPlus />}
                    </ListItemIcon>
                  )}
                </div>
              </Stack>
            </ListItemButton>
            <Collapse in={linkOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {childList.map((childItem) => {
                  return (
                    <ListItemButton
                      key={childItem.title}
                      data-link={childItem.link}
                      sx={{ paddingLeft: '3.5rem' }}
                      onClick={handleChildLinkClick}
                    >
                      <ListItemText
                        primary={childItem.title}
                        sx={{
                          fontSize: '14px',
                          color: '#5e9818',
                        }}
                      />
                    </ListItemButton>
                  )
                })}
              </List>
            </Collapse>
          </React.Fragment>
        )
      })}

      {/* 登入後選單 */}
      {user && (
        <LoginMenuView
          list={ACCOUNT_NAV_LIST}
          onClick={handleChildLinkClick}
          isLogoutLoading={isLogoutLoading}
          onLogoutClick={handleLogoutClick}
        />
      )}

      {/* 未登入選單 */}
      {!user && <UnLoginMenuView onClick={handleChildLinkClick} />}
    </List>
  )

  return (
    <Drawer
      open={open}
      onClose={handleDrawerToggle(false)}
      PaperProps={{
        sx: {
          background: '#24262A',
          width: '75%',
        },
      }}
    >
      {renderDrawerList}
    </Drawer>
  )
}

export default memo(MobileMenuView)
