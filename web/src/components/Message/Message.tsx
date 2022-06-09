import type { Contact } from 'types/graphql'

interface Props {
  message: Contact
}

const Message = ({ message }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <p>{message.name}</p>
      <p style={{ fontWeight: 200, fontSize: '18px' }}>{message.message}</p>
      <p style={{ color: '#00838F' }}>{message.email}</p>
      <p style={{ fontSize: '14px', fontWeight: 200 }}>
        Posted: {new Date(message.createdAt).toLocaleString()}
      </p>
    </div>
  )
}

export default Message
