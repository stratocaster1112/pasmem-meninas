// const dados = `{
//     "nome": "Yan",
//     "idade": 17,
//     "cidade": "SP"
// } `

// console.log(typeof(dados));

// const obj = JSON.parse(dados);

// console.log(typeof(obj));

const pessoa = {
    nome: "Thiago",
    idade: 16,
    cidade: "Casasco/Cabasca"
};

const jsonString = JSON.stringify(pessoa);

console.log(typeof(jsonString));
