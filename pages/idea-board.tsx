import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Jumbotron } from '../components/landing/jumbotron';
import { GallerySection } from '../components/landing/gallery-section';

const IdeaBoard: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <Jumbotron title="Idea board" image="/assets/images/idea-board/header.jpg" blur="/assets/images/idea-board/header-blur.png" />
        <section className="pt-100 pb-40">
          <div className="container mx-auto">
            <p className="text-light-400 max-w-900 mx-auto text-center">Check out our Hardscape idea board, this section is filled with 1000’s of photos of projects we have completed and allows you to “click and save” the photos you like the best so that when you&apos;re ready to request an estimate we already have an idea of what you have in mind. If you have an account with us already please sign in, if not please create an account.</p>
          </div>
        </section>
        <GallerySection initialIdeas={[]} />
      </Layout>
    </>
  )
}

export default IdeaBoard
