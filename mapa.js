// mapa.js

const locais = {
  vila: {
    nome: "Vila dos Pescadores",
    descricao: "Um velho pescador te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'",
    opcoes: [
      { texto: "ir para a floresta", destino: "floresta" },
      { texto: "ir para o poço", destino: "poco" }
    ]
  },
  floresta: {
    nome: "Floresta Sombria",
    descricao: "Galhos fechados. Algo se mexe no chão.",
    opcoes: [
      { texto: "seguir para a ponte", destino: "ponte" },
      { texto: "voltar para a vila", destino: "vila" }
    ]
  },
  poco: {
    nome: "Poço Antigo",
    descricao: "Um poço antigo. Não dá para ver o fundo.",
    opcoes: [
      { texto: "voltar para a vila", destino: "vila" },
      { texto: "beber água (recupera 3 de vida)", acao: "beber_agua" },
      { texto: "jogar a moeda furada no poço", acao: "jogar_moeda", condicaoItem: "moeda furada" }
    ]
  },
  ponte: {
    nome: "Ponte Quebrada",
    descricao: "A ponte para o farol caiu. Do outro lado, o farol apagado.",
    opcoes: [
      { texto: "amarrar a corda e atravessar", destino: "farol", condicaoItem: "corda" },
      { texto: "voltar para a floresta", destino: "floresta" }
    ]
  },
  farol: {
    nome: "O Farol",
    descricao: "Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa."
  }
};

// Exportando o objeto para outros arquivos usarem
module.exports = locais;