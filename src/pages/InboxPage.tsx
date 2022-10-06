import { useMessagesContext } from '../context/messages-context'
import React, { useEffect, useState } from 'react'
import { MessageList } from '../components/MessageList/MessageList'
import NavBar from '../components/NavBar/NavBar'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { ArrowBack } from '@mui/icons-material'
import Card from '@mui/material/Card'
const navLinks = [{ url: '/', icon: <ArrowBack /> }]
export const InboxPage = () => {
  const { messages, setMessages, isLoaded } = useMessagesContext()
  const [displayMessages, setDisplayMessages] = useState<any[]>([])

  useEffect(() => {
    setDisplayMessages(messages)
  }, [messages])

  const searchHandler = (value: string) => {
    const filteredMessages = messages.filter((message) => {
      return message.subject.includes(value)
    })
    setDisplayMessages(filteredMessages)
  }

  const markAsReadHandler = (index: number) => {
    const copyMessages = [...messages]
    copyMessages[index].read = true
    setMessages(copyMessages)
  }

  const deleteMessageHandler = (index: number) => {
    const copyMessages = [...messages]
    copyMessages.splice(index, 1)
    setMessages(copyMessages)
  }

  return (
    <>
      <NavBar navLinks={navLinks} />
      {isLoaded ? (
        <>
          <Card sx={{ paddingTop: 8 }}>
            <MessageList
              messages={displayMessages}
              deleteMessage={deleteMessageHandler}
              markAsRead={markAsReadHandler}
            >
              <SearchBar searchHandler={searchHandler} />
            </MessageList>
          </Card>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}
