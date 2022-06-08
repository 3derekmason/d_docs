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
        paddingTop: '120px',
        width: '800px',
        height: 'calc(100% - 120px)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'scroll',
      }}
    >
      <h4
        style={{
          boxSizing: 'border-box',
          paddingLeft: '32px',
          paddingBottom: '4px',
          borderBottom: '0.5px solid #ffffff80',
          width: '90%',
          margin: 0,
        }}
      >
        Packages:
      </h4>
      {documents.map((item) => {
        return <Article key={item.id} article={item} />
      })}
    </div>
  )
}
