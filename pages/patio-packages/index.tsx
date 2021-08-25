import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/layout/layout';
import PatioPackageSelectSection from '../../components/landing/patio-packages/patio-package-select-section';

const PatioPackages: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <PatioPackageSelectSection />
      </Layout>
    </>
  );
}

export default PatioPackages
