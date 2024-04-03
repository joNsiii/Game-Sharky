let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let youWin = false;
let fullscreen = false;
let gameRunning = false;
let homeMenu = false;
let msg = document.getElementById("btm");
let muteBtn = document.getElementById("mute-btn");
let fsBtn = document.getElementById("fullscreen-btn");
let homeBtn = document.getElementById("home-btn");

/**
 * Create a new class(World) in canvas
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * Start the game 
 */
function startGame() {
  document.getElementById("main-container").classList.add("d-none");
  document.getElementById("main-menu").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  gameRunning = true;
  checkWindowSize();
  displayInGameMenuButton();
  initLevel();
  init();
}

/**
 * Open controlmenu in mainmenu
 */
function openControlMenu() {
  document.getElementById("main-menu").classList.add("d-none");
  document.getElementById("control-menu").classList.remove("d-none");
}

/**
 * Close controlmenu
 */
function backToMainMenu() {
  document.getElementById("main-menu").classList.remove("d-none");
  document.getElementById("control-menu").classList.add("d-none");
}

/**
 * Show the gameoverscreen after losing the game
 */
function showGameOverScreen() {
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("main-container").classList.remove("d-none");
  document.getElementById("game-over-screen").classList.remove("d-none");
  document.getElementById("canvas").classList.add("d-none");
  hideMobileButton();
  hideInGameMenuButton();
}

/**
 * reload the entire page
 */
function tryAgain() {
  window.location.reload();
}

/**
 * Show the winning screen after complete a level
 */
function showWinScreen() {
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("main-container").classList.remove("d-none");
  document.getElementById("win-screen").classList.remove("d-none");
  hideMobileButton();
  hideInGameMenuButton();
}

/**
 * Checking the size of the window
 */
function checkWindowSize() {
  if (window.innerWidth < 900 || window.innerHeight < 380) {
    displayMobileButton();
  } else {
    hideMobileButton();
  }
}

/**
 * Show a message on load if the window is too small
 */
window.addEventListener("load", function () {
  if (window.innerWidth < 720 || window.innerHeight < 380) {
    document.getElementById("turn-device-message").style.display = "block";
    hideInGameMenuButton();
  }
});

/**
 * show a message on resize if the window is too small
 */
window.addEventListener("resize", function () {
  if ((gameRunning && window.innerWidth < 900) || window.innerHeight < 480) {
    displayMobileButton();
  } else {
    hideMobileButton();
  }
  if (window.innerWidth < 720 || window.innerHeight < 380) {
    document.getElementById("turn-device-message").style.display = "block";
    hideMobileButton();
    hideInGameMenuButton();
  } else {
    document.getElementById("turn-device-message").style.display = "none";
    displayInGameMenuButton();
  }
});

/**
 * Display mobile button if the game is running
 */
function displayMobileButton() {
  if (gameRunning) {
    document.getElementById("control-btn").style.display = "block";
  }
}

/**
 * Hide mobile button
 */
function hideMobileButton() {
  document.getElementById("control-btn").style.display = "none";
}

/**
 * Display ingamemenu button if the game is running
 */
function displayInGameMenuButton() {
  if (gameRunning) {
    document.getElementById("ingame-menu-btn").style.display = "block";
  }
}

/**
 * Hide ingamemenu button
 */
function hideInGameMenuButton() {
  document.getElementById("ingame-menu-btn").style.display = "none";
}

/**
 * Eventlistener for fullscreen button
 */
fsBtn.addEventListener("click", () => {
  switchImageForFullscreen();
  switchFullScreen();
});

/**
 * switching images for fullscreenbutton
 */
function switchImageForFullscreen() {
  let img = document.getElementById("fs-img");
  if (img.src.includes("enter-fs.png")) {
    img.src = "img/sharkie-images/exit-fs.png";
  } else {
    img.src = "img/sharkie-images/enter-fs.png";
  }
}

/**
 * Toogle between fullscreen and window mode
 */
function switchFullScreen() {
  let canvasFullScreen = document.getElementById("fullscreen-div");
  world.fullScreen = !world.fullScreen;
  if (world.fullScreen) {
    if (canvasFullScreen.requestFullscreen) {
      canvasFullScreen.requestFullscreen();
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

/**
 * Eventlistener for mute button
 */
muteBtn.addEventListener("click", () => {
  switchImageForMuteBtn();
  if(!world.audio.muted) {
    world.audio.muteAllSounds();
  }else {
    world.audio.unmuteAllSounds();
  }
});

/**
 * switching images from mute button
 */
function switchImageForMuteBtn() {
  let img = document.getElementById("mute-img");
  if (img.src.includes("mute-on.png")) {
    img.src = "img/sharkie-images/mute-off.png";
  } else {
    img.src = "img/sharkie-images/mute-on.png";
  }
}

/**
 * Eventlistener for mute button
 */
homeBtn.addEventListener("click", () => {
  homeMenu = !homeMenu;
  if (homeMenu) {
    msg.classList.remove("d-none");
  } else {
    msg.classList.add("d-none");
  }
});

/**
 * reload page to reset the game
 */
function backToMenu() {
  window.location.reload();
}

/**
 * Close homemenu
 */
function closeMenu() {
  msg.classList.add("d-none");
  homeMenu = !homeMenu;
}

