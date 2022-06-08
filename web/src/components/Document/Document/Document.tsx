import humanize from 'humanize-string'

import { useAuth } from '@redwoodjs/auth'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import styles from 'src/components/Document/Document/document.module.css'

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
        className={styles.documentView}
        style={{ boxSizing: 'border-box', padding: '8px' }}
      >
        <h2>{document.title}</h2>
        <div className={styles.docRow}>
          <p>v{document.version}</p>
          <p>{document.size}</p>
        </div>

        <div>{document.description}</div>
        <div className={styles.docRow}>
          <a href={`http://${document.url}`} target="_blank" rel="noreferrer">
            Download
          </a>
          <a
            href={`http://${document.github}`}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
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
