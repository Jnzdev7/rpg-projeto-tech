// Lista de inimigos do jogo. Cada um tem nome, vida, ataque e chance de acertar (de 0 a 1).

function criarInimigo(tipo) {
  const modelos = {
    // Inimigo comum da Floresta
    anao:   { nome: "Anão raivoso", vida: 8, ataque: 3, chanceAcerto: 0.3 },

    // Bosses da Masmorra (escolha do caminho)
    lula:       { nome: "Lula", vida: 12, ataque: 4, chanceAcerto: 0.7 },
    bolsonaro:  { nome: "Bolsonaro", vida: 12, ataque: 4, chanceAcerto: 0.7 }
  };

  const modelo = modelos[tipo];
  
  if (!modelo) {
    throw new Error("Inimigo desconhecido: " + tipo);
  }

  // Devolve uma cópia, para cada combate ter o seu inimigo com vida própria
  return { ...modelo };
}

module.exports =  criarInimigo 