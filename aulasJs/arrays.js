const arr = [1,3,4,4,5,6,7,9];

// .map() basicamente atua como um forEach
const novoArray = arr.map(function(item){
    return item * 2;
});
// .map() também pode ser usado junto com o index
const novoArray = arr.map(function(item,index){
    return item * index;
});

// .reduce() consome todo um array informando o valor atual/total mais o proximo valor do array
const sum = arr.reduce(function(total,proximoValor){
    return total + proximoValor;
});
//Exemplo de funcionamento abaixo
//0
//1  = 1

//1
//3  = 4

// .filter() neste caso esta atribuindo valores dentro do novo array que atendam as condições abaixo(ser número par)
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

// .find() vai adicionar dentro dentro da variavel se o valor 4 estiver dentro do array, ou retornar undefinied se não encontrar
const find = arr.find(function(item){
    return item === 4;
});