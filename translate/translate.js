document.addEventListener("DOMContentLoaded", function () {

    const pt = document.getElementById("pt");
    const en = document.getElementById("en");

    const ptDicionario = {
        "title": "Olá"
    };

    const enDicionario = {
        "title": "Hello"
    };

    function traduzir(dicionario) {
        for (const id in dicionario) {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = dicionario[id];
            }
        }
    }

    pt.addEventListener("click", () => {
        pt.classList.add("active");
        en.classList.remove("active");

        traduzir(ptDicionario);
    });

    en.addEventListener("click", () => {
        en.classList.add("active");
        pt.classList.remove("active");

        traduzir(enDicionario);
    });

});
