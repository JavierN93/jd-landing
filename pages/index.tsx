import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Layout } from '../components/layout/layout';

SwiperCore.use([Autoplay, Pagination]);

const carouselImages = [
  {
    main: '/assets/images/home/carousel-1.jpg',
    blur: '/assets/images/home/carousel-1-blur.png'
  },
  {
    main: '/assets/images/home/carousel-2.jpg',
    blur: '/assets/images/home/carousel-2-blur.png'
  },
  {
    main: '/assets/images/home/carousel-3.jpg',
    blur: '/assets/images/home/carousel-3-blur.png'
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>J & D Landscaping</title>
        <meta name="description" content="J & D Landscaping" />
      </Head>
      <Layout>
        <section className="relative">
          <Swiper className="absolute w-full h-full" spaceBetween={ 0 } slidesPerView={ 1 } autoplay={{ delay: 4000 }} pagination={{ el: `.swiper-pagination`, type: 'bullets' }}>
            {
              carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image className="h-full" src={image.main} width={1440} height={800} layout="fill" objectFit="cover" alt="Jumbotron" placeholder="blur" blurDataURL={image.blur} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-10" />
          <div className="relative absolute w-full h-full top-0 z-10">
            <div className="container mx-auto">
              <div className="inline-block rounded-lg text-white my-30 pt-20 px-30 pb-30 bg-black bg-opacity-30">
                <h1 className="text-32 md:text-44 mb-30">Quality. Efficient. Affordable</h1>
                <div className="text-14 font-medium mb-40">
                  <p className="mb-20">Are you looking to get a quote on an upcoming Hardscape project?</p>
                  <p className="mb-20">
                    We&apos;ve made it easier than ever to get an idea of what to budget for your project.<br className="hidden md:block" />
                    Simply tell us what you have in mind and a project consultant will reach out to you<br className="hidden md:block" />
                    to discuss pricing and answer any questions.
                  </p>
                  <p>You can also check out our Patio Packages section to view signature designs.</p>
                </div>
                <div className="btn-wrapper">
                  <Link href="/request-estimate" passHref><button className="btn btn-primary">Request Estimate</button></Link>
                  <Link href="/patio-packages" passHref><button className="btn btn-warning">Patio Packages</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
