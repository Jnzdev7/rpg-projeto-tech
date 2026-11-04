// Lista de inimigos do jogo. Cada um tem nome, vida, ataque (dano máximo) e
// uma chance de acertar o herói (de 0 a 1).

function criarInimigo(tipo) {
  const modelos = {
    aranha: { nome: "Aranha gigante", vida: 4, ataque: 2, chanceAcerto: 0.5 },
    lobo:   { nome: "Lobo da floresta", vida: 6, ataque: 3, chanceAcerto: 0.6 },
  };
  const modelo = modelos[tipo];
  if (!modelo) {
    throw new Error("Inimigo desconhecido: " + tipo);
  }
  // devolve uma cópia, para cada combate ter o seu inimigo com vida própria
  return { ...modelo };
}

module.exports = { criarInimigo };
