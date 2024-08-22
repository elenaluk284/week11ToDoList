const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.addEventListener('click', checkTask);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function checkTask(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
}

addTaskButton.addEventListener('click', createTask);
