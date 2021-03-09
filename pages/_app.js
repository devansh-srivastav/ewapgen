import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { Name } from '../lib/constants'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
