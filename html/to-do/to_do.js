




function addTask(){
    let tasksList = document.getElementById("tasks-list");
    let addTaskTextbox =  document.getElementById('add-task-textbox');
    
    let taskText = addTaskTextbox.value;
    if (taskText === ''){
        alert('The text box is empty!');
        return;
    }
    let task = document.createElement("li");
    task.setAttribute('id','task-item');
    task.innerHTML = `<span id="task-text">`+taskText +`</span><button id="delete-button" onclick="deleteTask(this)">X</button><br>`
    
    task.addEventListener('click', function(){
        task.classList.toggle('done');
    });

    tasksList.appendChild(task);
    addTaskTextbox.value = '';
}

function deleteTask(element){
    element.parentElement.remove();
}


