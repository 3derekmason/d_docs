import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type DocumentLayoutProps = {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.documents()}
            className="rw-link"
          >
            Documents
          </Link>
        </h1>
        <Link
          to={routes.newDocument()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Document
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DocumentsLayout
