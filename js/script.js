// script.js
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
  menu.classList.add('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
});
