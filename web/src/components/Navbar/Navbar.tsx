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
        navigate(routes.contact())
      },
      name: 'Contact',
    },
    {
      route: () => {
        navigate(routes.about())
      },
      name: 'About',
    },
    isAuthenticated
      ? {
          route: () => {
            navigate(routes.documents())
          },
          name: 'Admin',
        }
      : '',
    {
      route: isAuthenticated
        ? logOut
        : () => {
            navigate(routes.login())
          },
      name: isAuthenticated ? 'Logout' : 'Login',
    },
  ]
  const [open, setOpen] = useState(true)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.navbar}>
      <button onClick={toggleOpen}>{open ? 'Close' : 'Menu'}</button>
      <div className={styles.navbarContainer}>
        {bars.map((bar, i) => {
          return (
            <div
              tabIndex="0"
              onClick={bar.route}
              key={i}
              className={open ? styles.openBar : styles.closedBar}
            >
              {bar.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
