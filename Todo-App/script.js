
document.addEventListener("DOMContentLoaded", function() {

    // Assign document elements to a variable . 
    const listbtn = document.getElementById('listbtn');
    const taskList = document.getElementById('taskList');
    const list = document.getElementById('list');
    const taskHeading = document.getElementById('taskHeading');

    // Show the task list when the button is clicked 
    listbtn.addEventListener('click', handleShow);


    //  function to show the TASK LIST 
    function handleShow() {
        
        listbtn.removeEventListener('click', handleShow);  //This can avoid 
        listbtn.addEventListener('click', handleHide);     // After show the Task List ,next we wanna hide that when we click the button
        list.style.display = 'block'; // show
}


    // function to hide the TASK LIST
    function handleHide() {
        listbtn.removeEventListener('click', handleHide);
        listbtn.addEventListener('click', handleShow);
        list.style.display = 'none'; // hide
}

    // Function to add a task
    //window  ask globalscope for the function
    window.handleAddTask = function(event) {
        event.preventDefault(); // stop form refresh

                        // create a new div for task
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'btn-group w-100 mx-3 mb-1 hello');
         
// Done button 
        const doneBtn = document.createElement('button');
        doneBtn.setAttribute('class', 'btn btn-warning bi-circle col-1');
// when clicking DONE button, it performs handleDone function
        doneBtn.addEventListener('click', handleDone);

        function handleDone() {
// This function shows the task is completed 
            doneBtn.setAttribute('class', 'btn btn-success bi-check2-circle col-1');
            doneBtn.removeEventListener('click', handleDone);
            doneBtn.addEventListener('click', handlePending);
}
        function handlePending() {
            doneBtn.setAttribute('class', 'btn btn-warning bi-circle col-1');
//It shows pending task
            doneBtn.removeEventListener('click', handlePending);
            doneBtn.addEventListener('click', handleDone);
}
// shows the task
        const taskBtn = document.createElement('input');
        taskBtn.setAttribute('class', 'btn btn-light col-8');
        taskBtn.value = event.target[0].value;
        taskBtn.setAttribute('readonly', true);
//Clear the input field 
event.target[0].value="";

// Edit button
        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-primary bi-pencil col-1');
        editBtn.addEventListener('click', handleEdit);
// function to perform edit
        function handleEdit() {
            editBtn.setAttribute('class', 'btn btn-info bi-floppy col-1');
            taskBtn.removeAttribute('readonly');
            editBtn.removeEventListener('click', handleEdit);
            editBtn.addEventListener('click', handleSave);
            
            
            
}
//function to save task after the edit
        function handleSave() {
            editBtn.setAttribute('class', 'btn btn-primary bi-pencil col-1');
            taskBtn.setAttribute('readonly',true);
            editBtn.removeEventListener('click', handleSave);
            editBtn.addEventListener('click', handleEdit);
}
// Delete button
        const delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'btn btn-danger bi-trash col-1');
        delBtn.addEventListener('click', handleDelete);
// funtion for delete task
        function handleDelete() {
            taskDiv.remove();
            updateTaskCount();
}
        function updateTaskCount() {
            const tasks = document.getElementsByClassName('hello');
            listbtn.innerHTML = "<sup>" + tasks.length + "</sup>";
             if (tasks.length > 0) {
                taskHeading.innerHTML = "View Tasks";
            } else {
                taskHeading.innerHTML = "Add A Task To View!";
        }
}


// Add buttons to the task container
        taskDiv.appendChild(doneBtn);
        taskDiv.appendChild(taskBtn);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(delBtn);

// Add to list
        taskList.appendChild(taskDiv);
        //input.value = "";
        updateTaskCount();

       
        
















// Add to list
taskList.appendChild(taskDiv);
input.value = "";

updateTaskCount();
};


});