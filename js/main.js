const data = JSON.parse(localStorage.getItem('tasks'));

// const data = [  
    // {
    //     title: "Выучить HTML",
    //     description: "Освоить базовые навыки разметки страницы",
    //     done: true
    // },
    

const list = document.getElementById("task-list")


for (let index = 0; index < data.length; index++) {
    
    console.log(data[index])
    const li = document.createElement("li")
    li.innerHTML = `
    
    <input type="checkbox" class="custom-checkbox" id="checkbox-${index}"  ${data[index].done ? "checked" : ""}/>
    <label for="checkbox-${index}" class="label">
        ${data[index].title}
    </label>
    <button class="btn-edit">
        <img src="img/edit.svg" alt="Редактировать">
    </button>
    `
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

