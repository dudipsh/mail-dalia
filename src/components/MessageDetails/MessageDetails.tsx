import { Avatar, Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import { IMessage } from '../../common/interface/IMessage'
import { stringAvatar } from '../../common/util'
import React from 'react'

interface MessageDetailsProps {
  message?: IMessage
}
export const MessageDetails = ({ message }: MessageDetailsProps) => {
  return (
    <>
      {message ? (
        <Card sx={{ paddingRight: 10, paddingLeft: 10, paddingTop: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar>{stringAvatar(message?.full_name)}</Avatar>
            <Typography gutterBottom variant='subtitle1' color={'#3973a2'}>
              {message?.full_name}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant='subtitle1' marginLeft={2} fontWeight={600}>
              {message?.subject}
            </Typography>
            <Typography gutterBottom variant='subtitle1' marginLeft={2}>
              {message?.content}
            </Typography>
          </Box>
        </Card>
      ) : null}
    </>
  )
}
