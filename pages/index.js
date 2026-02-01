import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Простая функция для анимаций при прокрутке
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Запускаем при загрузке
    setTimeout(handleScroll, 100);
    
    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);
    
    // Очистка
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>СоУчастие - Инклюзивная платформа помощи</title>
        <meta name="description" content="Единое цифровое пространство для организации социальной и бытовой помощи людям с инвалидностью" />
      </Head>
      
      <main className={styles.main}>
        {/* Hero секция */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>СоУчастие</h1>
            <p className={styles.heroSubtitle}>
              Инклюзивная платформа для организации социальной и бытовой помощи людям с инвалидностью
            </p>
            <p className={styles.heroDescription}>
              Создаем единое цифровое пространство, где пользователи могут оставлять заявки на помощь, 
              а волонтёры – откликаться на них и оказывать поддержку.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/register" className={styles.btnPrimary}>
                Стать волонтёром
              </Link>
              <Link href="/login" className={styles.btnSecondary}>
                Войти в систему
              </Link>
            </div>
          </div>
        </section>

        {/* О проекте */}
        <section className={styles.about}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} data-animate>О проекте</h2>
            <p className={styles.sectionDescription} data-animate>
              Наша платформа основана на принципах доступности, социальной значимости и простоты использования. 
              Мы ориентированы на широкую аудиторию и способствуем развитию инклюзивного волонтёрства.
            </p>
            
            <div className={styles.principles}>
              <div className={styles.principleCard} data-animate>
                <h3 className={styles.principleTitle}>🤝 Доступность</h3>
                <p className={styles.principleText}>
                  Простота использования для всех категорий пользователей
                </p>
              </div>
              <div className={styles.principleCard} data-animate>
                <h3 className={styles.principleTitle}>❤️ Социальная значимость</h3>
                <p className={styles.principleText}>
                  Помощь тем, кто в ней действительно нуждается
                </p>
              </div>
              <div className={styles.principleCard} data-animate>
                <h3 className={styles.principleTitle}>🌍 Инклюзивность</h3>
                <p className={styles.principleText}>
                  Объединяем людей для создания лучшего мира
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
