// regras.js

function calcularSorte(testeAtivo) {
  let sorte = Math.random();
  if (testeAtivo) {
    sorte = 0.2; // Sempre dá evento ruim no teste
  }
  return sorte;
}

module.exports = {
  calcularSorte
};