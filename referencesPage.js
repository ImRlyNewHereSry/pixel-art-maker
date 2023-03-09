let container = document.querySelector('#container'); // this is also how you access it in css
let colorPaletteContainer = document.querySelector('#colorPaletteContainer'); // create the bottom box for pallete colors in which we will put our buttons
let selectedColor;

 function makeBox(){
    var box = document.createElement('div');
    container.appendChild(box); //<=== instead of appending the box to the canvas we need to append it to the container...ok? take a look at the css now
    box.className = "box";
    box.style.width = '20px';
    box.style.height = '20px';
    box.style.margin = '0';
    box.style.border = '1px solid black';
    box.style.backgroundColor = "white";
    box.addEventListener("click", function(e) {
    box.style.backgroundColor = selectedColor;
    console.log(box.style.backgroundColor);

    })
 }

makeBox();

function duplicateBoxes () {
for (let i = 0; i < 1295; i++){
    makeBox();
}
}
duplicateBoxes();

function makeButtons(currentColor) {
    var button = document.createElement('div');

    colorPaletteContainer.appendChild(button);
    button.className = "button";

    button.style.width = '15px';
    button.style.height = '15px';
    button.style.border = "1px solid black";
    button.style.backgroundColor = currentColor; 
    button.addEventListener("click", function(e) {
    selectedColor = currentColor;
    console.log(selectedColor);

    })


}


function duplicateButtons() {
    var colors = ["red", "green", "blue", "yellow"];
    for (let i = 0; i < colors.length; i++) {
        makeButtons(colors[i])

    }

}
duplicateButtons();