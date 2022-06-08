import { useState } from 'react'
import styles from 'src/components/Navbar/navbar.module.css'
import { Link, routes, navigate } from '@redwoodjs/router'
const bars = [
  { route: routes.contact(), name: 'Contact' },
  { route: routes.about(), name: 'About' },
]

const Navbar = () => {
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
              onClick={() => {
                navigate(bar.route)
              }}
              key={i}
              className={open ? styles.openBar : styles.closedBar}
            >
              <Link to={bar.route}>{bar.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
