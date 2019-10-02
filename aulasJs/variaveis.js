//Declaração de variável ES6
//const
//let

//A constante não pode ter seu valor reatribuido, porém pode ser mutada 
const a = 1;
a = 2; //Não funciona


const pessoa = {
    nome:'João Vitor',
    idade: 21
}

//Conceito de mutação, isso funciona
pessoa.nome = 'Diego';

//let é variavel usada em escopos
function teste(x){
    let y = 4;

    if(x > 5){
        //o let aceita reatribuição
        let y = 6;
        console.log(x,y);
    }
}

console.log(teste(10));
