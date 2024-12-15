
function startTaskManager() {
   
    const introPage = document.querySelector(".intro-container");
    introPage.classList.add("fade-out");

    
    setTimeout(() => {
        introPage.style.display = "none";  
        document.getElementById("task-manager-page").style.display = "block";  
    }, 1000);  
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
       
        const newTaskItem = document.createElement('li');
        newTaskItem.classList.add('task-item');
        newTaskItem.innerHTML = `
            <span>${taskValue}</span>
            <div>
                <button onclick="markAsCompleted(this)">Mark as Completed</button>
                <button onclick="markAsActive(this)">Mark as Active</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        
        document.getElementById('taskList').appendChild(newTaskItem);

        
        taskInput.value = '';
    }
}


function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}


function markAsCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.add('completed');
    button.disabled = true;  
}


function markAsActive(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.remove('completed');
    taskItem.querySelector('button').disabled = false;  
}


function deleteCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.task-item.completed');

    completedTasks.forEach(task => {
        task.remove();
    });
}


function deleteActiveTasks() {
    const taskList = document.getElementById('taskList');
    const activeTasks = taskList.querySelectorAll('.task-item:not(.completed)');

    activeTasks.forEach(task => {
        task.remove();
    });
}
