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
      <div style={{ width: '50%' }}>
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
        <h3 style={{ color: '#B39DDB' }}>Getting Started</h3>
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
          <strong style={{ color: '#4DD0E1' }}>Contact</strong> option from the
          navigation menu. Or create an issue or pull request on any of the
          package repos on github!
        </p>
        <h4 style={{ color: '#B39DDB' }}>Contributors</h4>
        <p style={{ fontWeight: '200' }}>
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
            letterSpacing: '0.5px',
            fontWeight: 400,
          }}
        >
          * Site made using the fantastic framework,{' '}
          <a
            href="http://redwoodjs.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#4DD0E1' }}
          >
            RedwoodJS
          </a>
          .
        </h5>
      </div>
    </div>
  )
}

export default AboutPage
