class SoundManager {
  constructor() {
    this.coronaDead = loadSound('../assets/sounds/corona_dead.wav');
    this.enemyDamage = loadSound('../assets/sounds/enemy_damage.wav');
    this.enemyShoot = loadSound('../assets/sounds/enemy_shoot.wav');
    this.playerDamage = loadSound('../assets/sounds/player_damage.wav');
    this.playerShoot = loadSound('../assets/sounds/player_shoot.wav');
    this.background = loadSound('../assets/sounds/background.mp3');
  }

  stopAllSounds() {
    Object.keys(this).forEach(sound => {
      // if (this[sound].isPlaying()) {
      this[sound].stop();

      console.log(this[sound]);
      // }
    });
  }
}
