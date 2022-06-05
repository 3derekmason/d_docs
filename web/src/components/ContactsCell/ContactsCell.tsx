import type { ContactsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Message from 'src/components/Message'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      email
      message
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  return (
    <ul>
      {contacts.map((item) => {
        return <Message key={item.id} message={item} />
      })}
    </ul>
  )
}
