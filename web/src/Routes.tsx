import { Router, Route, Set } from '@redwoodjs/router'
import DocumentsLayout from 'src/layouts/DocumentsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DocumentsLayout}>
        <Route path="/documents/new" page={DocumentNewDocumentPage} name="newDocument" />
        <Route path="/documents/{id:Int}/edit" page={DocumentEditDocumentPage} name="editDocument" />
        <Route path="/documents/{id:Int}" page={DocumentDocumentPage} name="document" />
        <Route path="/documents" page={DocumentDocumentsPage} name="documents" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
