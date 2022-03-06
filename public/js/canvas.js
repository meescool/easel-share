const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let x2 = 0;
let y2 = 0;

let drawing = false;

let color = '000';
let size = 1;

erase = false;

bounds = canvas.getBoundingClientRect();

function changeColor(newColor){
    color = newColor;
}

function changeSize(newSize){
    size = newSize;
}

function eraseAll(e){
    if(e =1){
        erase = true;

    }

    if (erase == true){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        erase = false;
    }
}

const eraseBtn = document.getElementById('eraseAll');

eraseBtn.addEventListener('click', function(e){
    console.log('clear')
    ctx.clearRect(0,0,canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', function(e){

    x = e.clientX - (bounds.left *1.5 );
    y = e.clientY - bounds.top ;
    drawing = true;
    // render();

});

canvas.addEventListener(('mousemove'), function(e){
    
    if(drawing == true){


    x2 = e.clientX -  (bounds.left *1.5 );
    y2 = e.clientY -  (bounds.top *1.5 ) ;
    render();

    x = e.clientX - (bounds.left *1.5 ) ;
    y = e.clientY - (bounds.top *1.5 );
    }
});

canvas.addEventListener(('mouseup'), function(e){
    // x2 = e.clientX - bounds.left;
    // y2 = e.clientY - bounds.top;
    drawing = false;
    
});





function render(){

    ctx.lineWidth= size;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    
}
