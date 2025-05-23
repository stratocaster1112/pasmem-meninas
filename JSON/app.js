const fs = require('fs');

function lerDados() {
    const dadosBrutos = fs.readFileSync('dados.json');
    const dados = JSON.parse(dadosBrutos);

    // return console.log(dados);
    return dados
}

lerDados();

function listarProdutos() {
    const produtos = lerDados();
    produtos.forEach(produto => {

        console.log(`
            Nome: ${produto.nome},
            Preço: ${produto.preco}`);
    });
}

listarProdutos();

function calcularValorEstoque() {
    const produtos = lerDados();
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade
    });
    console.log(`\nValor Total do Estoque: ${valorTotal.toFixed(2)}`)
}

calcularValorEstoque();
