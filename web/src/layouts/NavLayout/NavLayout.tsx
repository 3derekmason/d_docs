import Navbar from 'src/components/Navbar/Navbar'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Navbar />
      {children}
    </div>
  )
}

export default NavLayout
