var all_square = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

main();

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? all_square = 3 : all_square = 6;
            reset();
        });
    }
}


// here adding colors to the squares the adding eventlistener on click.

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                startit();
                stopit();
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}
 // generating all new colors ,changing colors when matched.

function reset() {
    colors = generateRandomColors(all_square);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

// going to all the squares and changing each color with matched one.

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// array of colors  

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//random color generator  for the rgb game 

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}



// Confetti falling effect control 

startit = () => {
    setTimeout(function () {
        console.log("start");
        confetti.start();
    }, );
    };

    const stopit = () => {
    setTimeout(function () {
        console.log("stop");
        confetti.stop();
    }, 1000);
    };

function main() {
    setupModeButtons();
    setupSquares();
    reset();
}
