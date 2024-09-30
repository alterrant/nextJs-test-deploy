import Image, { StaticImageData } from 'next/image'
import { StaticRequire } from 'next/dist/shared/lib/get-img-props';

type Cart = {
    name: string;
    description: string;
    img:  string | StaticRequire | StaticImageData;
}

export default function Cart({ name, description, img }: Cart) {
    return (
        <div style={{ display: 'grid' }}>
            <p>{name}</p>
            <p>{description}</p>
            <Image src={img} alt={'cart-image'} width={50} height={50} />
        </div>
    )
}