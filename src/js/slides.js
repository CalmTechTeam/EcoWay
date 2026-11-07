export function slides() {
    const slideContainer = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const publico = document.querySelector(".publico");

    const btnAnterior = document.querySelector(".botaoNav img:nth-of-type(1)");
    const btnProximo = document.querySelector(".botaoNav img:nth-of-type(2)");
    const btnProximoSecundario = document.querySelectorAll(".slide button");

    let slideAtual = 0;

    publico.style.background = "linear-gradient(-135deg,#304D17, #031312)";


    btnProximo.addEventListener('click', () => {
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

    btnProximoSecundario.forEach((btn) => {
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
    });

    btnAnterior.addEventListener('click', () => {
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
};