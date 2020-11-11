import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml );

// const newTodo =  new Todo( 'Aprender JavaScript' )
// todoList.nuevoTodo( newTodo );

// todoList.todo[0].imprimirClase();
// console.log(todoList);
// console.log('todos', todoList.todos);
// const tarea = new Todo('Aprender JavaScript !!');
// const tarea2 = new Todo('Comprar Unicornio');

// todoList.nuevoTodo( tarea );
// todoList.nuevoTodo( tarea2 );

// crearTodoHtml( tarea )

// console.log(todoList);
// sessionStorage.setItem('mi-key', 'ABC1234')
// localStorage.setItem('mi-key', 'ABC1234');

// setTimeout(() => {
//     //dispara el callback luego de los milseg
//     localStorage.removeItem('mi-key')
// }, 1500);


