import { Todo } from '../classes'
import { todoList } from '../index'

//Referencias en el html

const divTodoList = document.querySelector('.todo-list'); 
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }">
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); //para que no coloque el div , solo el li

    return div.firstElementChild;

}

//Eventos
txtInput.addEventListener('keyup', ( event ) => { //al momento de escribir en el input
    // console.log( event );
    if ( event.keyCode === 13 && (txtInput.value).length > 0) { //es keyCode
        // console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo ); // dentro del obj todoList

        crearTodoHtml( nuevoTodo ); //para la vista
        txtInput.value = ""; 
    }
})

divTodoList.addEventListener('click', ( event ) => {

    const nombreElemento = event.target.localName; // input, label, button,
    const todoElemento   = (event.target.parentElement).parentElement;
    const todoId         = todoElemento.getAttribute('data-id')

    // console.log(nombreElemento);

    if ( nombreElemento.includes('input')) {
        todoList.marcarCompletado( todoId ); // se refiere al obj instaciado del index.js
        todoElemento.classList.toggle('completed') // alterna la clase css completed
        
    } else if ( nombreElemento.includes('button')) { // hay q borrar el todo
        todoList.eliminarTodo( todoId ); // todoList es la instacia de la clase TodoList que pasa desde el index
        divTodoList.removeChild( todoElemento ); 
    
    }

    // console.log(todoList);
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados(); // elmina de mi arreglo;
    // para eliminar los lis de la lista, tengo que recorrerlo de abajo hacia arriba (trucaso)
    for (let i = divTodoList.children.length-1; i >=0 ; i--) {
        const elemento = divTodoList.children[i];
        if ( elemento.classList.contains('completed') ) {
            divTodoList.removeChild( elemento ); // remueve los hijos que cumplen con esa condicion
        }
    }
});

ulFilters.addEventListener('click', ( event ) => {
    // console.log(event.target.text);
    const filtro  = event.target.text;
    if ( !filtro ) return ;

    anchorFiltros.forEach(element => {
        element.classList.remove('selected')
    });

    event.target.classList.add('selected')

    // se aplica con el css hidden
    for (const elemento of divTodoList.children) {
        // console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch ( filtro ) {
            case 'Pendientes':
                if ( completado ) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if ( !completado ) {
                    elemento.classList.add('hidden');
                }
                break;
            default:
                break;
        }
    }
});
