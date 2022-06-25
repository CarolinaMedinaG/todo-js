import './styles.css';
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));




// const tarea = new Todo('Apreder JavaScript');


// todoList.nuevoTodo(tarea);

// console.log(todoList);
// crearTodoHtml(tarea)


// localStorage.setItem('mi-key', 'ABC177');
// sesionStorage.setItem('mi-key', 'ABC177');

// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500);