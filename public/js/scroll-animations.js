// Анимации при прокрутке
export function initScrollAnimations() {
  // Функция для проверки видимости элемента
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Функция для добавления класса visible
  const handleScroll = () => {
    const elements = document.querySelectorAll('.sectionTitle, .sectionDescription, .principleCard, .ctaTitle, .ctaDescription, .ctaButtons');
    
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  };

  // Запускаем при загрузке страницы
  handleScroll();

  // Добавляем обработчик скролла
  window.addEventListener('scroll', handleScroll);

  // Оптимизация: throttle для скролла
  let ticking = false;
  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
      setTimeout(() => { ticking = false; }, 100);
    }
  };

  window.addEventListener('scroll', requestTick);
}

// Плавная прокрутка к секциям
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
