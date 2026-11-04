// A trilha do farol · jogo de demonstração do Jovem Tech (E15)
// Tudo aqui usa o que vocês já viram: variáveis, prompt, if / else, while e vetor.
// Só uma coisa é nova: Math.random(), que sorteia um número entre 0 e 1.
const prompt = require("prompt-sync")();
const heroi = require("./heroi");
const { aplicarVeneno } = require("./sistemas/veneno");
const mapa = require("./regioes/mapa");

// ===== CONTROLE DO JOGO =====
let local = "vila";        // onde o herói está agora
let jogando = true;        // o jogo continua enquanto for true

// ===== HERÓI =====
heroi.nome = prompt("Qual é o nome do seu herói? ");

console.log("");
console.log(heroi.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {
  // a cada passo, o veneno tira 1 de vida
  aplicarVeneno(heroi);
  if (heroi.vida <= 0) {
    console.log("Você caiu no caminho. Fim de jogo.");
    jogando = false;
  }

  // roda a região onde o herói está e descobre para onde ele vai depois
  if (local === "fim") {
    jogando = false;
  } else if (mapa[local]) {
    local = mapa[local](heroi);
    if (local === "fim") {
      jogando = false;
    }
  }
}
