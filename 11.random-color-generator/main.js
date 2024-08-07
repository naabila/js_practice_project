let containerEl = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerEl.appendChild(colorContainer);
}
const colorContainers = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
    colorContainers.forEach((colorContainer) => {
        let newColor = randomColor();
        colorContainer.style.backgroundColor = "#" + newColor;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum, randomNum + 1);
    }
    return color;
}
