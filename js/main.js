

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Анимация для навыков
document.querySelectorAll('.skill-badge').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.backgroundColor = '#38bdf8';
    });

    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '';
    });
});

// Анимация для блобов
const blobs = document.querySelectorAll('.blob');
blobs.forEach(blob => {
    let angle = 0;
    setInterval(() => {
        angle += 0.5;
        const x = Math.cos(angle) * 20;
        const y = Math.sin(angle) * 20;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }, 50);
});

// Анимация для текста
const textElements = document.querySelectorAll('h1, h2, p');
textElements.forEach(element => {
    element.classList.add('opacity-0', 'transition-all', 'duration-1000');
    observer.observe(element);
});

// Мобильное меню
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('animate-fade-in');
    });
}

// Добавляем CSS классы для анимаций
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.8s ease-in-out forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .project-card {
        transition: all 0.3s ease;
    }

    .skill-badge {
        transition: all 0.3s ease;
    }

    .blob {
        transition: transform 0.5s ease;
    }

    /* Стили для модального окна */
    .modal-active .modal-content {
        opacity: 1;
        transform: scale(1);
    }

    .modal-active {
        display: flex; /* Переопределяем hidden, чтобы показать */
    }

    .modal-closing .modal-content {
        opacity: 0;
        transform: scale(0.95);
    }
`;
document.head.appendChild(style);

// Логика модального окна для проектов
const projectModal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalLink = document.getElementById('modal-link');

document.querySelectorAll('.open-project-modal').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.dataset.projectId;
        const title = this.dataset.title;
        const description = this.dataset.description;
        const image = this.dataset.image;
        const tech = this.dataset.tech;
        const link = this.dataset.link;

        modalImage.src = image;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalTech.textContent = tech;
        modalLink.href = link;

        // Убираем hidden и добавляем классы для анимации появления
        projectModal.classList.remove('hidden');
        setTimeout(() => {
            projectModal.classList.add('modal-active');
            projectModal.querySelector('.bg-slate-800').classList.add('modal-content');
        }, 10);

        // Запретить прокрутку страницы
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    projectModal.classList.add('modal-closing');
    projectModal.querySelector('.bg-slate-800').classList.remove('modal-content');
    setTimeout(() => {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('modal-active', 'modal-closing');
        document.body.style.overflow = ''; // Разрешить прокрутку страницы
    }, 300); // Соответствует duration-300 в Tailwind
}

closeModalBtn.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его
projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
        closeModal();
    }
}); 