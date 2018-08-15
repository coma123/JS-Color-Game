var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    resetGame();
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', function () {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                reset.textContent = 'Play Again';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons() {
    // mode button event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            resetGame();
        });
    }
}

function resetGame() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    message.textContent = "";
}

reset.addEventListener('click', function () {
   resetGame();
});



function changeColors(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push ito array
        arr.push(randomColor());     
    }
    //return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}