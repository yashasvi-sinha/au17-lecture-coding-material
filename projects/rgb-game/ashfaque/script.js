let heading = document.getElementById("heading");
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");

let squares = document.querySelectorAll(".square");
let resetBtn = document.getElementById("reset");
let modBtn = document.querySelectorAll(".mode");

let numSquares = 6;
let colors = [];
let pickedColor;

/* Generating rgb */
function makeColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

/* Generating random color for all squares */
function genRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColors());
  }
  return arr;
}

/* Choosing a random color as correct answer from all squares */
function chooseColors() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

/* Once we got clicked on the correct square changing all the boxes to 
that color and also the background of heading */
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    heading.style.backgroundColor = color;
  }
}

/* When clicked on New color button it will reset the game as before */
function reset() {
  colors = genRandomColors(numSquares);
  pickedColor = chooseColors();
  colorDisplay.textContent = pickedColor;
  heading.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New colors";
  message.textContent = "";

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

/* On Easy three squares will be displayed and on hard six squares */
function setupEasyHard() {
  for (let i = 0; i < modBtn.length; i++) {
    modBtn[i].addEventListener("click", function () {
      for (let i = 0; i < modBtn.length; i++) {
        modBtn[i].classList.remove("selected");
      }

      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

/* checking if user is clicking on the right square and implementing game logic */
function mainGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      let presentClickedColor = this.style.backgroundColor;
      if (presentClickedColor === pickedColor) {
        message.textContent = "Correct";
        resetBtn.textContent = "Play Again?";
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try again";
      }
    });
  }
}

/* main function */
function playGame() {
  resetBtn.addEventListener("click", function () {
    reset();
  });
  colorDisplay.textContent = pickedColor;
  mainGame();
  setupEasyHard();
  reset();
}

playGame();
