// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DocumentCell from 'src/components/Document/DocumentCell'
// import Navbar from 'src/components/Navbar/Navbar'

interface Props {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
        }}
      >
        {/* <Navbar /> */}
        <DocumentCell id={id} />
      </div>
    </>
  )
}

export default ArticlePage
