const usuario = {
    nome: 'João Vitor',
    idade: 21,
    endereco: {
        cidade: 'Santos',
        estado: 'SP'
    }
};

//Extraindo os campos nome, idade e cidade do objeto usuário com o conceito de desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//A desestruturação já é feita dentro das chaves, extraindo os campos nome e idade do objeto usuario que será passado
function mostraDados({ nome, idade }) {
    console.log(nome, idade);
}

mostraDados(usuario);