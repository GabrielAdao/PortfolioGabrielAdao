function mostrarDetalhes(botao) {
    const detalhes = botao.nextElementSibling;
    if (detalhes.style.display === "block") {
      detalhes.style.display = "none";
      botao.textContent = "Ver mais";
    } else {
      detalhes.style.display = "block";
      botao.textContent = "Ver menos";
    }
  }