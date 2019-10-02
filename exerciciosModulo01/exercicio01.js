class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const Usuario = new Usuario('email@teste.com', 'senha123');
const Adm = new Admin('email@teste.com','senha');

console.log(Usuario.isAdmin());
console.log(Adm.isAdmin());