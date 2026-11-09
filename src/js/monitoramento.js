export function monitoramentoMapa() {
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
};