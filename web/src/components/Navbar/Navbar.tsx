import { useState } from 'react'
import styles from 'src/components/Navbar/navbar.module.css'
import { routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Navbar = () => {
  const { isAuthenticated, logOut } = useAuth()
  const bars = [
    {
      route: () => {
        navigate(routes.home())
      },
      name: 'Packages',
    },

    {
      route: () => {
        navigate(routes.about())
      },
      name: 'About',
    },
    {
      route: () => {
        navigate(routes.contact())
      },
      name: 'Contact',
    },
    {
      route: isAuthenticated
        ? logOut
        : () => {
            navigate(routes.login())
          },
      name: isAuthenticated ? 'Logout' : 'Login',
    },
    isAuthenticated
      ? {
          route: () => {
            navigate(routes.documents())
          },
          name: 'Admin',
        }
      : '',
  ]
  const [open, setOpen] = useState(true)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={open ? styles.navbar : styles.closedNavBar}>
      <button onClick={toggleOpen}>{open ? 'Close' : 'Menu'}</button>
      <div className={styles.navbarContainer}>
        {bars.map((bar, i) => {
          return bar.name ? (
            <div
              tabIndex="0"
              onClick={bar.route}
              key={i}
              className={open ? styles.openBar : styles.closedBar}
            >
              {bar.name}
            </div>
          ) : (
            ''
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
