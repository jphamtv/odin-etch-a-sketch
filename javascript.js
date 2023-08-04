/* javascript.js */

const btnSetGrid = document.getElementById('btn-set-grid');

btnSetGrid.addEventListener('click', () => {
  const input = prompt('How many squares per side? \n Enter a number between 1–100.');
  const numOfSquares = input;

  if (input <= 100 && input > 0) {
    resetGrid();
    createRows(numOfSquares);
  } else {
    return alert('Must enter a number between 1-100');
  }
});


function resetGrid() {
  const gridContainer = document.getElementById('grid-container');
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
}


function createRows(numOfSquares) {
  // Get element with id 'grid-container'
  const gridContainer = document.getElementById('grid-container');

  // Loop to create n rows
  for (let i = 0; i < numOfSquares; i++) {
    const divRow = document.createElement('div');
    divRow.className = 'row';
    gridContainer.appendChild(divRow);
  }
  // Create columns after rows are created
  createColumns(numOfSquares);
}


function createColumns(numOfSquares) {
  // Get all divs with class 'row'
  const divRowElements = document.querySelectorAll('div.row');

  // Loop to create n columns
  for (let j = numOfSquares; j > 0; j--) {
    divRowElements.forEach((divRowElement) => {
      const divCol = document.createElement('div');
      divCol.className = 'col';
      divRowElement.appendChild(divCol);  
      divCol.addEventListener('mouseenter', changeSquareColor);
    });
  }
}


function changeSquareColor(event) {
  event.target.style.backgroundColor = 'black';
}