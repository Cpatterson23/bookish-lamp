const myBox = document.getElementById("my-box");

function setColor(color) {
    myBox.style.backgroundColor = color;
}

function onClick() {
    setColor ("blue");
}

myBox.addEventListener("click", onClick);


