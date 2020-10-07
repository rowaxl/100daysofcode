import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Bit Currency</title>
      <link rel="stylesheeet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
    </Head>
    <Navbar />

    {children}
  </div>
)

export default Layout
