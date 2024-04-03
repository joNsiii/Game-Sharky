class World {
  sharky = new Sharky();
  level = level1;
  healthBar = new Healthbar();
  coinBar = new CoinBar();
  posionBar = new PosionBar();
  audio = new SoundManager();
  bubble = [];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  fullScreen = false;
  gameover = false;
  gamePaused = false;

  /**
   * constructor
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d"); /* to redner something in canvas */
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.backGroundMusic();
    this.setWorld();
    this.checkCollision();
  }

  /**
   * Draw everthing on canvas
   */
  draw() {
    if (!this.gamePaused) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.addBackgroundToCanvas();
      this.addToCanvas(this.healthBar);
      this.addToCanvas(this.coinBar);
      this.addToCanvas(this.posionBar);
      this.reload();
      this.ctx.translate(this.camera_x, 0);
      this.addObjectsToCanvas(this.bubble);
      this.addObjectsToCanvas(this.level.coin);
      this.addObjectsToCanvas(this.level.poisonBottle);
      this.addObjectsToCanvas(this.level.enemies);
      this.addToCanvas(this.sharky);
      this.ctx.translate(-this.camera_x, 0);
    }
  }

  /**
   * Set a 'world' - variable to sharky
   */
  setWorld() {
    this.sharky.world = this;
  }

  /**
   * Background music
   */
  backGroundMusic() {
    this.audio.setVolume("bgmusic", 0.2);
    this.audio.playSound("bgmusic");
  }

  /**
   * Checking collisions between sharky and everything on the canvas
   */
  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (enemy.dead || this.sharky.dead) {
          return;
        } else if (this.sharky.isColliding(enemy)) {
          this.sharkyGetHit(enemy);
        }
      });
    }, 200);
    this.checkCoinCollected();
    this.checkPoisonBottleCollected();
  }

  /**
   * If sharky get a hit from an enemy
   *
   * @param {object} enemy - each enemy
   */
  sharkyGetHit(enemy) {
    if (enemy.name == "Jellyfish") {
      this.sharkyGetHitByJellyFish(enemy);
    } else {
      this.sharky.hit();
    }
  }

  /**
   * If sharky get a hit from jellyfish
   *
   * @param {object} enemy - each enemy
   */
  sharkyGetHitByJellyFish(enemy) {
    this.sharky.electroHit();
    this.sharky.enemieHitAnimation(enemy);
    this.sharky.health -= 20;
  }

  /**
   * Checking if sharky collecting a coin
   */
  checkCoinCollected() {
    setInterval(() => {
      this.level.coin.forEach((coin, index) => {
        if (this.sharky.isColliding(coin)) {
          this.coinBar.coinCollected();
          this.level.coin.splice(index, 1);
          return;
        }
      });
    }, 100);
  }

  /**
   * Checking if sharky collecting a poisonbottle
   */
  checkPoisonBottleCollected() {
    setInterval(() => {
      this.level.poisonBottle.forEach((poisonBottle, index) => {
        if (this.sharky.isColliding(poisonBottle)) {
          this.posionBar.poisonBottleCollected();
          this.level.poisonBottle.splice(index, 1);
          return;
        }
      });
    }, 100);
  }

  /**
   * How the background is draw in the canvas
   */
  addBackgroundToCanvas() {
    for (let x = this.camera_x; x < this.canvas.width * 6; x += this.level.backgrounds.width) {
      this.ctx.drawImage(this.level.backgrounds.img, x, 0, this.level.backgrounds.width, this.level.backgrounds.height);
      /* if the background pos_x is reaching the doubled width of the canvas,
            the backgroundimage will redraw to the end of the first backgroundimage */
    }
  }

  /**
   *Add a object to canvas
   *
   * @param {object} object - which object is drawing into canvas
   */
  addToCanvas(object) {
    if (object.otherDirection) {
      this.turnObject(object);
    }
    object.drawObject(this.ctx);
    // object.drawFrame(this.ctx);
    if (object.otherDirection) {
      this.turnObjectBack(object);
    }
  }

  /**
   * Add object to canvas from array
   *
   * @param {object} object - which object is drawing into canvas
   */
  addObjectsToCanvas(object) {
    object.forEach((o) => {
      this.addToCanvas(o);
    });
  }

  /**
   * Turn a object on canvas
   *
   * @param {object} object - which object
   */
  turnObject(object) {
    this.ctx.save();
    this.ctx.translate(object.width, 0);
    this.ctx.scale(-1, 1);
    object.pos_x = object.pos_x * -1;
  }

  /**
   * Turn object back
   *
   * @param {object} object - which object
   */
  turnObjectBack(object) {
    object.pos_x = object.pos_x * -1;
    this.ctx.restore();
  }

  /**
   * execute the draw function in a loop
   */
  reload() {
    // Draw() wird immer wieder aufgerufen. 'this' funkioniert in der Funktion nicht, deshalb neue Variable für 'this'.
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
