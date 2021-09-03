
var Colors = [];

var selected_colors;

var total_square = 6;


var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
    h1.style.background = color;
}
function pickColor() {
    var random = Math.floor(Math.random() * Colors.length);
    return Colors[random];
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

