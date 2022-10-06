import Card from '@mui/material/Card'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import React from 'react'
import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

interface GreetingProps {
  totalMessagesCount: number
  unreadMessagesCount: number
}

export const Greeting = ({ totalMessagesCount, unreadMessagesCount }: GreetingProps) => {
  const navigate = useNavigate()
  const readMessages = () => {
    navigate('/inbox')
  }
  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Card sx={{ minWidth: 400 }}>
        <Typography variant='h4' textAlign='center' color='#7b7878'>
          Hello, Tom!
        </Typography>
        <Typography variant='body1' textAlign='center' color='#7b7878'>
          You have {unreadMessagesCount} unread messages out of {totalMessagesCount} total
        </Typography>
        <Stack spacing={2}>
          <Button variant='contained' onClick={readMessages}>
            Read Messages
          </Button>
        </Stack>
      </Card>
    </Box>
  )
}
