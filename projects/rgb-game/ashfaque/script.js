let heading = document.getElementById("#heading");
let colorDisplay = document.getElementById("#colorDisplay");
let message = document.getElementById("#message");

let squares = document.querySelectorAll("square");
let resetBtn = document.querySelector("#reset");
let modBtn = document.querySelectorAll(".mode");
let easyBtn = document.querySelector(".mode");

let numSquares = 6;
let colors = [];
let pickedColor;

function makeColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(makeColors());
