import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    // Анимации при прокрутке
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

    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>О проекте - СоУчастие</title>
        <meta name="description" content="Информация о волонтерском проекте помощи инвалидам" />
      </Head>
      
      <main className={styles.main}>
        {/* Hero секция страницы */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>О проекте СоУчастие</h1>
            <p className={styles.heroSubtitle}>
              Создаем инклюзивное пространство для взаимопомощи и поддержки
            </p>
          </div>
        </section>

        {/* Миссия и социальная значимость */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} data-animate>Миссия и социальная значимость</h2>
            
            <div className={styles.missionContent}>
              <div className={styles.missionText} data-animate>
                <h3>Наша миссия</h3>
                <p>
                  Создать единое цифровое пространство, которое объединяет волонтеров и людей с инвалидностью 
                  для оказания качественной социальной и бытовой помощи. Мы стремимся сделать мир более 
                  доступным и инклюзивным через технологии и человеческую доброту.
                </p>
              </div>
              
              <div className={styles.missionValues} data-animate>
                <h3>Наши ценности</h3>
                <div className={styles.valuesGrid}>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>🤝</span>
                    <h4>Сотрудничество</h4>
                    <p>Объединяем усилия для достижения общей цели</p>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>❤️</span>
                    <h4>Забота</h4>
                    <p>Относимся к каждому с пониманием и уважением</p>
                  </div>
                  <div className={styles.valueCard}>
                    <span className={styles.valueIcon}>🌍</span>
                    <h4>Инклюзивность</h4>
                    <p>Создаем возможности для всех без исключений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Принципы инклюзивного волонтёрства */}
        <section className={styles.principles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} data-animate>Принципы инклюзивного волонтёрства</h2>
            
            <div className={styles.principlesGrid}>
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>🎯</div>
                <h3>Целенаправленность</h3>
                <p>
                  Каждая волонтерская инициатива имеет четкую цель и измеримый результат. 
                  Мы помогаем там, где поддержка действительно необходима.
                </p>
              </div>
              
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>🔍</div>
                <h3>Понимание потребностей</h3>
                <p>
                  Глубокое изучение и понимание уникальных потребностей каждого человека 
                  с инвалидностью для оказания качественной помощи.
                </p>
              </div>
              
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>🔄</div>
                <h3>Взаимное уважение</h3>
                <p>
                  Создаем атмосферу равноправия и взаимного уважения между волонтерами 
                  и получателями помощи.
                </p>
              </div>
              
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>📚</div>
                <h3>Обучение и развитие</h3>
                <p>
                  Постоянное обучение волонтеров лучшим практикам работы с людьми 
                  с разными видами инвалидности.
                </p>
              </div>
              
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>🛡️</div>
                <h3>Конфиденциальность</h3>
                <p>
                  Полная защита личной информации и создание безопасной среды 
                  для всех участников платформы.
                </p>
              </div>
              
              <div className={styles.principleCard} data-animate>
                <div className={styles.principleIcon}>🌱</div>
                <h3>Устойчивое развитие</h3>
                <p>
                  Создаем долгосрочные отношения и поддерживаем постоянное 
                  развитие сообщества.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Роли пользователей платформы */}
        <section className={styles.roles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} data-animate>Роли пользователей платформы</h2>
            
            <div className={styles.rolesGrid}>
              <div className={styles.roleCard} data-animate>
                <div className={styles.roleHeader}>
                  <span className={styles.roleIcon}>👤</span>
                  <h3>Человек с инвалидностью</h3>
                </div>
                <div className={styles.roleContent}>
                  <h4>Возможности:</h4>
                  <ul>
                    <li>Создание заявок на необходимую помощь</li>
                    <li>Выбор подходящего волонтера</li>
                    <li>Получение регулярной поддержки</li>
                    <li>Обратная связь о качестве помощи</li>
                  </ul>
                  <h4>Типы помощи:</h4>
                  <ul>
                    <li>Покупка продуктов и товаров</li>
                    <li>Сопровождение в медучреждения</li>
                    <li>Помощь по дому</li>
                    <li>Техническая поддержка</li>
                    <li>Дружеское общение</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.roleCard} data-animate>
                <div className={styles.roleHeader}>
                  <span className={styles.roleIcon}>🤝</span>
                  <h3>Волонтер</h3>
                </div>
                <div className={styles.roleContent}>
                  <h4>Обязанности:</h4>
                  <ul>
                    <li>Отклик на заявки о помощи</li>
                    <li>Качественное выполнение задач</li>
                    <li>Соблюдение этических норм</li>
                    <li>Постоянное развитие навыков</li>
                  </ul>
                  <h4>Требования:</h4>
                  <ul>
                    <li>Желание помогать людям</li>
                    <li>Ответственность и пунктуальность</li>
                    <li>Уважение к личным границам</li>
                    <li>Базовые навыки коммуникации</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.roleCard} data-animate>
                <div className={styles.roleHeader}>
                  <span className={styles.roleIcon}>👥</span>
                  <h3>Координатор</h3>
                </div>
                <div className={styles.roleContent}>
                  <h4>Функции:</h4>
                  <ul>
                    <li>Модерация заявок и волонтеров</li>
                    <li>Решение конфликтных ситуаций</li>
                    <li>Организация обучения</li>
                    <li>Аналитика и отчетность</li>
                  </ul>
                  <h4>Ответственность:</h4>
                  <ul>
                    <li>Качество работы платформы</li>
                    <li>Безопасность пользователей</li>
                    <li>Развитие сообщества</li>
                    <li>Партнерские отношения</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent} data-animate>
              <h2>Станьте частью СоУчастия</h2>
              <p>
                Присоединяйтесь к нашему сообществу и помогайте делать мир лучше и доступнее для всех
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/register" className={styles.btnPrimary}>Стать волонтером</Link>
                <Link href="/login" className={styles.btnSecondary}>Войти в систему</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
