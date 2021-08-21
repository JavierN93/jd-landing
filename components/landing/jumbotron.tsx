import Image from 'next/image';

interface Props {
  title: string,
  image: string,
  blur: string,
  height: number,
}
export function Jumbotron({ title, image, blur, height }: Props) {
  return (
    <section className="relative h-380 pt-80">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image src={image} placeholder="blur" blurDataURL={blur} objectFit="cover" layout="fill" />
      </div>
      <div className="container mx-auto text-white relative z-10">
        <h1 className="text-44 mt-100">{ title }</h1>
      </div>
    </section>
  );
}

Jumbotron.defaultProps = {
  title: '',
  image: '',
  blur: '',
  height: 380
}
