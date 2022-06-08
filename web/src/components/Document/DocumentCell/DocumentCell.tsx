import type { FindDocumentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Document from 'src/components/Document/Document'

export const QUERY = gql`
  query FindDocumentById($id: Int!) {
    document: document(id: $id) {
      id
      title
      description
      url
      github
      version
      size
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Document not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ document }: CellSuccessProps<FindDocumentById>) => {
  return <Document document={document} />
}
