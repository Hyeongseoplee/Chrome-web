"use strict";

const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");

const HIDDEM_CLASSNAME = "hidden";
const USERNAME = "username";

function handleClick(e) {
  e.preventDefault();
  const inputValue = loginInput.value.toUpperCase();
  loginForm.classList.add(HIDDEM_CLASSNAME);
  paintGreeting(inputValue);
  saveName(inputValue);
}

function saveName(inputValue) {
  localStorage.setItem(USERNAME, inputValue);
}

function paintGreeting(inputValue) {
  greeting.innerText = `HI ${inputValue}!`;
  greeting.classList.remove(HIDDEM_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME);

if (savedName === null) {
  loginBtn.addEventListener("click", handleClick);
  loginForm.classList.remove(HIDDEM_CLASSNAME);
} else {
  paintGreeting(savedName);
}
