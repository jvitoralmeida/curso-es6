//Aula de construção de classes
class Funcionario{ // Classe pai
    constructor(){
        this.nome = 'João Vitor';
        this.idade = 21;
    }
}


class Desenvolvedor extends Funcionario{ //Classe com herança
    constructor(){ //Metodo Construtor
        super(); //Invocando construtor da classe pai
        this.skills = ['Java','Elastic','C#'];
    }

    addParentes(){//Declaração de metodo
        this.skills.push('Nova skill');
    }
}

const Funcionario = new Funcionario(); //Instaciação de classe