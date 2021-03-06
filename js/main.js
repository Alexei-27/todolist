const data = JSON.parse(localStorage.getItem('tasks'));

const list = document.getElementById("task-list")

function handleCheckboxCheck(event) {
    for(let index = 0; index < data.length; index++) {
        if(data[index].id == event.target.id) {
            data[index].done = event.target.checked;           
        }
    }
    const newTaskString = JSON.stringify(data);
    localStorage.setItem('tasks', newTaskString); 
}

for (let index = 0; index < data.length; index++) {
    
    const id = data[index].id
    const li = document.createElement("li")

    const checkBox = document.createElement("input")
    checkBox.classList.add('custom-checkbox')
    checkBox.id = id
    checkBox.checked = data[index].done
    checkBox.type = 'checkbox'
    li.append(checkBox)
    checkBox.addEventListener('change', handleCheckboxCheck)

    const label = document.createElement('label')
    label.classList.add('label')
    label.htmlFor = id
    label.textContent = data[index].title
    li.append(label)

    const desc = document.createElement('div')
    desc.classList.add('desc')
    desc.textContent = data[index].desc
    li.append(desc)

    const btnEd = document.createElement('button')
    btnEd.classList.add('btn-edit')
    btnEd.innerHTML = '<img src="img/edit.svg" alt="Редактировать">' 
    li.append(btnEd)
    
    const btnDel = document.createElement("button")
    btnDel.classList.add("btn-del")
    btnDel.innerHTML = '<img src="img/trash.svg" alt="Удалить"></img>'
    li.append(btnDel)
    btnDel.addEventListener("click", function(event) {
        list.removeChild(li);
        data.splice(index, 1);
        const newTaskString = JSON.stringify(data);
        localStorage.setItem('tasks', newTaskString); 
    })
    
    list.append(li)
    li.classList.add("list-item")
}

const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', function() {
    const a = document.body.className
    switch (a) {
        case 'light-theme': 
        document.body.className = 'dark-theme';
        break;

        case 'dark-theme': 
        document.body.className = 'military-theme';
        break;
        
        case 'military-theme': 
        document.body.className = 'light-theme';
        break;

    } 
})