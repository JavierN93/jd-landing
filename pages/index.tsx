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
                  <Image className="h-full" src={image.main} layout="fill" objectFit="cover" alt="Jumbotron" placeholder="blur" blurDataURL={image.blur} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-10" />
          <div className="relative pt-140 pb-40 lg:pt-300 lg:pb-200 w-full h-full z-10">
            <div className="container mx-auto">
              <div className="inline-block rounded-lg text-white my-30 pt-20 px-30 pb-30 bg-black bg-opacity-40">
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
        <section className="pt-60 pb-60 md:pb-100">
          <div className="container mx-auto">
            <h2 className="text-44 text-light-500 text-center mb-40 lg:mb-80">About Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 text-center lg:text-left flex items-center">
                <div>
                  <h3 className="text-30 text-light-500 font-bold mb-45">The History of<br/> J & D Landscaping</h3>
                  <p className="text-light-400 font-medium mb-50 lg:max-w-455">In 2003 at the age of 16, Joseph D. Masciovecchio started his dream of becoming an entrepreneur and opened up his company “J&D Landscaping” which was known as “J&D Snow Removal and Lawn Care” in the early days.</p>
                  <div>
                    <Link href="/about" passHref>
                      <button className="btn btn-primary btn-sm-block">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-30">
                <div className="max-w-670 mx-auto">
                  <Image src="/assets/images/home/history.png" width={670} height={390} layout="responsive" placeholder="blur" blurDataURL="/assets/images/home/history-blur.png" alt="History"  />
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
