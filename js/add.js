const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    console.log(event);
    event.preventDefault();
    const title = document.querySelector('input[name="title"]').value
    const description = document.querySelector('textarea[name="description"]').value
    let maxid = localStorage.getItem('maxid') || 1;
    const newTask =  {
        title: title,
        desc: description,
        done: false,
        id: ++maxid
    }
    
    localStorage.setItem('maxid', maxid);
    const curentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    curentTasks.push(newTask); 

    console.log(newTask)
    const newTaskString = JSON.stringify(curentTasks);
    localStorage.setItem('tasks', newTaskString); 
    
})
