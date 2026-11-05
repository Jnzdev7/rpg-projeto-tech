const prompt = require("prompt-sync")({ sigint: true });

const CHANCE_ACERTO_HEROI = 0.7;

function combate(heroi, inimigo) {
  let resultado = ""; // Fica vazio até o combate acabar

  console.log("");
  console.log("[COMBATE] " + inimigo.nome + " aparece!");

  while (resultado === "") {
    console.log("");
    console.log(heroi.nome + ": " + heroi.vida + " de vida | " + inimigo.nome + ": " + inimigo.vida + " de vida");
    console.log("1 - Atacar\n2 - Fugir");
    
    const escolha = prompt("> ");

    if (escolha === "1") {
      // Turno do Herói (Chance fixa de acerto)
      if (Math.random() < CHANCE_ACERTO_HEROI) {
        const danoHeroi = heroi.dano || 2; // Dano padrão ou do herói
        inimigo.vida -= danoHeroi;
        console.log("Você acerta! " + inimigo.nome + " perde " + danoHeroi + " de vida.");
      } else {
        console.log("Você erra o golpe.");
      }

      // Turno do Inimigo (se ainda estiver vivo)
      if (inimigo.vida > 0) {
        const danoInimigo = inimigo.ataque || 2;
        heroi.vida -= danoInimigo;
        console.log(inimigo.nome + " ataca! Você perde " + danoInimigo + " de vida.");
      }
    } else if (escolha === "2") {
      console.log("Você foge do combate e volta para a Vila.");
      resultado = "fuga";
    } else {
      console.log("Valor inválido.");
    }

    // Condições de término
    if (heroi.vida <= 0) {
      resultado = "derrota";
    } else if (inimigo.vida <= 0) {
      resultado = "vitoria";
    }
  }

  if (resultado === "derrota") {
    console.log("Você foi derrotado por " + inimigo.nome + ". Game Over!");
  } else if (resultado === "vitoria") {
    console.log("Você derrotou " + inimigo.nome + "!");
  }

  return resultado;
}

module.exports = combate;