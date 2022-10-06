import { IMessage } from '../../common/interface/IMessage'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { stringAvatar } from '../../common/util'
import Box from '@mui/material/Box'
interface MessageProps {
  message: IMessage
  secondaryAction: React.ReactNode
}

export const MessageItem = ({ message, secondaryAction }: MessageProps) => {
  const navigate = useNavigate()
  const readMessages = (url: string) => {
    navigate(url)
  }

  return (
    <Box sx={{ paddingLeft: 8, paddingRight: 8 }}>
      <ListItem key={message.id} secondaryAction={secondaryAction}>
        <ListItemAvatar>
          <Avatar>{stringAvatar(message.full_name)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          onClick={() => readMessages(`/message/${message.id}`)}
          sx={{ cursor: 'pointer' }}
        >
          <Typography
            noWrap
            marginRight={4}
            variant='h6'
            sx={{ fontWeight: !message.read ? 'bold' : '400' }}
          >
            {message.subject}
          </Typography>
          <Typography noWrap marginRight={2} variant='subtitle1'>
            {message.content}
          </Typography>
        </ListItemText>
      </ListItem>
    </Box>
  )
}
