import { createContext, useContext, useEffect, useState } from 'react'
import { apiService } from '../services/apiService'
import { IMessage } from '../common/interface/IMessage'

const MessagesContext = createContext({
  messages: [] as IMessage[],
  unreadMessagesCount: 0,
  isLoaded: false,
  setMessages: (messages: IMessage[]) => {},
})

const useMessagesContext = () => {
  return useContext(MessagesContext)
}

const MessagesProvider = ({ children }: { children: JSX.Element }) => {
  const [messagesList, setMessagesList] = useState<IMessage[]>([])
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)

  // read message from api
  // store messages
  useEffect(() => {
    apiService.getMessages().then((messages) => {
      setMessagesList(messages)
    })
  }, [])

  //update  unread messages number in context
  useEffect(() => {
    const unreadMessages = messagesList.filter((message: IMessage) => !message?.read)
    setUnreadMessagesCount(unreadMessages.length)
  }, [messagesList])

  return (
    <MessagesContext.Provider
      value={{
        messages: messagesList,
        unreadMessagesCount,
        isLoaded: messagesList.length > 0,
        setMessages: (messages: IMessage[]) => setMessagesList(messages),
      }}
    >
      {children}
    </MessagesContext.Provider>
  )
}

export { MessagesContext, useMessagesContext, MessagesProvider }
