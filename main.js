import { resolve } from "path";

//Exercicio 01
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const usrComum = new Usuario('teste@teste.com', 'senha');
const usrAdm = new Admin('email@teste.com', 'senha');

console.log(usrComum.isAdmin());
console.log(usrAdm.isAdmin());

//Fim Exercicio 01


//Exercicio 02

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

//2.1
const idades = usuarios.map(item => item.idade);

//2.2
const anos = usuarios.filter(item => {
    return item.idade > 18 && item.empresa === 'Rocketseat';
})

//2.3
const funcionarioGoogle = usuarios.find(item => item.empresa === 'Google');

//2.4
const funcionarioMenor50 = usuarios.filter(item => {

    item.idade *= 2;

    if (item.idade <= 50) {
        return item;
    }
})

console.log(idades);
console.log(anos);
console.log(funcionarioGoogle);
console.log(funcionarioMenor50);

//Fim Exericio 02

//Exercicio 03

//3.1
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

//3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => usuario.idade;

//3.3
const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { nome, idade };

console.log(nome, idade);
console.log(nome);

//3.4
// const promise = () => {
//     return new Promise((resolve, reject) => resolve());
// }

// console.log(promise);

//Fim Exercicio 03

//Exercicio 04

//4.1
const empresa = {
    nome: 'RocketSeat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};

const { nomeEmpresa, endereco: { cidadeEmpresa, estadoEmpresa } } = empresa;

console.log(nomeEmpresa);
console.log(cidadeEmpresa);
console.log(estadoEmpresa);