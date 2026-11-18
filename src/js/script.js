// intro animada ==============================================================
const intro = document.getElementById('intro');
const introContainer = document.getElementById('introContainer');
const cursorClick = document.getElementById('cliqueAqui');
const plantaEsquerda = document.querySelector('.ladoEsquerdo');
const plantaDireita = document.querySelector('.ladoDireito');
const folhaE1 = document.getElementById('folhaE1');
const folhaE2 = document.getElementById('folhaE2');
const folhaD = document.getElementById('folhaD');

function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage.getItem("intro"))
  localStorage.getItem("intro") ? showIntro(true) : showIntro(false);
});

function showIntro(mostrarIntro) {
  if (mostrarIntro == false) {
    document.body.style.overflow = 'hidden';
    cursorClick.style.display = 'none';

    setTimeout(() => {
      intro.classList.remove('preventClicks');
      cursorClick.style.display = 'block';
    }, 2000);
  }
  else {
    intro.style.display = "none"
  }
}

// mostra intro novamente
document.getElementById("showIntro").addEventListener("click", () => {
  localStorage.removeItem("intro");
  location.reload();
})

intro.addEventListener('click', () => {
  cursorClick.style.display = 'none';
  plantaEsquerda.classList.add('fade-out-left');
  plantaDireita.classList.add('fade-out-right');
  folhaE1.classList.add('fadeIn');
  folhaE2.classList.add('fadeIn');
  folhaD.classList.add('fadeIn');
  intro.classList.add('hidden');

  introContainer.classList.remove('bgBlack');
  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = 'auto';
  }, 3000);
  localStorage.setItem("intro", true);
});

// menu mobile ================================================================
const botaoMenu = document.querySelector('.menuMobile');
const menuPrincipal = document.querySelector('#menuPrincipal');
const botaoFecharMenu = document.querySelector('.fechaMenu button');
const menuOverlay = document.querySelector('.menuOverlay');

function alternarMenu(abrir) {
  if (!isMobile() || !botaoMenu || !menuPrincipal || !menuOverlay) return;

  menuPrincipal.classList.toggle('menuAberto', abrir);
  menuOverlay.classList.toggle('ativo', abrir);
  document.body.classList.toggle('menuAberto', abrir);
  botaoMenu.setAttribute('aria-expanded', String(abrir));

  if (abrir) {
    botaoFecharMenu?.focus();
  } else {
    botaoMenu.focus();
  }
}

botaoMenu?.addEventListener('click', () => alternarMenu(true));
botaoFecharMenu?.addEventListener('click', () => alternarMenu(false));
menuOverlay?.addEventListener('click', () => alternarMenu(false));

menuPrincipal?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => alternarMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuPrincipal?.classList.contains('menuAberto')) {
    alternarMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (!isMobile() && menuPrincipal?.classList.contains('menuAberto')) {
    menuPrincipal.classList.remove('menuAberto');
    menuOverlay?.classList.remove('ativo');
    document.body.classList.remove('menuAberto');
    botaoMenu?.setAttribute('aria-expanded', 'false');
  }
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

verificarScroll();

window.addEventListener('scroll', verificarScroll, {
  passive: true
});

window.addEventListener('resize', verificarScroll);


// Slides =====================================================================

const slideContainer = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const publico = document.querySelector(".publico");

const btnAnterior = document.querySelectorAll(".botaoNav img:nth-of-type(1)");
const btnProximo = document.querySelectorAll(".botaoNav img:nth-of-type(2)");

let slideAtual = 0;

publico.style.background = "linear-gradient(-135deg,#304D17, #031312)";


btnProximo.forEach((btn) => {
  btn.addEventListener('click', () => {
    slideAtual++;

    if (slideAtual >= slide.length) {
      slideAtual = 0;
    };

    slideContainer.style.transform = `translateX(-${(slideAtual * 100)}%)`;

    if (slideAtual == 1) {
      publico.style.background = "linear-gradient(-135deg,#7C1980, #031312)";
    }
    else if (slideAtual == 2) {
      publico.style.background = "linear-gradient(-135deg,#65B236, #031312)";
    }
    else if (slideAtual == 3) {
      publico.style.background = "linear-gradient(-135deg,#9747FF, #031312)";
    }
    else {
      publico.style.background = "linear-gradient(-135deg,#304D17, #031312)";
    };
  });
})

btnAnterior.forEach((btn) => {
  btn.addEventListener('click', () => {
    slideAtual--;

    if (slideAtual < 0) {
      slideAtual = slide.length - 1;
    };

    slideContainer.style.transform = `translateX(-${(slideAtual * 100)}%)`;

    if (slideAtual == 1) {
      publico.style.background = "linear-gradient(-135deg,#7C1980, #031312)";
    }
    else if (slideAtual == 2) {
      publico.style.background = "linear-gradient(-135deg,#65B236, #031312)";
    }
    else if (slideAtual == 3) {
      publico.style.background = "linear-gradient(-135deg,#9747FF, #031312)";
    }
    else {
      publico.style.background = "linear-gradient(-135deg,#304D17, #031312)";
    };
  });
})

// mapa de monitoramento ===========================================================================

const select = document.querySelector(".formItem select");
const btn = document.querySelector("#btnMapa");
const monitoramentoContainer = document.querySelector(".monitoramentoMapa");
const imgs = document.querySelectorAll(".mapaImg img");
const fecharAviso = document.querySelector(".fecharAviso");
const fecharAvisoDiv = document.querySelector("#conteudoAviso");
const avisoContainer = document.querySelector("#aviso");

select.addEventListener("change", () => {
  const opcaoSelecionada = select.querySelector("option:checked");

  if (opcaoSelecionada.value.trim() !== "") {
    btn.style.background = "#9747FF";
  };
});

btn.addEventListener("click", (event) => {
  const opcaoSelecionada = select.querySelector("option:checked");

  if (opcaoSelecionada.textContent.toUpperCase() != "SELECIONE") {
    event.preventDefault();
    btn.style.background = "#9747FF";
    monitoramentoContainer.style.display = "block";
    imgs.forEach((img) => {
      if (opcaoSelecionada.textContent.toUpperCase() == img.alt.toUpperCase()) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      };
    });
  };
});
fecharAviso.addEventListener("click", () => {
  if (fecharAviso.textContent != ">") {
    fecharAvisoDiv.style.display = "none";
    fecharAviso.textContent = ">";
    avisoContainer.style.background = "transparent";
    avisoContainer.style.boxShadow = "none";
  }
  else {
    fecharAvisoDiv.style.display = "block";
    fecharAviso.textContent = "X";
    avisoContainer.style.background = "#081B1A";
    avisoContainer.style.boxShadow = "box-shadow: 0 0 3px rgba(0,0,0,0.3)";
  };
});


// Cidadão - Formulários ============================================================================

const formDenuncia = document.getElementById("formDenuncia");
const formAjuda = document.getElementById("formAjuda");
const btShowForm = document.querySelectorAll(".showForm");
const btnDenuncia = document.querySelector("#enviarDenuncia");
const btnAjuda = document.querySelector("#enviarAjuda");

btShowForm.forEach(element => {
  element.addEventListener('click', () => {
    element.id == "showFormDenuncia" ? formDenuncia.classList.add("mostrarForm") : formAjuda.classList.add("mostrarForm");
  })
});

btnAjuda.addEventListener('click', (event) => {
  const inputsAjuda = formAjuda.querySelectorAll('input[type="text"]')
  let todosPreenchidos = true;

  inputsAjuda.forEach((input) => {
    if (input.value.trim() == "") {
      todosPreenchidos = false;
    }
  });

  if (todosPreenchidos) {
    event.preventDefault();
  }
});

btnDenuncia.addEventListener('click', (event) => {
  const inputsDenuncia = formDenuncia.querySelectorAll('input[type="text"]')
  let todosPreenchidos = true;

  inputsDenuncia.forEach((input) => {
    if (input.value.trim() == "") {
      todosPreenchidos = false;
    }
  });

  if (todosPreenchidos) {
    event.preventDefault();
  }
});

// Quiz ===============================================================================================
const carrosselContainer = document.querySelector(".carrosselQuiz");
const perguntas = document.querySelectorAll(".pergunta");

const btnAnteriorQz = document.querySelector("#btnAnteriorQuiz");
const btnProximoQz = document.querySelector("#btnProximoQuiz");

const nav = document.querySelector(".navQuiz");
const navQuiz = nav.querySelectorAll("li")

const itemProgresso = document.querySelectorAll(".especificoItem");
const porcentagem = document.querySelectorAll(".valorProgresso");

const geralProgresso = document.querySelector(".progressoTexto");

const resultados = document.querySelector(".resultados");

const opcoes = document.querySelectorAll(".opcaoQuiz");

let arrayPontos = [];

let soma = 0;

let slideAtualQz = 0;

navQuiz.forEach((li, index) => {
  if (index == 0) {
    li.classList.add("atual");
  } else {
    li.classList.remove("atual");
  };
});

btnProximoQz.addEventListener('click', () => {
  let inputSelecionado = perguntas[slideAtualQz].querySelector('input:checked');
  const inputsSelecionadosLista = document.querySelectorAll(".carrosselQuiz input:checked");

  if (!inputSelecionado) {
    alert("Selecione uma opção!");
    return;
  };

  if (btnProximoQz.textContent == "ENVIAR") {
    if (inputsSelecionadosLista.length < 4) {
      alert("Selecione todas as opções!");
      return;
    }
    else {
      nav.children[3].classList.add("feito")
      const inputsSelecionadosLista = document.querySelectorAll('.pergunta input:checked');

      arrayPontos = [];
      soma = 0;

      inputsSelecionadosLista.forEach((input) => {
        arrayPontos.push(+input.value);
      });

      itemProgresso.forEach((item, index) => {
        item.style.setProperty("--progresso", `${arrayPontos[index] * 10}%`);
        porcentagem[index].textContent = `${(arrayPontos[index]) * 10}%`;
      });

      arrayPontos.forEach((ponto) => {
        soma = soma + ponto * 10;
      });

      soma = (soma / arrayPontos.length).toFixed(1);
      geralProgresso.innerHTML = `${soma.replace(".", ",")} %`

      resultados.style.display = "block";

      return;
    };
  };

  if (slideAtualQz == perguntas.length - 1) {
    return;
  };

  slideAtualQz++;

  if (slideAtualQz >= perguntas.length) {
    slideAtualQz = 0;
  };

  carrosselContainer.style.transform = `translateX(-${(slideAtualQz * 100)}%)`;
  if (slideAtualQz == 0) {
    navQuiz.forEach((li, index) => {
      if (index == 0) {
        li.classList.add("atual");
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else if (slideAtualQz == 1) {
    navQuiz.forEach((li, index) => {
      if (index == 1) {
        li.classList.add("atual");
        nav.children[0].classList.add("feito")
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else if (slideAtualQz == 2) {
    navQuiz.forEach((li, index) => {
      if (index == 2) {
        li.classList.add("atual");
        nav.children[1].classList.add("feito")
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else {
    navQuiz.forEach((li, index) => {
      if (index == 3) {
        li.classList.add("atual");
        nav.children[2].classList.add("feito")
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "ENVIAR";
  };

});

btnAnteriorQz.addEventListener('click', () => {
  let inputSelecionado = perguntas[slideAtualQz].querySelector('input:checked');

  if (!inputSelecionado) {
    alert("Selecione uma opção!");
    return;
  };

  slideAtualQz--;

  if (slideAtualQz < 0) {
    slideAtualQz = perguntas.length - 1;
  };

  if (slideAtualQz == 0) {
    navQuiz.forEach((li, index) => {
      if (index == 0) {
        li.classList.add("atual");
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else if (slideAtualQz == 1) {
    navQuiz.forEach((li, index) => {
      if (index == 1) {
        li.classList.add("atual");
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else if (slideAtualQz == 2) {
    navQuiz.forEach((li, index) => {
      if (index == 2) {
        li.classList.add("atual");
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "PRÓXIMO";
  }
  else {
    navQuiz.forEach((li, index) => {
      if (index == 3) {
        li.classList.add("atual");
      } else {
        li.classList.remove("atual");
      };
    });
    btnProximoQz.textContent = "ENVIAR";
  };

  carrosselContainer.style.transform = `translateX(-${(slideAtualQz * 100)}%)`;
});

opcoes.forEach((opcao) => {
  opcao.addEventListener("click", () => {
    const input = opcao.querySelector("input");
    input.checked = true;
  });
});
