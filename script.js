let button = document.querySelector("button");
let container = document.querySelector("#container");

button.addEventListener("click", () => {
    const circle = document.createElement("div");
    
    circle.classList.add("circle");
    circle.style.backgroundColor = getRandomColor();

    setCirclePositionAndSize(circle);
    container.appendChild(circle);
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function setCirclePositionAndSize(circle) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const circleSize = Math.min(containerWidth, containerHeight) * 0.10; 

    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);

    circle.style.width = circleSize + "px"
    circle.style.height = circleSize + "px";
    circle.style.left = randomX + "%";
    circle.style.top = randomY + "%";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
}
