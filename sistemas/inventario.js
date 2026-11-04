// Sistema de inventário: funções para mexer na mochila do herói.

function temItem(heroi, item) {
  return heroi.inventario.includes(item);
}

function adicionarItem(heroi, item) {
  heroi.inventario.push(item);
}

function removerItem(heroi, item) {
  const posicao = heroi.inventario.indexOf(item);
  if (posicao !== -1) {
    heroi.inventario.splice(posicao, 1);
  }
}

module.exports = { temItem, adicionarItem, removerItem };
