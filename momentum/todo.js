const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const todos_key = "todos";

let todos = [];

function savetodos () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function delettodo(){
    const li = event.target.parentElement;
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    savetodos()
}

function painttodo (newtodo) {
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click",delettodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newtodo.text;
    todoList.appendChild(li)

}

function handletodosubmit(){
    event.preventDefault()
    const newtodo = todoInput.value;
    todoInput.value = "";
    const newtodoobject = {
        id:Date.now(),
        text:newtodo,
    }
    todos.push(newtodoobject)
    painttodo(newtodoobject);
    savetodos();
}

todoForm.addEventListener("submit",handletodosubmit)

const savedtodos = localStorage.getItem(todos_key);

if (savedtodos !== null){
    const parsedtodos = JSON.parse(savedtodos);
    todos = parsedtodos
    parsedtodos.forEach(painttodo)
}
