import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ComingSoon.module.css'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Вход - СоУчастие</title>
        <meta name="description" content="Страница входа в систему" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>🚧 Страница в разработке</h1>
            <p className={styles.description}>
              Страница входа в систему находится в разработке. 
              Скоро здесь появится форма авторизации для зарегистрированных пользователей.
            </p>
            <div className={styles.features}>
              <h2>Что будет на этой странице:</h2>
              <ul>
                <li>🔐 Форма входа по email и паролю</li>
                <li>🔑 Восстановление пароля</li>
                <li>📱 Возможность входа через соцсети</li>
                <li>👤 Доступ в личный кабинет</li>
                <li>🛡️ Безопасная аутентификация</li>
              </ul>
            </div>
            <div className={styles.actions}>
              <Link href="/" className={styles.btnPrimary}>На главную</Link>
              <Link href="/register" className={styles.btnSecondary}>Регистрация</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
