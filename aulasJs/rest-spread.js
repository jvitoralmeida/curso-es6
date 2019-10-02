//REST
//...
//é usado para pegar o resto das propriedades

const usuario = {
    nome:'João Vitor',
    idade: 21,
    empresa:'BRQ'
};

//REST com objetos
const {nome, ...resto} = usuario;

//Saida
// nome = João Vitor
// resto = {
//     idade:21,
//     empresa:'BRQ'
// }

//REST com arrays
const arr = [1,2,3,4,5];

const [a,b,c,...resto] = arr;

//Saida
//a = 1
//b = 2
//c = 3
//d = [4,5]


//REST com parametros de functions
function soma(a,b,...params){
    return params;
}

console.log(soma(1,2,3,5,6,4,3,3));


//SPREAD
//replica os dados de um objeto/array em um outro objeto

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
//Saida arr3 = [1,2,3,4,5,6]

const usuario = {
    nome:'João Vitor',
    idade: 21,
    empresa: 'RocketSeat'
};

const novoUsuario = {...usuario, empresa:'BRQ'};
//Saida novoUsuario = {
//     nome:'João Vitor',
//     idade:21,
//     empresa:'BRQ'
// }