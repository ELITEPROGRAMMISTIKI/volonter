import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Auth.module.css'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Валидация
    if (!formData.email || !formData.password) {
      setError('Email и пароль обязательны')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        // Сохраняем пользователя в localStorage (простой вариант)
        localStorage.setItem('user', JSON.stringify(data.user))
        
        // Показываем успех и перенаправляем
        setError('')
        setTimeout(() => {
          router.push('/dashboard') // Создадим позже
        }, 1000)
      } else {
        setError(data.error || 'Ошибка при входе')
      }
    } catch (error) {
      setError('Ошибка подключения к серверу')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>Вход - СоУчастие</title>
        <meta name="description" content="Вход в систему СоУчастие" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.authCard}>
            <div className={styles.authHeader}>
              <h1 className={styles.title}>Вход в систему</h1>
              <p className={styles.subtitle}>
                Добро пожаловать в СоУчастие
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.error}>{error}</div>}

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Введите пароль"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.button}
                disabled={loading}
              >
                {loading ? 'Вход...' : 'Войти'}
              </button>
            </form>

            <div className={styles.authFooter}>
              <p>
                Нет аккаунта?{' '}
                <Link href="/register" className={styles.link}>
                  Зарегистрироваться
                </Link>
              </p>
              <Link href="/" className={styles.backLink}>
                ← На главную
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
