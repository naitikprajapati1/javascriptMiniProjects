console.log("Hello");
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const emptyList = document.querySelector(".empty-list");
const totalTasks=document.querySelector("#totalTasks");
const completedTasks=document.querySelector("#completedTasks");
let taskListArray = [];
let countCompletedTasks=0;
function createTaskElement(taskText) {
    const createList = document.createElement('li');
    createList.classList.add('task-item');

    const createCheckBox = document.createElement('input');
    createCheckBox.type = "checkbox";
    createCheckBox.classList.add('complete-checkbox');
    createCheckBox.addEventListener('change', handleCheckbox);

    const createText = document.createElement("span");
    createText.classList.add("task-text");
    createText.textContent = taskText;

    const delButton = document.createElement('button');
    delButton.classList.add('delete-button');
    delButton.textContent = "Delete";
    delButton.addEventListener('click', handleDelete);

    createList.append(createCheckBox, createText, delButton);
    return createList;
}

function updateStats() {
completedTasks.innerHTML=`Completed : ${countCompletedTasks}`;
totalTasks.innerHTML=`Total tasks : ${taskListArray.length}`; 
}

function handleTaskLists(e) {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        return;
    }

    try {
        if (emptyList && taskList.contains(emptyList)) {
            taskList.removeChild(emptyList);
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskListArray.push(taskText);
        updateStats();

        taskInput.value = '';
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

function handleDelete(e) {
    const taskItem = e.target.closest('.task-item');
    if (taskItem) {
        taskItem.remove();
        taskListArray.shift();
        countCompletedTasks>0 && countCompletedTasks--;
        updateStats();
        if (taskList.children.length === 0) {
            taskList.appendChild(emptyList);

        }
    }
}

function handleCheckbox(e) {
    const taskItem = e.target.closest('.task-item');
    const taskText = taskItem.querySelector('.task-text');
    
    if (e.target.checked) {
        taskText.style.textDecoration = 'line-through';
        countCompletedTasks++;
        updateStats();
        
    } else {
        taskText.style.textDecoration = 'none';
        countCompletedTasks>0 && countCompletedTasks--;
        updateStats();
    }
}


function handleKeyPress(e) {
    if (e.key === 'Enter') {
        handleTaskLists();
    }
}

console.log(taskListArray);

addTaskButton.addEventListener("click", handleTaskLists);
taskInput.addEventListener("keypress", handleKeyPress);
