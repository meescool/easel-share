/**
 * Script for allowing the user to paint on their canvas
 * 
 * sources:
 *  - This helped me get the right position for the cursor!
 *      https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const eraseBtn = document.getElementById('eraseAll');

// Store initial coordinates
let x = 0;
let y = 0;
// Storing end of the stroke
let x2 = 0;
let y2 = 0;

// needed to allow the user to 'lift' their brush
let drawing = false;

let color = '000';
let size = 1;

erase = false;
// helpful for calculating coordinates
bounds = canvas.getBoundingClientRect();
scaledX = canvas.width / bounds.width;
scaledY = canvas.height / bounds.height;
/**
 * This function gets the color depending on the button being pressed and
 * sets the brush to the new color.
 * @param {String} newColor 
 */
function changeColor(newColor){
    color = newColor;
}

/**
 * This function gets the new size depending on the button being pressed.
 * @param {Int} newSize 
 */
function changeSize(newSize){
    size = newSize;
}

/**
 * This checks if the user pressed the erase all button, if so then 
 * the canvas will be cleared.
 * @param {Bool} e 
 */
function eraseAll(e){
    if(e =1){
        erase = true;

    }

    if (erase == true){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        erase = false;
    }
}

eraseBtn.addEventListener('click', function(e){
    console.log('clear')
    ctx.clearRect(0,0,canvas.width, canvas.height);
});

/**
 * This event listener is for getting the location of where the mouse is down
 */
canvas.addEventListener('mousedown', function(e){

    x = (e.clientX - bounds.left ) * scaledX;
    y = (e.clientY -  bounds.top) * scaledY;
    drawing = true;

});

/**
 * This event listener is for getting the location of where the mouse moves to,
 * and then renders the result, it then stores the coordinates as the initial coordinates
 */
canvas.addEventListener(('mousemove'), function(e){
    
    if(drawing == true){


    x2 = (e.clientX - bounds.left) * scaledX;
    y2 = (e.clientY - bounds.top) * scaledY;
    render();

    x = (e.clientX - bounds.left) * scaledX;
    y = (e.clientY - bounds.top) * scaledY;
    }
});

/**
 * This event listener is for preventing the 'brush' from drawing when the user stops
 * holding the mouse.
 */
canvas.addEventListener(('mouseup'), function(e){
    drawing = false;
    
});

/**
 * Simple render function, draws line strokes
 */
function render(){

    ctx.lineWidth= size;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    
}
