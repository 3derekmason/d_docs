import type { Contact } from 'types/graphql'

interface Props {
  message: Contact
}

const Message = ({ message }: Props) => {
  return (
    <>
      <header>
        <h2>{message.name}</h2>
      </header>
      <div>{message.message}</div>
      <div>{message.email}</div>
      <div>Posted at: {message.createdAt}</div>
    </>
  )
}

export default Message
