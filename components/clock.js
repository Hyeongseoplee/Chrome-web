"use strict";

const daysText = document.querySelector(".days .number");
const hoursText = document.querySelector(".hours .number");
const minutesText = document.querySelector(".minutes .number");
const secondsText = document.querySelector(".seconds .number");
const label = document.querySelectorAll(".clock-container li .label");

function getCurrentTime() {
  const date = new Date();
  const days = String(date.getDate()).padStart(2, 0);
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  daysText.innerText = days;
  hoursText.innerText = hours;
  minutesText.innerText = minutes;
  secondsText.innerText = seconds;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);
