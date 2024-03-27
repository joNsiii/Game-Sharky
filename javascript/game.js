let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let youWin = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
}

function startGame() {
    document.getElementById('main-container').classList.add('d-none');
    document.getElementById('main-menu').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    init();
}

function openControlMenu() {
    document.getElementById('main-menu').classList.add('d-none');
    document.getElementById('control-menu').classList.remove('d-none');
}

function backToMainMenu() {
    document.getElementById('main-menu').classList.remove('d-none');
    document.getElementById('control-menu').classList.add('d-none');
}

function showGameOverScreen() {
    document.getElementById('end-screen').classList.remove('d-none');
    document.getElementById('main-container').classList.remove('d-none');
    document.getElementById('game-over-screen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
}

function tryAgain() {
    window.location.reload();
}

function showWinScreen() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('end-screen').classList.remove('d-none');
    document.getElementById('main-container').classList.remove('d-none');
    document.getElementById('win-screen').classList.remove('d-none');
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