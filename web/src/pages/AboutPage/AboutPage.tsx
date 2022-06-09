import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import styles from 'src/pages/AboutPage/aboutPage.module.css'
const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <MetaTags title="About" description="About page" />
      <Link style={{ textAlign: 'center' }} to={routes.home()}>
        Back to home
      </Link>
      <div>
        <h1
          style={{
            color: '#D1C4E9',
            borderBottom: '0.5px solid #ffffff80',
            borderTop: '0.5px solid #ffffff80',
          }}
        >
          DDocumentation
        </h1>
        <p>
          DDocumentation or <em style={{ color: '#D1C4E9' }}>d_docs</em> is the
          source of information for open source packages published by Derek
          Mason.
        </p>
        <h3 style={{ color: '#7C4DFF' }}>Getting Started</h3>
        <p>
          Select a package from the home page to view details. Available
          information includes
          <ul>
            <li>Package version</li>
            <li>Unpackaged size</li>
            <li>Download link</li>
            <li>Source code link</li>
          </ul>
        </p>
        <p>
          To leave a comment or a message, choose the{' '}
          <strong style={{ color: '#D1C4E9' }}>Contact</strong> option from the
          navigation menu.
        </p>
        <h4 style={{ color: '#7C4DFF' }}>Contributors</h4>
        <p>
          Derek Mason is a developer in Denver, Colorado who uses software
          engineering as a tool to bring impactful ideas to life. Find out more
          at{' '}
          <a href="https://derekmason.dev" target="_blank" rel="noreferrer">
            derekmason.dev
          </a>
        </p>
        <h5
          style={{
            borderBottom: '0.5px solid #ffffff80',
            paddingBottom: '8px',
          }}
        >
          Site made using{' '}
          <a href="http://redwoodjs.com" target="_blank" rel="noreferrer">
            RedwoodJS
          </a>
          .
        </h5>
      </div>
    </div>
  )
}

export default AboutPage
