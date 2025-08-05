const livros = require("./livros");
const vendas = require("./vendas");

// BUSCAR LIVRO POR ID
function encontrarLivroId(id) {
  for (const element of livros) {
    if (element.id === id) {
      return element
    }
  }
  return "Não existe livro com esse ID"
}

// BUSCAR LIVRO POR TÍTULO
function encontrarLivroNome(nome) {
  for (const element of livros) {
    if (element.titulo === nome) {
      return element
    }
  }
  return "Não existe livro com esse título"
}

// BUSCAR LIVRO POR PREÇO
function encontrarLivroPreco(preco) {
  for (const element of livros) {
    if (element.preço === preco) {
      return element
    }
  }
  return "Não existe livro por esse preço"
}

// BUSCAR UM LIVRO POR CATEGORIA
function encontrarLivroCategoria(categoria) {
  const livrosEncontrados = [];

  for (const element of livros) {
    if (element.categoria === categoria) {
      livrosEncontrados.push(element);
    }
  }

  if (livrosEncontrados.length === 0) {
    return "Não existe livro com essa categoria";
  }

  return livrosEncontrados;
}

// FAZER A FUNÇÃO DE ADICIONAR UM NOVO LIVRO
function adicionarLivro(livro) {
  // Verificando se livro é um objeto
  if (typeof livro !== 'object') {
    return "Não é possível cadastrar"
  }

  // Verificando se alguma das propriedades não existe
  if (!livro.id || !livro.titulo || !livro.preco || !livro.categoria) {
    return "Não é possível cadastrar"
  }

  // Verificando se frete é outra coisa a não ser true ou false
  if (livro.frete !== false && livro.frete !== true) {
    return "Não é possível cadastrar"
  }

  livros.push(livro);
}

// TASK: Fazer as funções de venda.

// BUSCAR VENDA POR ID
function encontrarVendaId(idVenda) {
  for (const venda of vendas) {
    if (venda.id === idVenda) {
      return venda;
    }
  }
  return "Não existe venda com esse ID";
}

// BUSCAR VENDA POR ID DO LIVRO
function encontrarVendaIdLivro(idLivro) {
  for (const venda of vendas) {
    if (venda.idLivro === idLivro) {
      return venda;
    }
  }
  return "Não existe livro com esse ID";
}

// BUSCAR VENDA POR DATA
function encontrarVendaData(dataVenda) {
  for (const venda of vendas) {
    if (venda.dataVenda === dataVenda) {
      return venda;
    }
  }
  return "Não existe venda nessa data"
}

// TASK: Fazer a função de adicionar uma nova venda.
function adicionarVenda(venda) {
// Verificando se a venda é um objeto
if (typeof venda !== 'object') {
  return "Não é possível cadastrar uma nova venda"
}

// Verificando se alguma das propriedades não existe
if (!venda.id || !venda.dataVenda || !venda.idLivro) {
  return "Não é possível cadastrar uma nova venda"
}
vendas.push(venda);
}

module.exports = {
  encontrarLivroId,
  encontrarLivroNome,
  encontrarLivroPreco,
  encontrarLivroCategoria,
  adicionarLivro,
  encontrarVendaId,
  encontrarVendaIdLivro,
  encontrarVendaData,
  adicionarVenda
}
