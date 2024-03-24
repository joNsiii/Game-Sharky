let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
}

window.addEventListener('keydown', (e) =>{
    if(e.code == 'ArrowLeft') {
        keyboard.leftKey = true;
    }
    else if(e.code == 'ArrowRight') {
        keyboard.rightKey = true;
    }
    else if(e.code == 'ArrowUp') {
        keyboard.upKey = true;
    }
    else if(e.code == 'ArrowDown') {
        keyboard.downKey = true;
    }
    else if(e.code == 'Space') {
        keyboard.spaceKey = true;
    }
    else if(e.code == 'KeyF') {
        keyboard.keyF = true;
    }
});

window.addEventListener('keyup', (e) =>{
    if(e.code == 'ArrowLeft') {
        keyboard.leftKey = false;
    }
    if(e.code == 'ArrowRight') {
        keyboard.rightKey = false;
    }
    if(e.code == 'ArrowUp') {
        keyboard.upKey = false;
    }
    if(e.code == 'ArrowDown') {
        keyboard.downKey = false;
    }
    if(e.code == 'Space') {
        keyboard.spaceKey = false;
    }
    if(e.code == 'KeyF') {
        keyboard.keyF = false;
    }
});