var numCircles = 6;
var colors = generateRandomColors(numCircles);
var circles = $(".circle");
var pickedColor = colorPicked();
var colorDisplay = $("#colorDisplay")[0];
var messageDisplay = $("#message")[0];
var h1 = $("h1")[0];
var resetButton = $("#reset")[0];
var easyBtn = $("#easyBtn")[0];
var hardBtn = $("#hardBtn")[0];
var h2 = $("h2")[0];

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numCircles = 3;
  colors = generateRandomColors(numCircles);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numCircles = 6;
  colors = generateRandomColors(numCircles);
  pickedColor = colorPicked();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numCircles);
  //pick a new random color from array
  pickedColor = colorPicked();
  //change colorDisplay to mach pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of circles
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#fddddb";
  h2.style.backgroundColor = "#fddddb";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < circles.length; i++) {
  //add initial colors to circles
  circles[i].style.backgroundColor = colors[i];

  //add click listeners to circles
  circles[i].addEventListener("click", function() {
    //grab color of clicked circle
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      h2.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#fddddb";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all circles
  for (var i = 0; i < circles.length; i++) {
    //change each color to match given color
    circles[i].style.backgroundColor = color;
  }
}

function colorPicked() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get random color and puch into arr
  }
  //return tahat array
  return arr;
}

function randomColor() {
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
