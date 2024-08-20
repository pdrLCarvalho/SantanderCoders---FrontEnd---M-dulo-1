const hamburguerButton = document.querySelector('#hamburguer-button');

// Função para desativar o menu
const deactivateMenu = () => {
  const menu = document.querySelector('#menu');
  menu.classList.remove('mobile-menu-active');
};

// Ativa o menu quando o botão for clicado
hamburguerButton.addEventListener('click', () => {
  const menu = document.querySelector('#menu');

  menu.classList.toggle('mobile-menu-active');
});

// Desativa o menu quando um item do menu for clicado
const navItems = document.querySelectorAll('.menu-item-nav');
navItems.forEach((item) => {
  item.addEventListener('click', deactivateMenu);
});

// Desativa o menu quando ocorre um clique fora do menu
document.addEventListener('click', (event) => {
  const menu = document.querySelector('#menu');
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnHamburguerButton = hamburguerButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburguerButton) {
    deactivateMenu();
  }
});
