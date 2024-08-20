const header = document.querySelector('header');

function checkScroll() {
  if (window.scrollY > 70) {
    header.classList.add('sticky');
    header.classList.add('background-black-navbar')
  } else {
    header.classList.remove('sticky');
    header.classList.remove('background-black-navbar')
  }
}

window.addEventListener('scroll', checkScroll);
