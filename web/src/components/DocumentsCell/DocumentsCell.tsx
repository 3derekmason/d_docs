import type { DocumentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
// import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

export const QUERY = gql`
  query DocumentsQuery {
    documents {
      id
      title
      url
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ documents }: CellSuccessProps<DocumentsQuery>) => {
  return (
    <div
      style={{
        paddingTop: '160px',
        width: '800px',
        height: 'calc(100% - 160px)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'scroll',
      }}
    >
      {documents.map((item) => {
        return <Article key={item.id} article={item} />
      })}
    </div>
  )
}
