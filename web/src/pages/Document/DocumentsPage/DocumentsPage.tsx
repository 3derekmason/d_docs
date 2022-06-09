import DocumentsCell from 'src/components/Document/DocumentsCell'
import ContactsCell from 'src/components/ContactsCell'
import styles from 'src/pages/Document/DocumentsPage/documentsPage.module.css'
const DocumentsPage = () => {
  return (
    <div className={styles.documentsPage}>
      <DocumentsCell />
      <h3 style={{ margin: 0, color: '#00838F' }}>Comments/Messages</h3>
      <ContactsCell />
    </div>
  )
}

export default DocumentsPage
