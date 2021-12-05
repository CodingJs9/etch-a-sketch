const gridSize = document.querySelector('input');
const createGridBtn = document.querySelector('#create-grid');
const clearGridBtn = document.querySelector('#clear-grid');
const gridContainer = document.querySelector('.grid-container');

// Prevents the form from reloading the page
document.querySelector('form').onsubmit = (e) => e.preventDefault();

// Event Listeners
createGridBtn.addEventListener('click', createGrid);
clearGridBtn.addEventListener('click', clearGrid);

// Functions
function createGrid() {
	if (gridSize.value > 64) return alert('Grid size cannot be higher than 64');
	clearGrid();
	let numberOfCells = gridSize.value * gridSize.value;
	gridContainer.style.setProperty('--grid-size', gridSize.value);

	for (let i = 0; i < numberOfCells; i++) {
		let gridCell = document.createElement('div');
		gridCell.addEventListener('mouseover', () =>
			gridCell.classList.add('coloured')
		);
		gridContainer.appendChild(gridCell);
	}
	gridSize.value = null;
}

function clearGrid() {
	while (gridContainer.firstChild) {
		gridContainer.removeChild(gridContainer.firstChild);
	}
}
