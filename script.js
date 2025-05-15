document.getElementById('animated-button').addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем стандартный переход

  const link = this.getAttribute('href');
  const overlayText = document.getElementById('overlay-text');

  // Меняем фон
  document.body.style.backgroundColor = '#2AABEE'; // Цвет можно любой

  // Показываем надпись
  overlayText.classList.add('active');

  // Переход через 2 секунды
  setTimeout(() => {
    window.location.href = link;
  }, 2000);
});