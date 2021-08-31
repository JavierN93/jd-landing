import Image from 'next/image';
import Link from 'next/link';

interface Props {
  onClose: () => void,
  closeDialog: () => void, // DO NOT USE THIS. INTERNAL USE ONLY
}

export function ServiceSelectionDialog({ onClose, closeDialog }: Props) {

  const services = [
    {
      title: 'Installation Services',
      description: 'Hardscaping Simplified',
      bgImage: '/assets/images/service-selection/installation-bg.jpg',
      bgImageBlur: '/assets/images/service-selection/installation-bg-blur.png',
      image: '/assets/images/service-selection/installation.jpg',
      imageBlur: '/assets/images/service-selection/installation.png',
      url: 'https://jdlandscaping.net'
    },
    {
      title: 'Design Services',
      description: 'DIY Home Owners/Contractors',
      bgImage: '/assets/images/service-selection/design-bg.jpg',
      bgImageBlur: '/assets/images/service-selection/design-bg-blur.png',
      image: '/assets/images/service-selection/design.jpg',
      imageBlur: '/assets/images/service-selection/design-blur.png',
      url: 'https://design.jdlandscaping.net'
    },
    {
      title: 'Marketplace',
      description: 'Get a quote for materials',
      bgImage: '/assets/images/service-selection/marketplace-bg.jpg',
      bgImageBlur: '/assets/images/service-selection/marketplace-bg-blur.png',
      image: '/assets/images/service-selection/marketplace.jpg',
      imageBlur: '/assets/images/service-selection/marketplace-blur.png',
      url: 'https://marketplace.jdlandscaping.net'
    },
  ]

  return (
    <div className="w-full sm:w-400 xl:w-1170 p-10 xl:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-y-0 gap-x-25">
        {
          services.map((service, index) => (
            <Link href={service.url}  key={index} passHref>
              <div className="relative px-5 rounded-xl overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image src={service.bgImage} placeholder="blur" blurDataURL={service.bgImageBlur} alt="Installation" layout="fill" objectFit="cover" />
                </div>
                <div className="relative z-10 text-center pt-50 pb-50 xl:pt-120 xl:pb-110">
                  <h4 className="text-30 text-white font-medium mb-10 xl:mb-20">{service.title}</h4>
                  <p className="text-18 text-white font-medium">{service.description}</p>
                </div>
                <div className="hidden xl:block overflow-hidden rounded-t-xl">
                  <Image src={service.image} placeholder="blur" blurDataURL={service.imageBlur} alt="Installation" width={352} height={333} layout="responsive" />
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

ServiceSelectionDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
}
