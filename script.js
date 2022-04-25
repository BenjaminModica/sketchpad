const container = document.querySelector('.container');
const PADSIZE = 500;
let mouseHold = false;
let rainbow = false;

createGrid(50);

// const sizeBtn = document.querySelector('#sizeBtn');
// sizeBtn.addEventListener('click', replaceGrid);

const sizeSlider = document.querySelector('#sizeSlider');
sizeSlider.addEventListener('mouseup', (e) => replaceGrid(100 - e.target.value));

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => replaceGrid(100 - sizeSlider.value));

const rainbowBox = document.querySelector('#rainbowBox');
rainbowBox.addEventListener('mouseup', () => {
   rainbow = !rainbowBox.checked;
   console.log(rainbowBox.checked);
});

//Removes old grid and replaces it with new one.
function replaceGrid(size) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => container.removeChild(square));
    createGrid(size);
    // console.log(size);
    addEventListeners();
}

//Eventlisteners for all squares in sketchpad. Will "paint" square if mouse is held down
function addEventListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (e) => {
        e.preventDefault();
        if (mouseHold) {
            if (rainbow) {
                paintRainbow(square);
            } else {
                square.classList.add('painted');
            }
        }
    }))
}

function paintRainbow(square) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//Listens for when user holds down mouse
container.addEventListener('mousedown', (e) => {
    e.preventDefault();
    mouseHold = true;
});

//Listens for when user releases mouse
container.addEventListener('mouseup', (e) => {
    e.preventDefault();
    mouseHold = false;
});



//Adds size X size grid with divs. 
function createGrid(size) {
    if (size > 100) size = 100;
    let squareSize = PADSIZE / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    addEventListeners();
}
