var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");



init();

function init(){
    //Mode button event listeners
    setUpModeButton();
    setUpSquares();

    reset();
}

function setUpModeButton(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
    //add click listener to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDispaly.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play again";
            } else {
                this.style.background = "#232323";
                messageDispaly.textContent = "Try agin!!";
            }

        });
    }
}


function reset(){
    //Generate all new random colors
    colors = generateRandomColors(numberOfSquares);
    //Pick a new pickedColor
    pickedColor = pickColor();
    //change pick color to math the h1
    colorDisplay.textContent = pickedColor;
    //Hide the display message
    messageDispaly.textContent = "";
    //change text content of rest button
    resetButton.textContent = "New colors";
    //change color of squares
    //add Initial colors to squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "rgb(46, 204, 113)";
}

resetButton.addEventListener("click", function(){
    
   reset();
});


function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        
        squares[i].style.background = color;
        
    }
}


function pickColor(){
    
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random color to array 
    for( var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that random array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green from 0 - 255;
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255;
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


