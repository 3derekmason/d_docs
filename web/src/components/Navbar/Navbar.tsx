import { useState } from 'react'
import styles from 'src/components/Navbar/navbar.module.css'

const bars = [1, 2, 3, 4]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.navbar}>
      <button onClick={toggleOpen}>{open ? 'Close' : 'Menu'}</button>
      <div className={styles.navbarContainer}>
        {bars.map((bar) => {
          return (
            <div key={bar} className={open ? styles.openBar : styles.closedBar}>
              <h3>Action</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
