// Sistema de combate por turnos.
// Uso: const venceu = combate(heroi, criarInimigo("aranha"));
// Retorna true se o herói venceu, false se o herói caiu ou fugiu.
const prompt = require("prompt-sync")();
const sorte = require("./sorte");

const DANO_HEROI = 2;           // dano que o herói causa quando acerta
const CHANCE_ACERTO_HEROI = 0.7;

function combate(heroi, inimigo) {
  console.log("");
  console.log("[COMBATE] " + inimigo.nome + " aparece! (vida " + inimigo.vida + ")");

  while (heroi.vida > 0 && inimigo.vida > 0) {
    console.log("");
    console.log(heroi.nome + ": " + heroi.vida + " de vida | " + inimigo.nome + ": " + inimigo.vida + " de vida");
    console.log("1 - atacar   2 - fugir");
    const escolha = prompt("> ");

    if (escolha === "1") {
      // turno do herói
      if (sorte(CHANCE_ACERTO_HEROI)) {
        inimigo.vida = inimigo.vida - DANO_HEROI;
        console.log("Você acerta! " + inimigo.nome + " perde " + DANO_HEROI + " de vida.");
      } else {
        console.log("Você erra o golpe.");
      }

      // turno do inimigo (só se ainda estiver de pé)
      if (inimigo.vida > 0) {
        if (sorte(inimigo.chanceAcerto)) {
          heroi.vida = heroi.vida - inimigo.ataque;
          console.log(inimigo.nome + " te acerta! Você perde " + inimigo.ataque + " de vida.");
        } else {
          console.log(inimigo.nome + " erra o ataque.");
        }
      }
    } else if (escolha === "2") {
      console.log("Você foge do combate.");
      return false;
    } else {
      console.log("Valor inválido.");
    }
  }

  if (heroi.vida <= 0) {
    console.log("Você foi derrotado por " + inimigo.nome + ".");
    return false;
  }

  console.log("Você derrotou " + inimigo.nome + "!");
  return true;
}

module.exports = combate;
