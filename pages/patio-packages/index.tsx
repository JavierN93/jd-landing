import { NextPage } from 'next';
import Head from 'next/head';
import { Jumbotron } from '../../components/landing/jumbotron';
import { Layout } from '../../components/layout/layout';

const PatioPackages: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <Jumbotron title="Hardscape Packages" image="/assets/images/patio-packages/header.jpg" blur="/assets/images/patio-packages/header-blur.png" />
        <section className="py-100">
          <div className="container mx-auto">
            <div className="text-center text-light-500">
              <h2 className="text-30 font-bold mb-60">Signature Hardscape Packages by J & D Landscaping</h2>
              <p className="max-w-900 mx-auto mb-20">If you've been dreaming of a Hardscape project, but have trouble deciding what's going to look best and what to budget for your project our signature packages are a great place to start.</p>
              <p className="max-w-900 mx-auto">J & D Landscaping's Hardscape packages can be customized to fit your backyard and offer you the selection and flexibility to bring your Hardscape dream to reality.</p>
            </div>
          </div>

          <div className="grid">
            <div></div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default PatioPackages
