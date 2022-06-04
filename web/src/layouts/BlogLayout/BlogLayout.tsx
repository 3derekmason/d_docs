import AppBar from 'src/components/AppBar/AppBar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <footer>@SadiesGym 2022</footer>
    </>
  )
}

export default BlogLayout
