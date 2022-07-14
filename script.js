const container = document.querySelector('.container');
let gridSize = 16;
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
    container.appendChild(div);
  }
}
