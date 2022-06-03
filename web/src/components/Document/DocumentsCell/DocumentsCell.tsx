import type { FindDocuments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Documents from 'src/components/Document/Documents'

export const QUERY = gql`
  query FindDocuments {
    documents {
      id
      title
      description
      url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No documents yet. '}
      <Link
        to={routes.newDocument()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ documents }: CellSuccessProps<FindDocuments>) => {
  return <Documents documents={documents} />
}
