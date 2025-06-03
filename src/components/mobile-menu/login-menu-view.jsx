import { memo } from 'react'
import { FiLogOut } from 'react-icons/fi'

import { ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'

function LoginMenuView({
  list = [],
  isLogoutLoading = false,
  onClick = () => {},
  onLogoutClick = () => {},
}) {
  return (
    <>
      {list.map((navItem) => {
        return (
          <ListItemButton
            key={navItem.title}
            data-link={navItem.link}
            onClick={onClick}
            sx={{ padding: '8px 24px' }}
          >
            <Stack direction="row" alignItems="center" gap={1.5} className="w-full">
              <ListItemIcon sx={{ minWidth: 'auto', fontSize: '20px', color: '#5e9818' }}>
                <navItem.icon />
              </ListItemIcon>
              <div className="flex-1 flex flex-row justify-between items-center">
                <ListItemText sx={{ color: '#5e9818' }} primary={navItem.title} />
              </div>
            </Stack>
          </ListItemButton>
        )
      })}
      <ListItemButton
        key={'logout'}
        disabled={isLogoutLoading}
        onClick={onLogoutClick}
        sx={{ padding: '8px 24px' }}
      >
        <Stack direction="row" alignItems="center" gap={1.5} className="w-full">
          <ListItemIcon sx={{ minWidth: 'auto', fontSize: '20px', color: '#5e9818' }}>
            <FiLogOut />
          </ListItemIcon>
          <div className="flex-1 flex flex-row justify-between items-center">
            <ListItemText sx={{ color: '#5e9818' }} primary={'登出'} />
          </div>
        </Stack>
      </ListItemButton>
    </>
  )
}

export default memo(LoginMenuView)
