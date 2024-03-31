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

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function startGame() {
  document.getElementById("main-container").classList.add("d-none");
  document.getElementById("main-menu").classList.add("d-none");
  document.getElementById("canvas").classList.remove("d-none");
  gameRunning = true;
  checkWindowSize();
  displayInGameMenuButton();
  init();
}

function openControlMenu() {
  document.getElementById("main-menu").classList.add("d-none");
  document.getElementById("control-menu").classList.remove("d-none");
}

function backToMainMenu() {
  document.getElementById("main-menu").classList.remove("d-none");
  document.getElementById("control-menu").classList.add("d-none");
}

function showGameOverScreen() {
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("main-container").classList.remove("d-none");
  document.getElementById("game-over-screen").classList.remove("d-none");
  document.getElementById("canvas").classList.add("d-none");
  hideMobileButton();
  hideInGameMenuButton();
}

function tryAgain() {
  window.location.reload();
}

function showWinScreen() {
  document.getElementById("canvas").classList.add("d-none");
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("main-container").classList.remove("d-none");
  document.getElementById("win-screen").classList.remove("d-none");
  hideMobileButton();
  hideInGameMenuButton();
}

function checkWindowSize() {
  if (window.innerWidth < 900 || window.innerHeight < 480) {
    displayMobileButton();
  } else {
    hideMobileButton();
  }
}

window.addEventListener("load", function () {
  if (window.innerWidth < 720 || window.innerHeight < 380) {
    document.getElementById("turn-device-message").style.display = "block";
    hideInGameMenuButton();
  }
});

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

function displayMobileButton() {
  if (gameRunning) {
    document.getElementById("control-btn").style.display = "block";
  }
}

function hideMobileButton() {
  document.getElementById("control-btn").style.display = "none";
}

function displayInGameMenuButton() {
  if (gameRunning) {
    document.getElementById("ingame-menu-btn").style.display = "block";
  }
}

function hideInGameMenuButton() {
  document.getElementById("ingame-menu-btn").style.display = "none";
}

fsBtn.addEventListener("click", () => {
  let img = document.getElementById("fs-img");
  if (img.src.includes("enter-fs.png")) {
    img.src = "img/sharkie-images/exit-fs.png";
  } else {
    img.src = "img/sharkie-images/enter-fs.png";
  }
  switchFullScreen();
});

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

muteBtn.addEventListener("click", () => {
  let img = document.getElementById("mute-img");
  if (img.src.includes("mute-on.png")) {
    img.src = "img/sharkie-images/mute-off.png";
  } else {
    img.src = "img/sharkie-images/mute-on.png";
  }
  world.muteSound();
});

homeBtn.addEventListener("click", () => {
  homeMenu = !homeMenu;
  if (homeMenu) {
    msg.classList.remove("d-none");
  } else {
    msg.classList.add("d-none");
  }
});

function backToMenu() {
  window.location.reload();
}

function closeMenu() {
  msg.classList.add("d-none");
  homeMenu = !homeMenu;
}
