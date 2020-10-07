import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = ({ bpi, time }) => {
  return (
    <Layout>
      <h3>Welcome to Bit Currency</h3>

      <p>Check current Bitcoin rate</p>
      <Prices bpi={bpi} />

      <div>
        updated at: {new Date(time.updated).toLocaleString()}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const { bpi, time } = await res.json()

  return {
    bpi,
    time
  }
}

export default Index