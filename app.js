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
  //Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey'
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-check"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
}