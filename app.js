// get the elements from html
let canvas = document.querySelector('.canvas')
let size1 = document.querySelector('.size1')
let size2 = document.querySelector('.size2')
let size3 = document.querySelector('.size3')
let size4 = document.querySelector('.size4')
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let color3 = document.querySelector('.color3')
let color4 = document.querySelector('.color4')

let pallete = document.querySelector('#color')





// declare global variable so that they are accessible form anywhere in the file
let hex
let box


// by default no size is selected, so all of the variable are false

let size10 = false;
let size30 = false
let size50 = false;
let size60 = false

// by default no color is selected, so all of the variable are false


let isColor1 = false
let isColor2 = false
let isColor3 = false
let isColor4 = false
let isPallete = false



// if pallete is selected, all of the other colors are marked false 
pallete.addEventListener('input', () => {
    isPallete = true
    isColor1 = false
    isColor2 = false
    isColor3 = false
    isColor4 = false
    hex = pallete.value
})


// if color1 is selected, all of the other colors are marked false 

color1.addEventListener('click', () => {
    isColor1 = true
    isColor2 = false
    isColor3 = false
    isColor4 = false
    isPallete = false
})

// if color2 is selected, all of the other colors are marked false 

color2.addEventListener('click', () => {
    isColor1 = false
    isColor2 = true
    isColor3 = false
    isColor4 = false
    isPallete = false
})


// if color3 is selected, all of the other colors are marked false 

color3.addEventListener('click', () => {
    isColor1 = false
    isColor2 = false
    isColor3 = true
    isColor4 = false
    isPallete = false
})


// if color4 is selected, all of the other colors are marked false 

color4.addEventListener('click', () => {
    isColor1 = false
    isColor2 = false
    isColor3 = false
    isColor4 = true
    isPallete = false
})



// check if size 1 is  selected

size1.addEventListener('click', () => {
    size10 = true
    size30 = false
    size50 = false;
    size60 = false

})



// check if size 2 is  selected

size2.addEventListener('click', () => {
    size10 = false;
    size30 = true
    size50 = false;
    size60 = false
})

// check if size 3 is  selected

size3.addEventListener('click', () => {
    size10 = false;
    size30 = true
    size50 = false;
    size60 = false
})



// check if size 4 is  selected

size4.addEventListener('click', () => {
    size10 = false;
    size30 = false
    size50 = false;
    size60 = true
})





// check if mouse is down/holded

let painting = false;


// paint as long the mouse is being holded

canvas.addEventListener('mousedown', () => {
    painting = true
})

// paint as long the mouse is being left
canvas.addEventListener('mouseup', () => {
    painting = false
})





// if painting variable is true, only then paint

canvas.addEventListener('mousemove', (e) => {
    if (painting) {
        let xPos = e.clientX
        let yPos = e.clientY
        box = document.createElement('div')
        box.classList.add('paint')

        if (size10) {
            box.style.height = '10px'
            box.style.width = '10px'
        } else if (size30) {
            box.style.height = '30px'
            box.style.width = '30px'
        } else if (size50) {
            box.style.height = '50px'
            box.style.width = '50px'
        } else if (size60) {
            box.style.height = '60px'
            box.style.width = '60px'

        }
        if (isColor1) {
            box.style.background = 'red'
        } else if (isColor2) {
            box.style.background = 'orange'
        } else if (isColor3) {
            box.style.background = 'blue'
        } else if (isColor4) {
            box.style.background = 'green'

        } else if (isPallete) {
            box.style.background = hex

        }
        box.style.left = `${xPos - 80}px`
        box.style.top = `${yPos - 120}px`
        canvas.append(box)
    }




})



