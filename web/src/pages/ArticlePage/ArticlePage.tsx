// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DocumentCell from 'src/components/Document/DocumentCell'

interface Props {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <DocumentCell id={id} />
    </>
  )
}

export default ArticlePage
