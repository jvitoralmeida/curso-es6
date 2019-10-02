const arr = [1,2,3,4,5];


//Quando uma função é anonima(não é declarada em nenhum lugar), é o melhor lugar para se usar arrow function
//Quando a função só recebe 1 parametro, não precisa colocar o parametro entre parenteses
//Quando a função tem um simples retorno não é necessário o uso das chaves e do return

//Exemplo sem arrow function
const newArr = arr.map(function(item){
    return item * 2;
})

//Exemplo com arrow function
const newArr = arr.map(item => item * 2);

//Declaração de função com arrow function
const Teste1 = () => {
    return 'Teste';
}
//Retorno de um array em um arrow function, sem uso da keyword return
const Teste2 = () => [1,2,3];

//Retorno de um objeto com arrow function, sem o uso da keyword return
const Teste3 = () => ({nome:'João Vitor'});