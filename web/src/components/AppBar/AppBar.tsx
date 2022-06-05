import { Link, routes } from '@redwoodjs/router'
import styles from '/src/components/AppBar/appbar.module.css'
import { useAuth } from '@redwoodjs/auth'

const AppBar = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <header className={styles.appBar}>
      <h1>
        <Link to={routes.documents()}>d_docs</Link>
      </h1>
      {isAuthenticated ? (
        <div>
          <span>Logged in as {currentUser.email}</span>{' '}
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
