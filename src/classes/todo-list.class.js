import  { Todo } from './todo.class';

export class TodoList {

    constructor () {
        // this.todos = [];
        this.cargarLocalStorage();

    }
    nuevoTodo( todo ) {
        this.todos.push( todo );    
        this.guardarLocalStorage();
    }
    eliminarTodo( id ) {
        // el fitler devuelve todos los elementos que cumplen o no la condicion que envio en el callback
        this.todos = this.todos.filter( todo => todo.id != id);
        // estos devolviendo en todos un arreglo de todos los elementos que son diferentes el id que estoy enviando
        // en este caso estoy enviando un number pero en mi arreglo todos tengo el id string
        // por esa razon no uso el == sino solo el  =
        this.guardarLocalStorage();
    }   
    marcarCompletado( id ) {
        for (const todo of this.todos) {
            
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado) // necesito todos los que NO esten completados
        this.guardarLocalStorage();
    }
    guardarLocalStorage() {
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) ); // convierte un String a Json
    }
    cargarLocalStorage() {
        // if ( localStorage.getItem('todo') ) {
        //     this.todos = JSON.parse( localStorage.getItem('todo') ); // proceso inverso Json a String 
        //     // console.log( 'cargarLocal', this.todos );
        // } else {
        //     this.todos = [];
        // }
        this.todos = localStorage.getItem('todo') 
                    ? JSON.parse( localStorage.getItem('todo')) 
                    : [];
        // me permite correr las props y mutarlos
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); // llama el metodo static de la clase Todo
    }

}