import type { NextPage } from 'next'
import Head from 'next/head';
import { Layout } from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        Something
      </Layout>
    </>
  )
}

export default Home
