function toggleMenu() {
    const menuPanel = document.querySelector('.menu-panel');
    menuPanel.style.display = menuPanel.style.display === 'block' ? 'none' : 'block';
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide'); // Получаем все слайды
let intervalId; // Идентификатор интервала для автоматической прокрутки

// Функция для отображения текущего слайда
function showSlide(n) {
    // Скрываем все слайды
    slides.forEach(slide => slide.style.display = 'none');
    // Проверяем, что индекс слайда находится в пределах массива
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    // Показываем текущий слайд
    slides[slideIndex].style.display = 'block';
}

// Функция для перехода к следующему слайду
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Функция для запуска автоматической прокрутки слайдов
function startAutoScroll() {
    intervalId = setInterval(nextSlide, 3000); // Прокручиваем каждые 3 секунды (3000 мс)
}

// Функция для остановки автоматической прокрутки слайдов
function stopAutoScroll() {
    clearInterval(intervalId);
}

// Показываем первый слайд при загрузке страницы
showSlide(slideIndex);

// Запускаем автоматическую прокрутку слайдов при загрузке страницы
startAutoScroll();



