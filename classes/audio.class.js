class SoundManager{
  muted = false;

  allSounds = [
    (this.bgmusic = new Audio("audio/bg-music.mp3")),
    (this.bossMusic = new Audio("audio/boss-music-bg.mp3")),
    (this.bottle = new Audio("audio/bottle-collected.mp3")),
    (this.bubble = new Audio("audio/bubble-sound.mp3")),
    (this.coin = new Audio("audio/coin-collected-new.mp3")),
    (this.swim = new Audio("audio/sharky-swim.mp3")),
    (this.hit = new Audio("audio/hit.mp3")),
    (this.win = new Audio("audio/victory.mp3")),
    (this.enemyHit = new Audio("audio/enemy-hit.mp3")),
    (this.enemyDead = new Audio("audio/enemy-dead.mp3")),
    (this.sharkyHit = new Audio("audio/sharky-hit.mp3")),
    (this.electricSound = new Audio("audio/electric_sound.mp3")),
    (this.gameOver = new Audio("audio/game-over.mp3")),
  ];

  constructor() {
    this.startVolume();
  }

  /**
   * playing a sound
   *
   * @param {string} sound - Name of the soundfile
   */
  playSound(sound) {
    this[sound].play();
    if (sound === "bgmusic") {
      this.bgmusic.onended = () => {
        this.bgmusic.play();
      };
    }
    if (sound === "gameOver") {
      this.gameOver.onended = () => {
        this.gameOver.volume = 0;
      };
    }
  }

  startVolume() {
    this.swim.volume = 0.3;
  }

  /**
   * Playing a sound again if he is currently playing
   *
   * @param {string} sound - Name of the soundfile
   */
  playCloneSound(sound) {
    this[sound].cloneNode().play();
  }

  /**
   * Stop playing a sound
   *
   * @param {string} sound - Name of the soundfile
   */
  stopSound(sound) {
    this[sound].pause();
  }

  /**
   * Set the volume of a sound
   *
   * @param {string} sound - Name of the soundfile
   * @param {number} volume - Number bettwen 0 - 1
   */
  setVolume(sound, volume) {
    this[sound].volume = volume;
  }

  /**
   * Mute all sounds in canvas
   */
  muteAllSounds() {
    this.allSounds.forEach((sound) => {
      sound.volume = 0;
      this.muted = true;
    });
  }

  /**
   * Unmute all sounds in canvas
   */
  unmuteAllSounds() {
    this.allSounds.forEach((sound) => {
      sound.volume = 0.2;
      this.muted = false;
      this.bgmusic.volume = 0.2;
      this.coin.volume = 1;
      this.bottle.volume = 1;
    });
  }
}
