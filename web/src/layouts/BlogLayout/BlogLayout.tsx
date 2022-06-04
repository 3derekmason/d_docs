import AppBar from 'src/components/AppBar/AppBar'
import AppFooter from 'src/components/AppFooter/AppFooter'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <AppBar />
      <main style={{ height: 'calc(100vh - 108px)' }}>{children}</main>
      <AppFooter />
    </>
  )
}

export default BlogLayout
