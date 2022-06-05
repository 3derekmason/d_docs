import { Private, Router, Route, Set } from '@redwoodjs/router'
import DocumentsLayout from 'src/layouts/DocumentsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={DocumentsLayout}>
          <Route path="/admin/documents/new" page={DocumentNewDocumentPage} name="newDocument" />
          <Route path="/admin/documents/{id:Int}/edit" page={DocumentEditDocumentPage} name="editDocument" />
          <Route path="/admin/documents/{id:Int}" page={DocumentDocumentPage} name="document" />
          <Route path="/admin/documents" page={DocumentDocumentsPage} name="documents" />
        </Set>
      </Private>
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
