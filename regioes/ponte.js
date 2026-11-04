const prompt = require("prompt-sync")();
const { temItem } = require("../sistemas/inventario");

function ponte(heroi) {
    console.log("");
    console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");
    if (temItem(heroi, "corda")) {
        console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
    } else {
        console.log("Não tem como atravessar.   2 - voltar para a floresta");
    }
    let escolha = prompt("> ");
    if (escolha === "1" && temItem(heroi, "corda")) {
        return "farol";
    } else if (escolha === "2") {
        return "floresta";
    }
    return "ponte";
}

module.exports = ponte;
