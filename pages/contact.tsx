import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <Jumbotron title="" image="/assets/images/contact/header.jpg" blur="/assets/images/contact/header-blur.png" />
        <section className="py-60 lg:py-100">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-primary text-22">Keep in touch and</p>
              <h2 className="text-32 md:text-44 text-light-500 text-center mb-40 lg:mb-60">Contact us</h2>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact
