const grid = document.querySelector('#grid')
var rangeSlider = document.getElementById('sizeSlider')
//create div append to the

const createGrid = (e) => {
  const newGrid = document.createElement('div')
  const gridSize = e.target.value
  console.log(gridSize)
  grid.appendChild(newGrid)
  newGrid.innerHTML = 'hello world'
}

rangeSlider.addEventListener('input', createGrid)
