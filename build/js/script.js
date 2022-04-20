const buttons = Array.from(document.querySelectorAll('.service__button--more'));
const descriptions = Array.from(document.querySelectorAll('.service__description'));
const navButton = document.querySelector('.header__menu-button');
const navList = document.querySelector('.header__nav');
const orders = document.querySelectorAll('.order');
const modal = document.querySelector('.modalFirst');
const modalWrapper = document.querySelector('.modal__wrapper');
const buttonClose = document.querySelector('.modal__close');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener ('click', function(evt) {
    if (buttons[i].classList.contains('closed')) {
      descriptions.map((item) => buttons[i].id === item.id && (item.classList.add('description_show'), buttons[i].textContent = 'Подробнее', buttons[i].classList.remove('closed')));
      return;
    }
    descriptions.map((item) => buttons[i].id === item.id && (item.classList.remove('description_show'), buttons[i].textContent = 'Скрыть', buttons[i].classList.add('closed')));
  });
}

const toggle = () => {
  navButton.classList.toggle('header__menu-button--closed');
  navList.classList.toggle('header__nav--opened');
}

const close = () => {
  navButton.classList.add('header__menu-button--closed');
  navList.classList.remove('header__nav--opened');
}

const toggleModal = () => {
  navButton.classList.toggle('header__menu-button--closed');
  navList.classList.toggle('header__nav--opened');
}

document.addEventListener('click', function(evt) {
  const target = evt.target;

  target === navButton ? toggle() : target !== navList ? close() : false;
});


for (let i = 0; i < orders.length; i++) {
      orders[i].addEventListener ('click', function(evt) {
        evt.preventDefault();
        modal.classList.add('modalFirst--open');
        document.body.style.overflow = 'hidden';
      });
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modal.classList.remove('modalFirst--open');
    document.body.style.overflow = 'visible';
  }
});

document.addEventListener( 'click', (evt) => {
  const target = evt.target;
	const withinBoundaries = evt.composedPath().includes(modalWrapper);

  if (target === buttonClose) {
		modal.classList.remove('modalFirst--open');
    document.body.style.overflow = 'visible';
    return;
	}
	if (!withinBoundaries && target.dataset.name !== "order") {
		modal.classList.remove('modalFirst--open');
    document.body.style.overflow = 'visible';
	}
})


