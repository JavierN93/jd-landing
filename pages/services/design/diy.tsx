import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Layout } from '../../../components/layout/layout';
import { MarketplaceSection } from '../../../components/landing/cta/marketplace-section';
import { CustomerType } from '../../../core/data/how-it-works';
import useGAService from '../../../core/app-services/ga-service';
import useRequestDesignEstimateService from '../../../core/app-services/request-design-estimate-service';

const step1CarouselImages = [
  '/assets/images/diy-customers/a1.jpg',
  '/assets/images/diy-customers/a2.jpg',
  '/assets/images/diy-customers/a3.jpg',
];

const step2CarouselImages = [
  '/assets/images/diy-customers/b1.jpg',
  '/assets/images/diy-customers/b2.jpg',
  '/assets/images/diy-customers/b3.jpg',
];

const step3CarouselImages = [
  '/assets/images/diy-customers/c1.jpg',
  '/assets/images/diy-customers/c2.jpg',
  '/assets/images/diy-customers/c3.jpg',
];

export default function Diy() {
  const requestDesignEstimateService = useRequestDesignEstimateService();
  const gaService = useGAService();
  gaService.pageView('https://design.jdlandscaping.net/diy');
  return (
    <>
      <Head>
        <title>J & D Landscaping Design Services - Installation</title>
        <meta name="description" content="I'll install the project myself / I'm a contractor"/>
      </Head>
      <Layout>
        <section className="relative h-380">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image src="/assets/images/services/design/header.jpg" alt="Design Service" layout="fill" placeholder="blur" blurDataURL="/assets/images/services/design/header-blur.png" quality={100} objectFit="cover"/>
          </div>
          <div className="absolute bottom-70 w-full">
            <div className="container mx-auto relative z-10">
              <h1 className="text-30 lg:text-44 text-white text-center lg:text-left max-w-620">
                Hardscape 3D Design Services
                For Contractors & DIYers
              </h1>
            </div>
          </div>
        </section>
        <section className="bg-light-50">
          <div className="container mx-auto py-70">
            <h6 className="text-24 text-center mb-40">How It Works</h6>
            <p className="text-16 text-light-400 mb-100 max-w-830 mx-auto px-15">Work online with a Hardscape Architect to plan and design your project and receive a detailed 2D Digital Blueprint, 3D Renderings, and a complete Materials List of your project. It is easy to get started.</p>
            <div className="text-center md:text-left max-w-1200 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <p className="text-44 text-primary font-medium mb-10">1.</p>
                  <p className="text-16 text-light-500 max-w-430 mb-20">First, submit a basic hand-drawn sketch, a few photos of the project area/house, and measurements of your project. Please don&apos;t worry about the house measurements as we work with GIS Mapping to gather this information.</p>
                  <p className="text-16 text-light-500 max-w-430">If any other photos or measurements are needed after submission, we will simply reach out to you for this additional information.</p>
                </div>
                <div className="pl-0 md:pl-20">
                  <div className="max-w-500 mt-30 md:mt-0 mr-0 ml-auto relative rounded-lg overflow-hidden">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 4000 }}
                      pagination={{
                        el: '.step-1',
                        type: 'bullets',
                      }}
                    >
                      {step1CarouselImages.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="rounded-lg shadow-primary overflow-hidden">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="503" height="316" quality={100} layout="responsive" alt="Carousel Image" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-pagination-slider step-1 absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-100">
                <div>
                  <div className="max-w-500 mt-30 md:mt-0 relative rounded-lg overflow-hidden">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 4000 }}
                      pagination={{
                        el: '.step-2',
                        type: 'bullets',
                      }}
                    >
                      {step2CarouselImages.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="rounded-lg shadow-primary overflow-hidden">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="503" height="316" quality={100} layout="responsive" alt="Carousel Image" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-pagination-slider step-2 absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30" />
                  </div>
                </div>
                <div className="pl-0 md:pl-20">
                  <div className="max-w-500 mr-0 ml-auto">
                    <p className="text-44 text-primary font-medium mb-10">2.</p>
                    <p className="text-16 text-light-500 max-w-430 mb-20">Next, one of our expert designers will review your project details and follow up with you to discuss any questions or suggestions based on the initial outline.</p>
                    <p className="text-16 text-light-500 max-w-430">Once your project is outlined, you&apos;ll be able to choose materials for your project by either telling us what you like, showing us a photo you&apos;ve found, or by looking through our digital showroom of materials.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-80">
                <div>
                  <p className="text-44 text-primary font-medium mb-10">3.</p>
                  <p className="text-16 text-light-500 max-w-430">Finally, review your completed 3D drawings, make any minor adjustments needed and receive a complete materials list of everything you need to complete your project based on your plan.</p>
                </div>
                <div className="pl-0 md:pl-20">
                  <div className="max-w-500 mt-30 md:mt-0 mr-0 ml-auto relative rounded-lg overflow-hidden">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 4000 }}
                      pagination={{
                        el: '.step-3',
                        type: 'bullets',
                      }}
                    >
                      {step3CarouselImages.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="rounded-lg shadow-primary overflow-hidden">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="503" height="316" quality={100} layout="responsive" alt="Carousel Image" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-pagination-slider step-3 absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10 bg-secondary bg-opacity-30" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 pt-35 pb-25 mb-50 px-10 max-w-1200 mx-auto">
              <p className="text-24 max-w-725 mx-auto text-center">Receive all this and the guidance of a trusted industry expert for only <span className="text-primary">$399</span></p>
            </div>
            <div className="flex justify-center">
              <Link href="/submit" passHref>
                <button className="btn btn-warning btn-lg">Get Started</button>
              </Link>
            </div>
          </div>
        </section>
        {/*<MarketplaceSection />*/}
      </Layout>
    </>
  );
}
