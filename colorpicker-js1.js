let color1 = document.getElementById("button1").textContent;
let color2 = document.getElementById("button2").textContent;
let color3 = document.getElementById("button3").textContent;
let color4 = document.getElementById("button4").textContent;

function afterbutton1clicked() {
    document.getElementById("colorPickerContainer").style.backgroundColor = color1;
    document.getElementById("selectedColorHexCode").textContent = color1;
}

function afterbutton2clicked() {
    document.getElementById("colorPickerContainer").style.backgroundColor = color2;
    document.getElementById("selectedColorHexCode").textContent = color2;
}

function afterbutton3clicked() {
    document.getElementById("colorPickerContainer").style.backgroundColor = color3;
    document.getElementById("selectedColorHexCode").textContent = color3;
}

function afterbutton4clicked() {
    document.getElementById("colorPickerContainer").style.backgroundColor = color4;
    document.getElementById("selectedColorHexCode").textContent = color4;
}