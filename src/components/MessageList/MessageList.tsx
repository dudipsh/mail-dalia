import React from 'react'
import IconButton from '@mui/material/IconButton'
import { ButtonGroup, List } from '@mui/material'
import { DeleteOutlined, MarkEmailRead } from '@mui/icons-material'
import { MessageItem } from './MessageItem'

interface MessageListProps {
  messages: any[]
  markAsRead: (index: number) => void
  deleteMessage: (index: number) => void
  children?: React.ReactNode
}

export const MessageList = ({
  messages,
  deleteMessage,
  markAsRead,
  children,
}: MessageListProps) => {
  return (
    <List>
      {children}
      {messages.map((message, index: number) => {
        return (
          <MessageItem
            message={message}
            key={message.id}
            secondaryAction={
              <ButtonGroup variant='text' aria-label='text button group'>
                {message.read ? null : (
                  <IconButton
                    edge='end'
                    aria-label='mark ad read'
                    onClick={() => markAsRead(index)}
                  >
                    <MarkEmailRead />
                  </IconButton>
                )}
                <IconButton edge='end' aria-label='delete' onClick={() => deleteMessage(index)}>
                  <DeleteOutlined />
                </IconButton>
              </ButtonGroup>
            }
          ></MessageItem>
        )
      })}
    </List>
  )
}
