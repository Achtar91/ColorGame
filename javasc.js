var numSquaers = 6;
var colors = generatRandomColor(numSquaers);
var square = document.querySelectorAll(".square");
var PickedColor = PickColor()
var colorDisplay = document.querySelector("#colordisplay");
var messageDisplay = document.querySelector("#mesage");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for( var i = 0; i < modeButtons.length; i++ ){
    modeButtons[i].addEventListener("click" , function() {
        //remove class
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        //add  class
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquaers = 3;
        }else{
            numSquaers = 6;
        }
        
       reset();
        
     });

}

function reset(){
	//generate all new colors
	colors = generatRandomColor(numSquaers);
	//pick a new random color from array
	PickedColor = PickColor();
    resetButton.textContent = "New Colors";
	//change colorDisplay to match picked Color
	colorDisplay.textContent = PickedColor ;
    messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < square.length; i++) {
        if(colors[i]){
        square[i].style.display = "block";
		square[i].style.background = colors[i];
        }else{
        square[i].style.display = "none";
        }
	}
    h1.style.background = "steelblue";
    
    
}



resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = PickedColor;

for(var i = 0; i < square.length; i++){
    
    // add  initial colors to square
    square[i].style.backgroundColor = colors[i];
    
    // add click lisiner to square
    square[i].addEventListener("click", function(){
        // grab of clicked squer
        var clickedColor = this.style.backgroundColor;
        // compare colors to pickedcolor
     if(clickedColor === PickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play again";

        } else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent = "Try again";
            
        }
        
    });
                               
}

function changeColors(color){
    //loop throug all squares
    for(var i = 0; i < square.length; i++){
        //change each color to match given color
        square[i].style.backgroundColor = color;
    }
}

function PickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generatRandomColor(num){
    // make an arry
    var arr = [];
    // loop num times
    for(var i =0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pic a "red" from 0 - 256
    var r = Math.floor(Math.random() * 256);
    // pic a  "green" from 0 - 256
    var b = Math.floor(Math.random() * 256);
    // pic a "blue" from 0 - 256
    var g =  Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}