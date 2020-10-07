import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Bit Currency</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" />
    </Head>
    <Navbar />

    <div className="container">
      {children}
    </div>
  </div>
)

export default Layout
