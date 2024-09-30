import styles from './layout.module.scss';
import "./layout.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <section className={styles.testClasses}>
     <div className="testClasses">
       {children}
     </div>
   </section>
  );
}
