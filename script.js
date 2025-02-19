const header = document.querySelector('header');
const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');

menuButton.addEventListener('click', () => {
  header.classList.toggle('show-mobile-menu')
});

closeButton.addEventListener('click', () => {
  menuButton.click();
});