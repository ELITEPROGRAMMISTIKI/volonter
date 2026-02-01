import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Auth.module.css'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
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
    setSuccess('')

    // Валидация
    if (!formData.name || !formData.email || !formData.password) {
      setError('Все поля обязательны')
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Пароль должен быть минимум 6 символов')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Регистрация успешна! Перенаправление на страницу входа...')
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      } else {
        setError(data.error || 'Ошибка при регистрации')
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
        <title>Регистрация - СоУчастие</title>
        <meta name="description" content="Регистрация волонтеров в системе СоУчастие" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.authCard}>
            <div className={styles.authHeader}>
              <h1 className={styles.title}>Регистрация</h1>
              <p className={styles.subtitle}>
                Присоединяйтесь к сообществу волонтеров СоУчастие
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.error}>{error}</div>}
              {success && <div className={styles.success}>{success}</div>}

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Имя и фамилия</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

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
                  placeholder="Минимум 6 символов"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>Подтвердите пароль</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Повторите пароль"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.button}
                disabled={loading}
              >
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
            </form>

            <div className={styles.authFooter}>
              <p>
                Уже есть аккаунт?{' '}
                <Link href="/login" className={styles.link}>
                  Войти
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
