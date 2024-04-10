let body = document.querySelector("body");
let button = document.querySelector("button");
let counter = 0;

button.addEventListener("click", () => {
    let container = document.querySelector(`.container${counter}`);
    counter++;
    const div = document.createElement("div");
    div.setAttribute("class", `container${counter}`);
    div.style.border = "15px solid transparent"; 
    div.style.borderRadius = "50%"; 
    div.style.height = "15%";
    div.style.width = "15%";
    div.style.backgroundColor = getRandomColor();
    div.style.position =  randomize(); //??
    container.appendChild(div);
    if (div.offsetWidth < 150 || div.offsetHeight < 100) {
     resetContainer();
     }
    div.style.borderColor = getRandomColor();

});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function resetContainer() {
    const firstDiv = document.querySelector(".container1");
    firstDiv.remove();
    counter = 0;
}


//function to generate random circle parameters, x,y and radius
     function randomize() {
        return "#" + Math.floor(Math.random() * 501)
}
  