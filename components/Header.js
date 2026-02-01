import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.title}>❤️ СоУчастие</h1>
          </Link>
          
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Главная</Link>
            <Link href="/about" className={styles.navLink}>О проекте</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
