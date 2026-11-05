//Vila, Floresta, Caverna, Taverna, Masmorra
const prompt = require("prompt-sync")();
const inimigo = require("../sistemas/inimigos");
const combate = require("../sistemas/combate");
const sorte = require("../sistemas/sorte");
const { envenenar } = require("../sistemas/veneno");  //tracar por "dano"(?) quando 
//mudar o veneno.js para dano.js
const anao = inimigo("anao")

function floresta(heroi) {
    console.log("");
    console.log("[FLORESTA] Você parece meio perdido. Cuidado, é um lugar desconhecido. ");
    if (sorte(0.4)) {  
        console.log("[FLORESTA] Você se deparou com um " + anao.nome + " Ele tem uma faca. Cuidado com os pés!");
        combate(heroi, anao); //substituir por "dano"(?)
    } else {
        console.log("[FLORESTA] Bicho sortudo! Não tinha nada de perigoso, dessa vez...  Melhor sair daqui antes que apareça alguma surpresa!");
    }
    console.log("1 - voltar para vila  ");
    let escolha = prompt("> ");
    if (escolha === "1") {
        return "vila";
    }
}

module.exports = floresta