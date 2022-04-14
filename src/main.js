const myBox = document.getElementById("my-box");
 let randomColor = "red";

function changeColor() {

if (randomColor == "red") {
    randomColor = "salmon";
}  else if (randomColor == "salmon") {
   randomColor = "black";
} else if ( randomColor == "black") {
  randomColor = "orange"; 
} else if (randomColor == "orange") {
  randomColor = "teal";
} else {
 randomColor = "red";
}
 myBox.style.backgroundColor = randomColor
}



function resize() {
   
   
} 

function onClick() {
    changeColor();
    resize();
}

myBox.addEventListener("click", onClick);


