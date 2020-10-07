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

    <footer className="mt-4 mx-4">
      <p>2020, &copy; rowaxl</p>
      <p>API powered by <a href="https://www.coindesk.com/" target="_blank">coindesk</a></p>
    </footer>
  </div>
)

export default Layout
