const count = document.querySelector(".count-txt");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");
const icon = document.querySelector(".fas");

buttons.addEventListener("click", function(e) {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    } else if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    } else if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
});


function setColor() {
    if(count.innerHTML > 0){
        count.style.borderColor = "lightgreen";
    } else if(count.innerHTML < 0){
        count.style.borderColor = "#db6400";
    } else {
        count.style.borderColor = "white";
    }
}