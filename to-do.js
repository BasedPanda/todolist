const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = todo;
    li.addEventListener('click', () => {
      removeTodo(index);
    });
    list.appendChild(li);
  });
}

function addTodo() {
  const todo = input.value.trim();
  if (todo !== '') {
    todos.push(todo);
    input.value = '';
    renderTodos();
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});
