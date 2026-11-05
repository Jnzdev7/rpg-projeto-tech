const prompt = require("prompt-sync")();
const { temItem, adicionarItem} = require("../sistemas/inventario");

function taverna(heroi) {
    console.log("");
    console.log("[TAVERNA] Você entra em uma taverna muito animada.");
    console.log("1 - voltar para a vila   2 - Descansar (recupera 3 de vida)");
    if(!temItem(heroi, "espada lendaria")){
    console.log("3 - Conversar com o velho sábio");
}
    let escolha = prompt("> ");
    if (escolha === "1") {
        return "vila";
    } else if (escolha === "2" && heroi.vida < 10) {
        heroi.vida = Math.min(heroi.vida + 3, heroi.vidaMaxima);
        console.log("Você se sente melhor após descansar " + heroi.vida);
    } else if (escolha === "3" && !temItem(heroi, "espada lendaria")) {
        console.log("O velho sábio ta faz uma proposta: acerte minha charada e te darei algo muito valioso:");
        console.log("Não tenho pernas, mas corro sem parar.\nNão tenho mãos, mas posso tudo levar.\nSou amigo dos pacientes e inimigo dos apressados.\nO que sou?");
        console.log("1 -O vento   2 - O rio   3 - O tempo");
        let escolha = prompt("> ");
        if(escolha === "1" || escolha === "2"){
            console.log("Te falta sabedoria, busque mais conhecimento e depois volte aqui.");
        }else if(escolha === "3"){
        console.log("Muito bem, você provou ser digno deste tesouro.")
        adicionarItem(heroi, "espada lendaria");
        console.log("Inventário: " + heroi.inventario);
    }}
    return "taverna";
}

module.exports = taverna;
