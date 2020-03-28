class ScreenManager {
  constructor() {
    this.loadingScreen = document.querySelector('#loadingScreen');
    this.menuScreen = document.querySelector('#menuScreen');
    this.pauseMenu = document.querySelector('#pauseMenu');
    this.about = document.querySelector('#aboutScreen');
    this.gameOver = document.querySelector('#gameOver');
    this.howToPlay = document.querySelector('#howToPlay');
    this.inGameUI = document.querySelector('#inGameUI');
  }

  hideAllScreens() {
    Object.keys(this).forEach(screen => {
      this[screen].style.display = 'none';
    });
  }
}
