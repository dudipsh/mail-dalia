import {useNavigate, useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useMessagesContext } from '../../context/messages-context'
import { IMessage } from '../../common/interface/IMessage'
import { MessageDetails } from '../../components/MessageDetails/MessageDetails'
import NavBar from '../../components/NavBar/NavBar'
import { ArrowBack, HomeRounded } from '@mui/icons-material'

const navLinks = [
  { url: '/inbox', name: 'back', icon: <ArrowBack /> },
  { url: '/', icon: <HomeRounded /> },
]

export const MessagePage = () => {
  const { messages, setMessages, isLoaded } = useMessagesContext()
  const { id } = useParams()
  const [activeMessage, setActiveMessage] = useState<IMessage>()
  const navigate = useNavigate()

  const onNavigate = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    if (isLoaded) {
      const msgIndex = messages.findIndex((message) => message.id === Number(id))
      const copyMessage = [...messages]
      copyMessage[msgIndex].read = true
      setMessages(copyMessage)
      setActiveMessage(copyMessage[msgIndex])
    }
  }, [isLoaded])
  return (
    <>
      <NavBar navLinks={navLinks} onNavigate={onNavigate} />
      <MessageDetails message={activeMessage} />
    </>
  )
}
