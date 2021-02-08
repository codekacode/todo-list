//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event listener
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
  //Prevent form submiting
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo')

}