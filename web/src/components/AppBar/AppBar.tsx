import { Link, routes } from '@redwoodjs/router'
import styles from '/src/components/AppBar/appbar.module.css'
import { useAuth } from '@redwoodjs/auth'

const AppBar = () => {
  const { isAuthenticated, logOut } = useAuth()
  return (
    <header className={styles.appBar}>
      <h1>
        <Link to={routes.home()}>d_docs</Link>
      </h1>

      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
