import humanize from 'humanize-string'

import { useAuth } from '@redwoodjs/auth'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DOCUMENT_MUTATION = gql`
  mutation DeleteDocumentMutation($id: Int!) {
    deleteDocument(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Document = ({ document }) => {
  const { isAuthenticated } = useAuth()
  const [deleteDocument] = useMutation(DELETE_DOCUMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Document deleted')
      navigate(routes.documents())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete document ' + id + '?')) {
      deleteDocument({ variables: { id } })
    }
  }

  return (
    <>
      <div
        className="rw-segment"
        style={{ boxSizing: 'border-box', padding: '8px' }}
      >
        {/* <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Document {document.id} Detail
          </h2>
        </header> */}
        <h2>{document.title}</h2>
        <div>{document.description}</div>
        <a href={`http://${document.url}`} target="_blank" rel="noreferrer">
          {document.url}
        </a>
        <p>{document.github}</p>
        <p>{document.version}</p>
        <p>{document.size}</p>
        <p>{timeTag(document.createdAt)}</p>
      </div>
      {isAuthenticated ? (
        <nav className="rw-button-group">
          <Link
            to={routes.editDocument({ id: document.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(document.id)}
          >
            Delete
          </button>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}

export default Document
