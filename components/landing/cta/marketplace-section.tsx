import Image from 'next/image';
import Link from 'next/link';

export function MarketplaceSection() {
  return (
    <section className="relative bg-warning bg-opacity-60">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/assets/images/cta-marketplace/cta-marketplace-bg.jpg" alt="Marketplace Service" layout="fill" placeholder="blur" blurDataURL="/assets/images/cta-marketplace/cta-marketplace-bg-blur.png" quality={100} objectFit="cover"/>
      </div>
      <div className="container mx-auto relative z-10 py-40 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex-grow max-w-770">
            <Image src="/assets/images/cta-marketplace/cta-marketplace-image.png" width={853} height={456} alt="Marketplace Service" layout="responsive" quality={100} placeholder="blur" blurDataURL="/assets/images/cta-marketplace/cta-marketplace-image-blur.png"/>
          </div>
          <div className="text-white text-center lg:text-right w-full lg:max-w-345">
            <h2 className="text-32 md:text-44 font-medium mb-10">Marketplace</h2>
            <p className="text-18 font-medium mb-40">Get a quote for materials</p>
            <Link href="/services/marketplace" passHref>
              <button className="btn bg-white text-primary btn-sm-block">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
