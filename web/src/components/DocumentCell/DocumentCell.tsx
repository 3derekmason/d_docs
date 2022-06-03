import type { FindDocumentQuery, FindDocumentQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDocumentQuery($id: Int!) {
    document: document(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDocumentQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  document,
}: CellSuccessProps<FindDocumentQuery, FindDocumentQueryVariables>) => {
  return <div>{JSON.stringify(document)}</div>
}
