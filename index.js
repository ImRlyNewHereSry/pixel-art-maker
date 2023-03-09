/* Steps to making this work--
******REMEMBER THE MVP-- Minimum viable product. Push out a MINIMUM VIABLE PRODUCT.
1. Create a CSS file 
2. Create a JS file
3. Link them both into the html file, you can start by using the ! 
  command in a blank HTML to create the tree. then use the command "link"
to link JS and CSS files. 
3. Define a grid-- make it x pixels high, x pixels long. Use CSS 
4. To make a pixel clickable you need to add an event listener.
-- remember, a listener is a method you can use on the individual pixel of
-- that grid. This method takes in the "event" that it's supposed to be looking
-- for and the action to take when the action has happened.  

to make a pixel turn red, you can create a new function that applies 'red'
to the background of the pixel/grid.

--WHERE I LEFT OFF and need help -- 
***** THIS IS A BONUS ****** 5. Right now I can only single click on one pixel at a time, 
but I want to hold down my click and drag across other pixels. I think I need to find a 
correct second event listener that allows me to do so.
6. I need to create a color picker
--a. create a rectangle with a background and a border and beveled edges
--b. create circles using the same method we used in the grid/pixels but add a heavy bevel so they're circular. 
--c. give those circles colored backgrounds
--d. associate each color circle to a corresponding color selector in JS, and add an event listener to each one 
----that will change the currentColor to the clicked on circle and allow the user to 'paint' with that color.
7. Debug
8. When the functionality is there, and bugs have been squashed, 
then start working on front end tweaks (UI) and then UE 
(Updating the title and graphics with pixel font, add a background image)

--BONUS ideas-- 
1. Allow users to save their image as a JPG
2. Add a mellow song for the background to play and add a play/pause/volume button




MAKE BUTTONS
Conceptualize the Bob Ross collor pallet thing
create func makeButtons(currentColor) {
  let button = document.createElement('div');

  colorPalletteContainer.appendChild(button);
  button.className = "button";


}
*/

// const canvasEl = document.querySelector(".canvas");

// let currentColor = 'green';
// let pixelElement = document.createElement("div");
// pixelElement.classList.add("pixel");

// function changeColor(pixel) {
//   pixel.style.backgroundColor = currentColor;
//   //pixel.classList.add(color);
// }
//-------- Start Code from ChatGPT
// const pixelGrid = document.getElementById("pixel-grid");
// const clearButton = document.getElementById("clear-button");

// // Create grid of pixels
// for (let i = 0; i < 20; i++) {
//   for (let j = 0; j < 20; j++) {
//     const pixel = document.createElement("div");
//     pixel.classList.add("pixel");
//     pixelGrid.appendChild(pixel);
//   }
// }

// // Add event listener to each pixel
// const pixels = document.querySelectorAll(".pixel");
// pixels.forEach((pixel) => {
//   pixel.addEventListener("click", () => {
//     pixel.style.backgroundColor = "black";
//   });
// });

// // Add event listener to clear button
// clearButton.addEventListener("click", () => {
//   pixels.forEach((pixel) => {
//     pixel.style.backgroundColor = "white";
//   });
// });

//------ End code from Chat GPT

// create pixels, and add event listener to each pixel
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = "black";
  });
});

// Add clear button, and add event listener to clear button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
});

function createGrid() {
  //simple here, the purpose is to make the layout first, which is the grid of pixels.
  for (let i = 0; i < 500; i++) {
    //we're iterating the grid over 1000x's, giving the size of our grid.
    const pixel = document.createElement("div"); //here we're creating a pixel in the grid and creating a div element to the document to host where our pixels will go.
    pixel.classList.add("pixel"); //here we're adding "pixel" to our class list to further specify where we organize our pixels.
    pixel.addEventListener("click", function () {
      pixel.style.backgroundColor = currentColor;
    }); //here, we're adding the listener "click" to the pixel
    // and we're telling it - hey when you hear a user click inside this pixel we want you to
    //run the function clickToPaint.
    let grid = document.querySelector(".grid");
    grid.append(pixel); //here we are essentially 'returning' the change by way of appending the document in real time, but not actually using the return func so that it can continue to iterate infinitely.
  }
}

createGrid(); // here we invoke the function, whereas before we only described it. This is what actually calls the function to work.

// function clickToPaint(event) {
//   // here's where we'll be making our changes to the pixel's colors.
//   event.target.style.backgroundColor = currentColor; //we're saying- At this event, (click) we want the computer to target the background color of the pixel and modify it to red.
// }
// function createColorPalette(color) {
//   let colorArr = ['green', 'blue', 'red']
// }

let currentColor = "red";

const colorPalette = document.createElement("div");
colorPalette.classList.add("color-palette");

const redButton = document.createElement("div");
redButton.classList.add("red-button");

// {/* <div class="red-button"></div> */}

const blueButton = document.createElement("div");
blueButton.classList.add("blue-button");
blueButton.addEventListener("click", function () {
  currentColor = "blue";
});

const yellowButton = document.createElement("div");
yellowButton.classList.add("yellow-button");
yellowButton.addEventListener("click", function () {
  currentColor = "yellow";
});

const greenButton = document.createElement("div");
greenButton.classList.add("green-button");
greenButton.addEventListener("click", () => {
  currentColor = "green";
});

const blackButton = document.createElement("div");
blackButton.classList.add("black-button");
blackButton.addEventListener("click", function () {
  currentColor = "black";
});

colorPalette.append(
  redButton,
  blueButton,
  yellowButton,
  greenButton,
  blackButton
);

document.body.appendChild(colorPalette);

// const draggableElement = document.getElementsByClassName("grid");

// let startX, startY, deltaX, deltaY;

// draggableElement.addEventListener("mousedown", (event) => {
//   startX = event.clientX;
//   startY = event.clientY;

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);
// });

// function onMouseMove(event) {
//   deltaX = event.clientX - startX;
//   deltaY = event.clientY - startY;

//   draggableElement.style.left = `${draggableElement.offsetLeft + deltaX}px`;
//   draggableElement.style.top = `${draggableElement.offsetTop + deltaY}px`;

//   startX = event.clientX;
//   startY = event.clientY;
// }

// function onMouseUp() {
//   document.removeEventListener("mousemove", onMouseMove);
//   document.removeEventListener("mouseup", onMouseUp);
// }

// In JavaScript, when an event is triggered
//(such as a click, hover, or keypress), an event object is automatically created by
//the browser and passed as an argument to the event listener function that's
//responsible for handling the event.

// By convention, this event object is often named event or e, and it contains
//information about the event that was triggered, such as:

// The type of the event (e.g. "click", "mouseover", "keydown")
// The target element that the event was triggered on
// The position of the mouse pointer (for mouse events)
// The key that was pressed (for keyboard events)
// The time at which the event occurred
// Other properties and methods that provide additional details about the event
// You can access these properties and methods of the event object inside your
//event listener function to perform specific actions based on the event that was
//triggered. For example, you might use the event.target property to identify the
//element that was clicked, or use the event.preventDefault() method to prevent the
//default behavior of an event (such as following a link or submitting a form).
