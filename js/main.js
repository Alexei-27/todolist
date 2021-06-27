const data = JSON.parse(localStorage.getItem('tasks'));

// const data = [  
    // {
    //     title: "Выучить HTML",
    //     description: "Освоить базовые навыки разметки страницы",
    //     done: true
    // },
    

const list = document.getElementById("task-list")

function handleChecboxCheck(event) {
    console.log('Helll', event.target.checked, event.target.id)
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
    checkBox.addEventListener('change', handleChecboxCheck)

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
    
    // li.innerHTML += `
    // <label for="checkbox-${index}" class="label">
    //     ${data[index].title}
    // </label>
    // <button class="btn-edit">
    //     <img src="img/edit.svg" alt="Редактировать">
    // </button>
    // `
    list.append(li)
    li.classList.add("list-item")
    const btnDel = document.createElement("button")
    btnDel.classList.add("btn-del")
    btnDel.innerHTML = '<img src="img/trash.svg" alt="Удалить"></img>'
    li.append(btnDel)
    btnDel.addEventListener("click", function() {
        console.log(data[index].title)
        list.removeChild(li)
    })
    
   

}
