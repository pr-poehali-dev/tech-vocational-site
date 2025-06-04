// Функция для показа формы подачи заявления
function showApplication() {
  alert(
    "Форма подачи заявления будет доступна с 1 июня!\n\nА пока вы можете:\n• Позвонить по телефону +7 (383) 123-45-67\n• Приехать лично по адресу ул. Техническая, 15",
  );
}

// Плавная прокрутка к секциям
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем обработчики для кнопок
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Добавляем эффект нажатия
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Анимация появления карточек при прокрутке
  const cards = document.querySelectorAll(
    ".specialty-card, .stat-card, .contact-card",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Эффект печатания для заголовка
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = "";
    heroTitle.style.borderRight = "2px solid #fbbf24";

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = "none";
        }, 1000);
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // Счетчик для статистики
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 40);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/\D/g, ""));
        if (number) {
          animateCounter(entry.target, number);
        }
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });
});

// Функция для мобильного меню (если понадобится)
function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Обработка формы обратной связи
function handleContactForm(event) {
  event.preventDefault();
  alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
}

// Добавление интерактивности к карточкам специальностей
document.addEventListener("DOMContentLoaded", function () {
  const specialtyCards = document.querySelectorAll(".specialty-card");

  specialtyCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("click", function () {
      const specialty = this.querySelector("h3").textContent;
      alert(
        `Подробнее о специальности "${specialty}":\n\nДля получения детальной информации обратитесь в приемную комиссию или посетите наш сайт.`,
      );
    });
  });
});
