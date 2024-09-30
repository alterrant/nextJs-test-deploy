'use client';

import { useEffect, useState } from 'react';
import styles from './layout.module.scss';
import './layout.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [title, setTitle] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribeTimer: null | ReturnType<typeof setTimeout> = setTimeout(() => setTitle('SUBCATALOG LAYOUT - client component'), 1000);

        return () => {
            clearTimeout(unsubscribeTimer);
        };
    }, []);


  return (
   <section className={styles.testClasses}>
     <div className="testClasses1">
         <p>{title}</p>
       {children}
     </div>
   </section>
  );
}
