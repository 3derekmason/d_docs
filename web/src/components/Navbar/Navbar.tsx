import { useState } from 'react'
import styles from 'src/components/Navbar/navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.navbar}>
      <button onClick={toggleOpen}>{open ? 'Close' : 'Open'}</button>
    </div>
  )
}

export default Navbar
