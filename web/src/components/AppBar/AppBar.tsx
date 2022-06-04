import { Link, routes } from '@redwoodjs/router'
import styles from '/src/components/AppBar/appbar.module.css'
const AppBar = () => {
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
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar
