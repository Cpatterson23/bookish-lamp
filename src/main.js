const myBox = document.getElementById("my-box");
let newColor = "blue";

function setColor(color) {
    myBox.style.backgroundColor = color;
}

function onClick() {
    if (newColor == "red" ) {
        newColor = "blue";
    } else {
        newColor = "red";
    }   
    setColor(newColor)
}


