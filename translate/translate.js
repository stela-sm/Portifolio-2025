document.addEventListener("DOMContentLoaded", function () {
    const pt = document.getElementById("pt");
    const en = document.getElementById("en");

    let ptDicionario = {};
    let enDicionario = {};

    // Carrega os arquivos JSON
    fetch("./pt.json")
        .then(res => res.json())
        .then(data => ptDicionario = data)
        .catch(err => console.error("Erro ao carregar pt.json:", err));

    fetch("./en.json")
        .then(res => res.json())
        .then(data => enDicionario = data)
        .catch(err => console.error("Erro ao carregar en.json:", err));

    // Função de tradução
    function traduzir(dicionario) {
        for (const id in dicionario) {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = dicionario[id];
            }
        }
    }

    // Clique para português
    pt.addEventListener("click", () => {
        pt.classList.add("active");
        en.classList.remove("active");

        traduzir(ptDicionario);
    });

    // Clique para inglês
    en.addEventListener("click", () => {
        en.classList.add("active");
        pt.classList.remove("active");

        traduzir(enDicionario);
    });
});
