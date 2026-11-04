// Sistema de veneno: aplica o dano por passo e permite envenenar o herói.

// Chamado a cada passo do jogo: se o herói está envenenado, perde 1 de vida.
function aplicarVeneno(heroi) {
  if (heroi.veneno > 0) {
    heroi.vida = heroi.vida - 1;
    heroi.veneno = heroi.veneno - 1;
    console.log("O veneno arde. Vida: " + heroi.vida);
  }
}

// Deixa o herói envenenado por "passos" passos.
function envenenar(heroi, passos) {
  heroi.veneno = passos;
}

module.exports = { aplicarVeneno, envenenar };
