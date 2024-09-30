import Link from 'next/link';

export default function Login() {
    return (
        <div>
            LOGIN PAGE - server component

            <br />

            <ul style={{ paddingBlock: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>
                    <Link href={'/register'}>Click to register</Link>
                </li>
                <li>
                    <Link href={'/catalog'}>Click to catalog</Link>
                </li>
            </ul>
        </div>
    );
}