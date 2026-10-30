// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector('ul');

function createTodoItem(todo) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';

  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  checkbox.addEventListener('change', (evt) => {
    todo.completed = evt.target.checked;
    console.log(`Task "${todo.task}" completed: ${todo.completed}`);
  });

  deleteBtn.addEventListener('click', () => {
    todoList.splice(todoList.indexOf(todo), 1);
    list.removeChild(li);
    console.log(todoList);
  });
}

for (const todo of todoList) {
  createTodoItem(todo);
}

const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');
const input = dialog.querySelector('input');

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newTodo = {
    id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
    task: input.value,
    completed: false,
  };
  todoList.push(newTodo);
  createTodoItem(newTodo);
  console.log(todoList);
  input.value = '';
  dialog.close();
});
