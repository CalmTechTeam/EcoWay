export function monitoramentoMapa() {
    const select = document.querySelector(".formItem select");
    const btn = document.querySelector("#btnMapa");
    const monitoramentoContainer = document.querySelector(".monitoramentoMapa");
    const imgs = document.querySelectorAll(".mapaImg img")

    select.addEventListener("change", () => {
        const opcaoSelecionada = select.querySelector("option:checked");

        if (opcaoSelecionada.value.trim() !== "") {
            btn.style.background = "#9747FF";
        };
    });

    btn.addEventListener("click", (event) => {
        const opcaoSelecionada = select.querySelector("option:checked");

        if(opcaoSelecionada.textContent.toUpperCase() != "SELECIONE") {
            event.preventDefault();
            btn.style.background = "#9747FF";
            monitoramentoContainer.style.display = "block";
            imgs.forEach((img) => {
                if(opcaoSelecionada.textContent.toUpperCase() == img.alt.toUpperCase()) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                };
            });
        };
    });

}