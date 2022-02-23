"use srtict";

const images = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg", "bg5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");
bg.setAttribute("class", "backgroundImg");
bg.src = `./images/${chosenImage}`;
document.body.appendChild(bg);
