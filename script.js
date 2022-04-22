const container = document.querySelector('.container');
const PADSIZE = 500;
let mouseHold = false;

function createGrid(size) {
    let squareSize = PADSIZE / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

createGrid(16);

container.addEventListener('mousedown', () => mouseHold = true);
container.addEventListener('mouseup', () => mouseHold = false);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
   if(mouseHold) square.classList.add('painted'); 
}));
