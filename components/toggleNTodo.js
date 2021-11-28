"use strict";

// Toggle button
const toggleBtn = document.querySelector(".fa-bars");
const todoContainer = document.querySelector(".todo-container");
const holes = todoContainer.querySelectorAll(".holes");

function handleToggle() {
  todoContainer.classList.toggle("hide");
  todoContainer.classList.toggle("showing");
  holes.forEach((item) => {
    item.style.background = "forestgreen";
  });
}

toggleBtn.addEventListener("click", handleToggle);

// Todo List Container
const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoSubmitBtn");
const todoList = document.querySelector(".todoList");

const TODOS_KEY = "todos";
let todos_arr = [];

function handleClick(e) {
  e.preventDefault();
  let inputValue = todoInput.value;
  todoInput.value = "";
  let todoObj = {
    text: inputValue,
    id: Date.now(),
  };
  todos_arr.push(todoObj);
  paintTodo(todoObj);
  saveTodo(todoObj);
}

function paintTodo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function handleDelete(e) {
  const delTarget = e.target.parentElement;
  delTarget.remove();
  todos_arr = todos_arr.filter((item) => {
    return item.id !== parseInt(delTarget.id);
  });
  console.log(todos_arr);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos_arr));
}

todoBtn.addEventListener("click", handleClick);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo) {
  const parsedTodo = JSON.parse(savedTodo);
  todos_arr = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
