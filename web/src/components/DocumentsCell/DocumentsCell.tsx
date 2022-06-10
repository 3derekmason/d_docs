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
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <h5
        style={{
          boxSizing: 'border-box',
          paddingLeft: '32px',
          paddingBottom: '4px',
          paddingTop: '4px',
          borderBottom: '0.5px solid #ffffff80',
          fontWeight: '200',
          width: '90%',
          margin: 0,
        }}
      >
        All Packages:
      </h5>
      {documents.map((item) => {
        return <Article key={item.id} article={item} />
      })}
    </div>
  )
}
