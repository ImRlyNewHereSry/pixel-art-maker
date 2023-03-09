const pixels = document.querySelectorAll(".pixel");

function createGrid() {
  for (let i = 0; i < 500; i++) {
    const pixel = document.createElement("div"); 
    pixel.classList.add("pixel"); 
    pixel.addEventListener("click", function () {
      pixel.style.backgroundColor = currentColor;
    });
    let grid = document.querySelector(".grid");
    grid.append(pixel); 
  }
}

createGrid(); 

function clearDrawing() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "white";
  });
}

let currentColor = "white";

const colorArr = ["red", "green", "blue", "black", "white"];

const colorPalette = document.createElement("div");
colorPalette.classList.add("color-palette");

colorArr.forEach(color => {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color");
  colorDiv.style.backgroundColor = color;
  colorDiv.addEventListener("click", () => {
    currentColor = color;
  });
  colorPalette.appendChild(colorDiv);
});
// Loop through the colorArr and create a button for each color
// for (let i = 0; i < colorArr.length; i++) {
//     const colorButton = document.createElement("button");
//     colorButton.classList.add(`${colorArr[i]}-button`);
//     colorPalette.appendChild(colorButton);
//   }
const paletteContainer = document.querySelector(".palette-container");
paletteContainer.appendChild(colorPalette);

for (let i = 0; i < colorArr.length; i++) {
    const colorButton = document.createElement("button");
    colorButton.classList.add(`${colorArr[i]}-button`);
    colorButton.style.backgroundColor = colorArr[i]; // Set the background color to the corresponding color
    colorButton.addEventListener("click", () => {
      currentColor = colorArr[i]; // Set the current color to the clicked color
    });
    colorPalette.appendChild(colorButton);
  }

let isPainting = false;
const grid = document.querySelector(".grid");

grid.addEventListener("mousedown", () => {
  isPainting = true;
});

grid.addEventListener("mouseup", () => {
  isPainting = false;
});

grid.addEventListener("mousemove", event => {
  if (isPainting) {
    const pixel = event.target;
    if (pixel.classList.contains("pixel")) {
      pixel.style.backgroundColor = currentColor;
    }
  }
});
