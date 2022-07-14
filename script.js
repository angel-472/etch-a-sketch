const container = document.querySelector('.container');
const colorPicker = document.querySelector('.input-color');
const sizeButton = document.querySelector('.input-size');
let gridSize = 16;
let color = "#000000";


createGrid();

function createGrid(){
  container.innerHTML = "";
  let totalBoxes = gridSize * gridSize;
  boxWidth = container.clientWidth / gridSize;
  boxHeight = container.clientHeight / gridSize;
  for(i = 0; i < totalBoxes; i++){
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.minWidth = `${boxWidth}px`;
    div.style.minHeight = `${boxHeight}px`;
    let element = container.appendChild(div);
    element.addEventListener('mouseenter', boxHoverEnter);
    element.addEventListener('mouseleave', boxHoverLeave);
    element.addEventListener('click', boxClick)
    element.addEventListener('contextmenu', boxErase)
  }
}

function boxHoverEnter(event) {
  let element = event.target;
  element.style.backgroundColor = color;
}

function boxHoverLeave(event) {
  let element = event.target;
  if(element.id !== null){
    element.style.backgroundColor = element.id;
  } else {
    element.style.backgroundColor = null;
  }
}

function boxClick(event) {
  let element = event.target;
  element.style.backgroundColor = color;
  element.id = color;
}

function boxErase(event) {
  event.preventDefault();
  let element = event.target;
  element.style.backgroundColor = null;
  element.id = "";
}

colorPicker.addEventListener('change', function(e){
  color = e.target.value;
});

sizeButton.addEventListener('click', function(e){
  let size = prompt("Enter the new grid size (max: 100)", gridSize);
  if(size > 0 && size <= 100){
    gridSize = size;
    createGrid();
  }
});
