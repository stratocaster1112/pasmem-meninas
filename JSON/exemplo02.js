const lista = ` [ 

    {
        "nome": "Thiago",
        "idade": "16",
        "cidade": "SP"
    },

    {
        "nome": "Yan",
        "idade": "17",
        "cidade": "SP"
    },

    {
        "nome": "João Paulo Dragon",
        "idade": "??",
        "cidade": "SP"
    }

] `

const objLista = JSON.parse(lista);

objLista.forEach((pessoa)=> {

    console.log(`
        Nome: ${pessoa.nome},
        Idade: ${pessoa.idade},
        Cidade: ${pessoa.cidade}`
    );

});
