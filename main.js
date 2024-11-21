
const input = document.getElementById('input');
const btn = document.getElementById('button');
const todo = document.getElementById('todoList');

const box = []
const reserveText = () => {

    const value = input.value;


    if (value) {
        const text = value.split("").reverse().join("")
        box.push(text)
    }

    todo.innerHTML = ""
    box.forEach(t => {

        const todoLi = document.createElement("li")
        todoLi.innerHTML = t ;
        todo.append(todoLi)
    })
    input.value = ""


}
btn.onclick = () => reserveText()

