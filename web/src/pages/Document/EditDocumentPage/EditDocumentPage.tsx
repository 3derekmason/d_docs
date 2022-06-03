import EditDocumentCell from 'src/components/Document/EditDocumentCell'

type DocumentPageProps = {
  id: number
}

const EditDocumentPage = ({ id }: DocumentPageProps) => {
  return <EditDocumentCell id={id} />
}

export default EditDocumentPage
