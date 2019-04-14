const containerDiv = document.querySelector('#container');
const clearButton = document.querySelector('#clear-button');
let gridSize = 16;
clearButton.addEventListener("click", getGridSize);

makeGrid (16);

function getGridSize () {
  let newSize = prompt("Enter size of new grid:");
  makeGrid (newSize);
}
function darken (e) {
  let opacity = Number(e.target.style.opacity);
  opacity += 0.1;
  e.target.style.opacity = opacity;
}
function makeGrid (gridSize) {
  //clear old grid
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
  //create new grid
  let cellCount = gridSize ** 2;
  let gridWidth = Math.min (window.innerWidth, window.innerHeight);
  let cellWidth = Math.floor (gridWidth / gridSize);
  let templateText = "";
  for (let i = 0; i < gridSize; i++) {
    templateText += cellWidth + "px ";
  }
  containerDiv.style.display = "grid";
  containerDiv.style.gridTemplate = templateText + " / " + templateText;
  for (let i = 0; i < cellCount; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.opacity = "0";
    newDiv.addEventListener("mouseenter", darken);
    containerDiv.appendChild(newDiv);
  }
}


