import type { EditDocumentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DocumentForm from 'src/components/Document/DocumentForm'

export const QUERY = gql`
  query EditDocumentById($id: Int!) {
    document: document(id: $id) {
      id
      title
      url
      createdAt
    }
  }
`
const UPDATE_DOCUMENT_MUTATION = gql`
  mutation UpdateDocumentMutation($id: Int!, $input: UpdateDocumentInput!) {
    updateDocument(id: $id, input: $input) {
      id
      title
      url
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ document }: CellSuccessProps<EditDocumentById>) => {
  const [updateDocument, { loading, error }] = useMutation(UPDATE_DOCUMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Document updated')
      navigate(routes.documents())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDocument({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Document {document.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DocumentForm document={document} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
