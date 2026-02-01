import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ComingSoon.module.css'

export default function Register() {
  return (
    <div>
      <Head>
        <title>Регистрация - СоУчастие</title>
        <meta name="description" content="Страница регистрации волонтеров" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>🚧 Страница в разработке</h1>
            <p className={styles.description}>
              Страница регистрации волонтеров находится в разработке. 
              Скоро здесь появится форма регистрации с возможностью стать частью нашего сообщества.
            </p>
            <div className={styles.features}>
              <h2>Что будет на этой странице:</h2>
              <ul>
                <li>📝 Форма регистрации волонтеров</li>
                <li>✅ Валидация данных</li>
                <li>🔐 Безопасное сохранение информации</li>
                <li>📧 Подтверждение по email</li>
                <li>👤 Создание личного кабинета</li>
              </ul>
            </div>
            <div className={styles.actions}>
              <Link href="/" className={styles.btnPrimary}>На главную</Link>
              <Link href="/about" className={styles.btnSecondary}>О проекте</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
