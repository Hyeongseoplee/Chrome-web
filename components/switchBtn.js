"use strict";

const body = document.querySelector("body");
const switchColorBtn = document.querySelector(".switchColorBtn input");
const clockWrapper = document.querySelector(".clock-wrapper");
const loginYellowBorder = document.querySelector("#loginForm input");

function switchColor() {
  body.classList.toggle("yellow");
  clockWrapper.classList.toggle("yellow");
  loginYellowBorder.classList.toggle("yellow");
}

switchColorBtn.addEventListener("click", switchColor);
