import DocumentCell from 'src/components/Document/DocumentCell'

type DocumentPageProps = {
  id: number
}

const DocumentPage = ({ id }: DocumentPageProps) => {
  return <DocumentCell id={id} />
}

export default DocumentPage
