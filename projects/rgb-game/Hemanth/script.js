function game() {
    var heading = document.getElementById("heading")

    var newColors_btn = document.getElementById("reset")
    var easy_btn = document.getElementById("easy")
    var hard_btn = document.getElementById("hard")

    var colorDisplay = document.getElementById("colorDisplay")
    var messageBox = document.getElementById("message")

    var container = document.getElementById("container")
    var squares = document.getElementsByClassName("square")

    var mainColor;

    function generateRGB() {
        // Math.random Generates random Numbers between 0 to 1
        // example : 0.34545 , 0.5689 , etc
        // 0 is included in the range but 1 is not , so it will never generate 1
        // So, we can just multiply the random number with 256 and 
        // Use Math.floor() to get rid of the decimal part

        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        return `rgb(${r}, ${g}, ${b})`
    }

    function newColors() {
        // Resetting The Styles of Elements to Original.
        heading.style.backgroundColor = "steelblue"
        newColors_btn.innerText = "NEW COLORS!"
        messageBox.innerText = ""

        // Generating Random RGB Colors for each Square Box and Applying them.
        var colors = []
        var length = squares.length;
        for (let i = 0; i < length; i++) {
            let color = generateRGB()
            colors.push(color)
            squares[i].style.backgroundColor = color
            squares[i].style.visibility = "visible"
            squares[i].addEventListener("click", check)
        }

        // Selecting one random Color as our Correct Answer.
        let index = Math.floor(Math.random() * length)
        mainColor = colors[index]
        colorDisplay.innerText = mainColor
    }

    newColors_btn.addEventListener("click", newColors)

    easy_btn.addEventListener("click", function () {
        this.className = "selected"
        hard_btn.classList.remove("selected")
        if (squares.length == 6) {
            for (let i = 0; i < 3; i++) {
                squares[0].remove()
            }
        }
        newColors()
    })

    hard_btn.addEventListener("click", function () {
        this.className = "selected"
        easy_btn.classList.remove("selected")
        var square = document.createElement("div");
        square.className = "square"
        if (squares.length == 3) {
            for (let i = 0; i < 3; i++) {
                container.appendChild(square.cloneNode(true))
            }
        }
        newColors()
    })

    function check(e) {
        bgColor = window.getComputedStyle(e.currentTarget).backgroundColor
        if (bgColor == mainColor) {
            messageBox.innerText = "Correct !!"
            newColors_btn.innerText = "Play Again ?"
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = "green"
                squares[i].style.visibility = "visible"
            }
            heading.style.backgroundColor = "green"
        }
        else {
            messageBox.innerText = "Try Again !!"
            e.currentTarget.style.visibility = "hidden"
        }
    }

}

game()
