var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");

//  body.style.background = "green"


function backgroundGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background;
}


// color1.addEventListener("input",backgroundGradient)

// color2.addEventListener("input",backgroundGradient);

