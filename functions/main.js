const {
  encontrarLivroId,
  encontrarLivroNome,
  encontrarLivroPreco,
  encontrarLivroCategoria,
  adicionarLivro,
  encontrarVendaId,
  encontrarVendaIdLivro,
  encontrarVendaData,
  adicionarVenda,
} = require("./");
const vendas = require("./vendas");

console.log(adicionarVenda({
  id: 6,
  dataVenda: "21/03/2028",
  idLivro: 8,
}))

console.log(vendas)