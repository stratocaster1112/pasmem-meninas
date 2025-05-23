const fs = require('fs');

function lerDados() {
    const dadosBrutos = fs.readFileSync('dados.json');
    const dados = JSON.parse(dadosBrutos);

    return console.log(dados);
}

lerDados();
