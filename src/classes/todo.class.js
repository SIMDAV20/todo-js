export class Todo {
    static fromJson ( obj ) {
        const tempTodo = new Todo( obj.tarea );
        tempTodo.id         = obj.id;
        tempTodo.completado = obj.completado;
        tempTodo.creado     = obj.creado;
        // regresar los metodos del Json del localStorage
        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea; //tarea que recibo como argumento

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
    
    // en el localStorage se pierden los metodos
    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }
}