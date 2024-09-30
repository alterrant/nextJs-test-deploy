import Link from 'next/link';

export default function Register() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
            REGISTER PAGE - server component

            <br />

            <ul style={{ paddingBlock: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>
                    <Link href={'/login'}>Click to login</Link>
                </li>
                <li>
                    <Link href={'/catalog'}>Click to catalog</Link>
                </li>
            </ul>
        </div>
    );
}
