const buttons = Array.from(document.querySelectorAll('.service__button--more'));
const descriptions = Array.from(document.querySelectorAll('.service__description'));

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener ('click', function(evt) {
    if (buttons[i].classList.contains('closed')) {
      descriptions.map((item) => buttons[i].id === item.id && (item.classList.add('description_show'), buttons[i].textContent = 'Подробнее', buttons[i].classList.remove('closed')));
      return;
    }
    descriptions.map((item) => buttons[i].id === item.id && (item.classList.remove('description_show'), buttons[i].textContent = 'Скрыть', buttons[i].classList.add('closed')));
  });
}
