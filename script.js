//set up defaut color, backgroundColor and size of the sketch
const defaultColor = '#326765'
const defaultBackgroundColor = '#F5F5C6'
const defaultSize = 16

///update color, backgroundColor and size of the sketch
let [updateColor, updateBackgroundColor, updateSize] = [
  defaultColor,
  defaultBackgroundColor,
  defaultSize,
]

//function that will update color, backgroundColor and size of the sketch
const setColor = (color) => {
  updateColor = color
}
const setBackgroundColor = (color) => {
  updateBackgroundColor = color
}
const setSize = (size) => {
  updateSize = size
}

//GET ELEMENT
const sketch = document.querySelector('.sketch')
const gridSize = document.querySelector('#sizeSlider')
const gridItem = document.querySelectorAll('.grid-item')

// create a function that will create div depending on the current size
const createGrid = (size) => {
  //clear the sketch
  while (sketch.firstChild) {
    sketch.removeChild(sketch.firstChild)
  }
  //create div
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('grid-item')
    sketch.appendChild(div)
  }
  //set the style of the sketch
  sketch.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

  //create event listener for each grid item
  gridItem.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = updateBackgroundColor
  })
}

///create a function that will listen to the grid size slider
gridSize.addEventListener('input', (e) => {
  //update the size of the sketch
  setSize(e.target.value)
  //create grid
  createGrid(e.target.value)
})

///set default when windows load
window.onload = () => {
  //set default color
  setColor(defaultColor)
  //set default background color
  setBackgroundColor(defaultBackgroundColor)
  //set default size
  setSize(defaultSize)
  //create grid
  createGrid(defaultSize)
}
