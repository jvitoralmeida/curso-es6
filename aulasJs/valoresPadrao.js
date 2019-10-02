
//Função sem valor padrão
function soma(a,b){
    return a + b;
}

soma(1); //Resultado NaN
soma();  //Resultado NaN

//Função com valor padrão
function soma(a = 3 ,b = 5){
    return a + b;
}

//Definindo valor arrow function
const soma = (a = 3, b = 5) => a + b;

soma(1); //Resultado 6
soma();  //Resultado 8