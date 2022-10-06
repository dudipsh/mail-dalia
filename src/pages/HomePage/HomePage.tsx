import { useMessagesContext } from '../../context/messages-context'
import { Greeting } from '../../components/Greeting/Greeting'

export const HomePage = () => {
  const { unreadMessagesCount, messages } = useMessagesContext()
  return (
    <Greeting
      totalMessagesCount={messages.length}
      unreadMessagesCount={unreadMessagesCount}
    ></Greeting>
  )
}
