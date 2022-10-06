import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { IAppBar } from '../../common/interface/IAppBar'
import { AppBar } from '@mui/material'

interface AppBarProps {
  navLinks: IAppBar[],
  onNavigate: (url: string) => void,
}

const NavBar = ({ navLinks, onNavigate }: AppBarProps) => {
  return (
    <>
      <AppBar>
        <Box display={'flex'} padding={2} justifyContent={'space-between'}>
          {navLinks.map((navLink) => (
            <IconButton onClick={() => onNavigate(navLink.url)} key={navLink.url}>
              {navLink?.icon}
            </IconButton>
          ))}
        </Box>
      </AppBar>
    </>
  )
}
export default NavBar
