import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { IAppBar } from '../../common/interface/IAppBar'
import { useNavigate } from 'react-router-dom'
import { AppBar } from '@mui/material'

interface AppBarProps {
  navLinks: IAppBar[]
}

const NavBar = ({ navLinks }: AppBarProps) => {
  const navigate = useNavigate()

  const readMessages = (url: string) => {
    navigate(url)
  }

  return (
    <>
      <AppBar>
        <Box display={'flex'} padding={2} justifyContent={'space-between'}>
          {navLinks.map((navLink, index) => (
            <IconButton onClick={() => readMessages(navLink.url)} key={navLink.url}>
              {navLink?.icon}
            </IconButton>
          ))}
        </Box>
      </AppBar>
    </>
  )
}
export default NavBar
