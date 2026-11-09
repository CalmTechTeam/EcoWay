// intro animada ==============================================================
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


// animação scroll lateral desafios ============================================
const elemento = document.querySelector('#desafios');

const desafio1 = document.getElementById('desafio1');
const desafio2 = document.getElementById('desafio2');
const desafio3 = document.getElementById('desafio3');
const desafio4 = document.getElementById('desafio4');

function verificarScroll() {
  if (!elemento) return;

  const rect = elemento.getBoundingClientRect();

  const alturaViewport = window.innerHeight;
  const percorrido = alturaViewport - rect.top;
  const total = alturaViewport + rect.height;

  const porcentagem = Math.max(
    0,
    Math.min(1, percorrido / total)
  );

  if (porcentagem >= 0.1) {
    desafio1?.classList.add('visivel');
  }

  if (porcentagem >= 0.25) {
    desafio2?.classList.add('visivel');
  }

  if (porcentagem >= 0.45) {
    desafio3?.classList.add('visivel');
  }

  if (porcentagem >= 0.65) {
    desafio4?.classList.add('visivel');
  }
}

window.addEventListener('scroll', verificarScroll, {
  passive: true
});

window.addEventListener('resize', verificarScroll);

verificarScroll(); import { slides } from "./slides.js";
import { monitoramentoMapa } from "./monitoramento.js";
import { quiz } from "./quiz.js";

slides();
monitoramentoMapa();
quiz();