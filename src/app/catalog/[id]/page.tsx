import Link from 'next/link';

export default function CatalogCart() {
    return (
        <div>
            CATALOG-ID PAGE - server component

            <br />

            <ul style={{ paddingBlock: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>
                    <Link href={'/login'}>Click to login</Link>
                </li>
                <li>
                    <Link href={'/register'}>Click to register</Link>
                </li>
                <li>
                    <Link href={'/catalog/2'}>Click to catalog/2</Link>
                </li>
                <li>
                    <Link href={'/catalog'}>Click to catalog</Link>
                </li>
                <li>
                    <Link href={'/catalog/subcatalog'}>Click to subcatalog</Link>
                </li>
            </ul>
        </div>
    );
}
