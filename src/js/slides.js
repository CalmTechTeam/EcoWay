export function slides() {
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

};