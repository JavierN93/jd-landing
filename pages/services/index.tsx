import Head from 'next/head';
import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/landing/jumbotron';
import { DesignSection } from '../../components/landing/cta/design-section';
import { MarketplaceSection } from '../../components/landing/cta/marketplace-section';
import { InstallationSection } from '../../components/landing/cta/installation-section';

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <Jumbotron title="Services" image="/assets/images/services/header.jpg" blur="/assets/images/services/header-blur.png" />
        <section className="py-60">
          <InstallationSection />
          <DesignSection />
          <MarketplaceSection />
        </section>
      </Layout>
    </>
  );
}

export default Services
