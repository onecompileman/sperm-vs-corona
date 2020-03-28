p5.disableFriendlyErrors = true;

let gameManager;

function preload() {
  gameManager = new GameManager();
  gameManager.initSoundManager();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameManager.initScreenManager();
  gameManager.showMenuScreen();
}

function draw() {
  background(50);
  gameManager.render();
}
