const prompt = require("prompt-sync")();
const { temItem } = require("../sistemas/inventario");

function masmorra(heroi) {
    console.log("");
    console.log("[MASMORRA] Sinto uma aura sinistra nessa masmorra, para que lado será que vou?");
    if (temItem(heroi, "Espada Eleitor Lendáriaa")) {
        console.log("1 - escolher lado esquerdo da masmorra  2 - escolher lado direito da masmorra  3 - voltar para a floresta");
    } else {
        console.log("Não conseguirei enfrentar essa masmorra sem uma espada.   3 - voltar para a floresta");
    }
    let escolha = prompt("> ");
    if (escolha === "1" && temItem(heroi, "Espada Eleitor Lendária")) {
        return "escolher lado esquerdo da masmorra";
    } else if (escolha === "2"){
        return "escolher lado direito da masmorra"
    } else if (escolha === "3") {
        return "floresta";
    }
    return "masmorra";
}

module.exports = masmorra;
