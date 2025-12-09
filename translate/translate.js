document.addEventListener("DOMContentLoaded", () => {
  const pt = document.getElementById("pt");
  const en = document.getElementById("en");

  let ptDicionario = {};
  let enDicionario = {};

  // Carrega JSON genérico
  function carregarDicionario(caminho, destino) {
    return fetch(caminho)
      .then((res) => res.json())
      .then((data) => Object.assign(destino, data))
      .catch((err) => console.error(`Erro ao carregar ${caminho}:`, err));
  }

  // Anima e troca texto
  function fadeSwap(element, newText) {
    element.classList.add("fade-text");

    element.classList.add("hidden");

    setTimeout(() => {
      element.textContent = newText;
      element.classList.remove("hidden");
    }, 300);
  }

  // Tradução com fade
  function traduzir(dicionario) {
    for (const id in dicionario) {
      const el = document.getElementById(id);
      if (el) fadeSwap(el, dicionario[id]);
    }
  }

  // Alterna classe de seleção
  function toggleLanguageSelection() {
    pt.classList.toggle("disabled");
    en.classList.toggle("disabled");
  }

  // Eventos
  pt.addEventListener("click", () => {
    toggleLanguageSelection();
    traduzir(ptDicionario);
  });

  en.addEventListener("click", () => {
    toggleLanguageSelection();
    traduzir(enDicionario);
  });

  // Carrega os JSONs
  carregarDicionario("./translate/pt.json", ptDicionario);
  carregarDicionario("./translate/en.json", enDicionario);
});
