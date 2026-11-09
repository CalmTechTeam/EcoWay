export function quiz() {
    const carrosselContainer = document.querySelector(".carrosselQuiz");
    const perguntas = document.querySelectorAll(".pergunta");

    const btnAnterior = document.querySelector("#btnAnteriorQuiz");
    const btnProximo = document.querySelector("#btnProximoQuiz");

    const nav = document.querySelector(".navQuiz");
    const navQuiz = nav.querySelectorAll("li")

    const itemProgresso = document.querySelectorAll(".especificoItem");
    const porcentagem = document.querySelectorAll(".valorProgresso");

    const geralProgresso = document.querySelector(".progressoTexto");

    const resultados = document.querySelector(".resultados");

    const opcoes = document.querySelectorAll(".opcaoQuiz");

    let arrayPontos = [];

    let soma = 0;

    let slideAtual = 0;

    navQuiz.forEach((li, index) => {
        if (index == 0) {
            li.classList.add("atual");
        } else {
            li.classList.remove("atual");
        };
    });

    btnProximo.addEventListener('click', () => {
        let inputSelecionado = perguntas[slideAtual].querySelector('input:checked');

        if (!inputSelecionado) {
            alert("Selecione uma opção!");
            return;
        };

        if (btnProximo.textContent == "ENVIAR") {
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

        if (slideAtual == perguntas.length - 1) {
            return;
        };

        slideAtual++;

        if (slideAtual >= perguntas.length) {
            slideAtual = 0;
        };

        carrosselContainer.style.transform = `translateX(-${(slideAtual * 100)}%)`;
        if (slideAtual == 0) {
            navQuiz.forEach((li, index) => {
                if (index == 0) {
                    li.classList.add("atual");
                } else {
                    li.classList.remove("atual");
                };
            });
            btnProximo.textContent = "PRÓXIMO";        
        }
        else if (slideAtual == 1) {
            navQuiz.forEach((li, index) => {
                if (index == 1) {
                    li.classList.add("atual");
                    nav.children[0].classList.add("feito")
                } else {
                    li.classList.remove("atual");
                };
            });
            btnProximo.textContent = "PRÓXIMO";      
        }
        else if (slideAtual == 2) {
            navQuiz.forEach((li, index) => {
                if (index == 2) {
                    li.classList.add("atual");
                    nav.children[1].classList.add("feito")
                } else {
                    li.classList.remove("atual");
                };
            });
            btnProximo.textContent = "PRÓXIMO";        
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
            btnProximo.textContent = "ENVIAR";
        };

    });

    btnAnterior.addEventListener('click', () => {
        slideAtual--;

        if (slideAtual < 0) {
            slideAtual = perguntas.length - 1;
        };

        if (slideAtual == 0) {
            navQuiz.forEach((li, index) => {
                if (index == 0) {
                    li.classList.add("atual");
                } else {
                    li.classList.remove("atual");
                };
            });
            btnProximo.textContent = "PRÓXIMO";        
        }
        else if (slideAtual == 1) {
            navQuiz.forEach((li, index) => {
                if (index == 1) {
                    li.classList.add("atual");
                } else {
                    li.classList.remove("atual");
                };
            });   
            btnProximo.textContent = "PRÓXIMO";        
        }
        else if (slideAtual == 2) {
            navQuiz.forEach((li, index) => {
                if (index == 2) {
                    li.classList.add("atual");
                } else {
                    li.classList.remove("atual");
                };
            }); 
            btnProximo.textContent = "PRÓXIMO";        
        }
        else {
            navQuiz.forEach((li, index) => {
                if (index == 3) {
                    li.classList.add("atual");
                } else {
                    li.classList.remove("atual");
                };
            });
            btnProximo.textContent = "ENVIAR";        
        };

        carrosselContainer.style.transform = `translateX(-${(slideAtual * 100)}%)`;
    });

    opcoes.forEach((opcao) => {
        opcao.addEventListener("click", () => {
            const input = opcao.querySelector("input");
            input.checked = true;
        });
    });

};