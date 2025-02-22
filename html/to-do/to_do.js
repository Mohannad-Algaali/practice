let listOfTasks = [];
class Task {
    constructor(taskText) {
        this.taskText = taskText;
        this.isChecked = false;
    }
}

let tasksList = document.getElementById("tasks-list");
let taskElement = document.getElementById("task");
let addTaskTextbox =  document.getElementById('add-task-textbox');
let addTaskButton = document.getElementById('add-task-button');

addTaskButton.onclick = function(){
    let text =String(addTaskTextbox.value);
    if (text.length >0){
        let task =  new Task(text);
        // continue here to create a new task element each time the button is pressed
    }
}

