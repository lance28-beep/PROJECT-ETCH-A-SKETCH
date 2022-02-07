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

// mouse up and mouse down event
let [mouseDown, mouseOver] = [false, false]
let [color, random, eraser] = [true, false, false]

//function that will update color, backgroundColor and size of the sketch
const setColor = (color) => (updateColor = color)
const setBackgroundColor = (color) => (updateBackgroundColor = color)
const setSize = (size) => (updateSize = size)
//GET ELEMENT
const sketch = document.querySelector('.sketch')
const gridSize = document.querySelector('#sizeSlider')
///button
const userColor = document.querySelector('#color #primary_color')
const backGround = document.querySelector('#backGround #primary_color')
const randomColor = document.querySelector('#randomColor')
const eraserbutton = document.querySelector('#eraser')
const reset = document.querySelector('#reset')

///reset sketch to its default
reset.onclick = () => {
  //set default color
  setColor(defaultColor)
  //set default background color
  setBackgroundColor(defaultBackgroundColor)
  sketch.style.backgroundColor = updateBackgroundColor
  //set default size
  setSize(defaultSize)
  //create grid
  createGrid(defaultSize)
}
///button event listener
userColor.onchange = (e) => {
  random = false
  color = true
  eraser = false
  setColor(e.target.value)
}

eraserbutton.onclick = () => {
  eraser = true
  color = false
  random = false
  setColor(updateBackgroundColor)
}
//update or change current sketch background
sketch.style.backgroundColor = updateBackgroundColor
backGround.onchange = (e) => {
  setBackgroundColor(e.target.value)
  sketch.style.backgroundColor = updateBackgroundColor
}
randomColor.onclick = () => {
  random = true
  color = false
  eraser = false
}
//create a random color
const randomColorGenerator = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  return randomColor
}

///set all default
//---------FOR REVIEW.NOT WORKING ACCORDING TO MY INTENT---------
//create a listener that will set mouse down true if mouse is down
// sketch.addEventListener('mousedown', (e) => {
//   if(e.bubbles){
//     mouseDown = true
//     console.log(e.bubbles)
//   }
// })
//---------END---------
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
    div.addEventListener('mousedown', (e) => {
      mouseDown = true
    })
    div.addEventListener('mouseover', (e) => {
      console.log('mouse over')
      e.target.style.backgroundColor = `${
        color
          ? updateColor
          : random
          ? randomColorGenerator()
          : eraser
          ? updateBackgroundColor
          : updateBackgroundColor
      }`

      //---------FOR REVIEW.NOT WORKING ACCORDING TO MY INTENT---------
      //draw a line if mouse is down and hovering over the div
      // if (mouseDown && mouseOver) {
      //   e.target.style.backgroundColor = 'red'
      // }
      //---------END---------
    })
    div.addEventListener('mouseup', () => {
      mouseDown = false
    })
    sketch.appendChild(div)
  }
  //set the style of the sketch
  sketch.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`
  //create event listener for each grid item
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

//create a event listener for each grid item that will draw change the background color of each grid item when mouse is over and mouse is down.
// div.forEach((item) => {
//   item.addEventListener('mouseover', (e) => {
//     console.log(e.target)
//     mouseOver = true
//   })
//   item.addEventListener('mousedown', (e) => {
//     mouseDown = true
//     //if mouse is over
//     if (mouseOver && mouseDown) {
//       //change the background color of the grid item
//       e.target.style.backgroundColor = 'red'
//     }
//   })
//   item.addEventListener('mouseup', (e) => {
//     //set mouse back
//     mouseDown = false
//     mouseOver = false
//   })
// })
