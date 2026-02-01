import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>СоУчастие</h3>
            <p>Инклюзивная платформа для организации социальной и бытовой помощи людям с инвалидностью</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>📘</a>
              <a href="#" className={styles.socialLink}>📷</a>
              <a href="#" className={styles.socialLink}>🐦</a>
              <a href="#" className={styles.socialLink}>📺</a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Навигация</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">О проекте</Link></li>
              <li><Link href="/register">Стать волонтером</Link></li>
              <li><Link href="/login">Войти</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Контакты</h4>
            <div className={styles.contactInfo}>
              <p>📧 info@souchastie.ru</p>
              <p>📞 +7 (800) 123-45-67</p>
              <p>📍 Москва, Россия</p>
              <p>🕐 Ежедневно 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 СоУчастие. Все права защищены.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
