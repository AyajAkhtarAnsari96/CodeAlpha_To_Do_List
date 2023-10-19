// Define variables to access HTML elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add');
const clearTasksButton = document.getElementById('clear');
const taskList = document.getElementById('task-list');

// Add task to the list
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Clear all tasks
clearTasksButton.addEventListener('click', function () {
    taskList.innerHTML = '';
});
