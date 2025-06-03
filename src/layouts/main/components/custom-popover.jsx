import { Popover } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledPopover = styled(Popover)({
  pointerEvents: 'none',
  marginTop: '10px',

  '& .MuiPaper-root': {
    padding: '8px 0',
    pointerEvents: 'auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#ffffffab',
    width: '312px',
    backdropFilter: 'blur(5px)',
  },
})
