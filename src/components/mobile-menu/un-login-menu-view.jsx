import { memo } from 'react'
import { IoPerson } from 'react-icons/io5'

import { PATHS } from '@/routes/page'
import { ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'

function UnLoginMenuView({ onClick = () => {} }) {
  return (
    <ListItemButton
      key={'login'}
      data-link={PATHS.Auth.child.Login.path}
      onClick={onClick}
      sx={{ padding: '8px 24px' }}
    >
      <Stack direction="row" alignItems="center" gap={1.5} className="w-full">
        <ListItemIcon sx={{ minWidth: 'auto', fontSize: '20px', color: '#5e9818' }}>
          <IoPerson />
        </ListItemIcon>
        <div className="flex-1 flex flex-row justify-between items-center">
          <ListItemText sx={{ color: '#5e9818' }} primary={'登入'} />
        </div>
      </Stack>
    </ListItemButton>
  )
}

export default memo(UnLoginMenuView)
