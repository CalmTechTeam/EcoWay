const intro = document.getElementById('intro');
const introContainer = document.getElementById('introContainer');
const plantaEsquerda = document.querySelector('.ladoEsquerdo');
const plantaDireita = document.querySelector('.ladoDireito');
const folhaE1 = document.getElementById('folhaE1');
const folhaE2 = document.getElementById('folhaE2');
const folhaD = document.getElementById('folhaD');

function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    intro.classList.remove('preventClicks');
  }, 2000);
});

intro.addEventListener('click', () => {
  plantaEsquerda.classList.add('fade-out-left');
  plantaDireita.classList.add('fade-out-right');
  folhaE1.classList.add('fadeIn');
  folhaE2.classList.add('fadeIn');
  folhaD.classList.add('fadeIn');

  introContainer.classList.remove('bgBlack');

});


