'use client';

import { useEffect, useState } from 'react';
import img from '../../assets/no-image.png';
import Cart from '@/components/cart/Cart';
import { StaticImageData } from 'next/image';
import { StaticRequire } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import './layout.scss';

type Img =  string | StaticRequire | StaticImageData;

type Data = { id: number, name: string, description: string, imageSrc: Img }
const testData = [
    { id: 0, name: 'testName1', description: 'testDesc1', imageSrc: img as Img },
    { id: 1, name: 'testName2', description: 'testDesc2', imageSrc: img as Img },
    { id: 2, name: 'testName3', description: 'testDesc3', imageSrc: img as Img },
    { id: 3, name: 'testName4', description: 'testDesc4', imageSrc: img as Img },
    { id: 4, name: 'testName5', description: 'testDesc5', imageSrc: img as Img },
    { id: 5, name: 'testName6', description: 'testDesc6', imageSrc: img as Img },
];

export default function Register() {
    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        const unsubscribeTimer: null | ReturnType<typeof setTimeout> = setTimeout(() => setData(testData), 1000);

        return () => {
            clearTimeout(unsubscribeTimer);
        };
    }, []);

    return (
        <section className="testClasses">
            <p>CATALOG PAGE - client component</p>
            <div style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 100px))',
                gap: '10px'
            }}>
                {data.map(({ id, name, description, imageSrc }: Data) =>
                    <Cart key={id} img={imageSrc} name={name} description={description} />
                )}
            </div>
            <ul style={{ paddingBlock: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>
                    <Link href={'/login'}>Click to login</Link>
                </li>
                <li>
                    <Link href={'/register'}>Click to register</Link>
                </li>
                <li>
                    <Link href={'/catalog'}>Click to catalog</Link>
                </li>
                <li>
                    <Link href={'/catalog/1'}>Click to catalog/1</Link>
                </li>
            </ul>
        </section>
    );
}
