const prompt = require("prompt-sync")();
const { temItem, adicionarItem, removerItem } = require("../sistemas/inventario");

function poco(heroi) {
    console.log("");
    console.log("[POÇO] Um poço antigo. Não dá para ver o fundo.");
    console.log("1 - voltar para a vila   2 - beber água (recupera 3 de vida)");
    if (temItem(heroi, "moeda furada")) {
        console.log("3 - jogar a moeda furada no poço");
    }
    let escolha = prompt("> ");
    if (escolha === "1") {
        return "vila";
    } else if (escolha === "2" && heroi.vida < 10) {
        heroi.vida = Math.min(heroi.vida + 3, heroi.vidaMaxima);
        console.log("A água é gelada. Vida: " + heroi.vida);
    } else if (escolha === "3" && temItem(heroi, "moeda furada")) {
        console.log("A moeda cai sem fazer barulho. Uma corda sobe do fundo do poço, sozinha.");
        removerItem(heroi, "moeda furada");
        adicionarItem(heroi, "corda");
        console.log("Inventário: " + heroi.inventario);
    }
    return "poco";
}

module.exports = poco;
