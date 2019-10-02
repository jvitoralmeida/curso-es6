class TodoList{
    //Normalmente classes staticas não tem construtor, são apenas utilitarias
    // constructor(){
    //     this.todos = [];
    // }

    //O metodo statico não enxerga os atributos dessa classe, sua unica função deve ser receber valor e devolver um valor
    static addTodo(a,b){
        //this.todos.push('Novo todo'); NÃO FUNCIONA
        return a+b;
    }
}

