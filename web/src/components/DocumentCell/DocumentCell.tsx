import type {
  FindDocumentQuery,
  FindDocumentQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
// import Article from 'src/components/Article'

export const QUERY = gql`
  query DocumentsQuery($id: Int!) {
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
