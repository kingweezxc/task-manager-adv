// Function to navigate to the task manager page
function startTaskManager() {
    // Apply fade-out effect to the intro page
    const introPage = document.querySelector(".intro-container");
    introPage.classList.add("fade-out");

    // Wait for the fade-out animation to complete before showing the task manager
    setTimeout(() => {
        introPage.style.display = "none";  // Hide the intro page
        document.getElementById("task-manager-page").style.display = "block";  // Show task manager page
    }, 1000);  // Duration of the fade-out animation (1s)
}

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        // Create a new list item
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

        // Append the new task to the task list
        document.getElementById('taskList').appendChild(newTaskItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task from the list
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

// Function to mark a task as completed
function markAsCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.add('completed');
    button.disabled = true;  // Disable "Mark as Completed" button after completion
}

// Function to mark a task as active again
function markAsActive(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.remove('completed');
    taskItem.querySelector('button').disabled = false;  // Enable "Mark as Completed" button
}

// Function to delete all completed tasks
function deleteCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.task-item.completed');

    completedTasks.forEach(task => {
        task.remove();
    });
}

// Function to delete all active tasks
function deleteActiveTasks() {
    const taskList = document.getElementById('taskList');
    const activeTasks = taskList.querySelectorAll('.task-item:not(.completed)');

    activeTasks.forEach(task => {
        task.remove();
    });
}
