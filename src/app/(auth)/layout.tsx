import styles from './layout.module.scss';
import "./layout.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <section className={styles.testClassesWrapper}>
     <div className="testClasses">
       {children}
     </div>
   </section>
  );
}
