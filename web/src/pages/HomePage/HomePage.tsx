// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DocumentsCell from 'src/components/DocumentsCell'
// import Navbar from 'src/components/Navbar/Navbar'
import styles from 'src/pages/HomePage/homePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <MetaTags title="Home" description="Home page" />
      {/* <Navbar /> */}
      <DocumentsCell />
    </div>
  )
}

export default HomePage
