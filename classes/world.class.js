class World {
  sharky = new Sharky();
  level = level1;
  healthBar = new Healthbar();
  coinBar = new CoinBar();
  posionBar = new PosionBar();
  bubble = [];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  soundMuted = false;
  fullScreen = false;
  gameover = false;
  gamePaused = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d"); /* to redner something in canvas */
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.backGroundMusic();
    this.setWorld();
    this.checkCollision();
  }

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

  setWorld() {
    this.sharky.world = this;
  }

  backGroundMusic() {
    this.level.audio[0].volume = 0.1;
    this.level.audio[0].play();
    this.level.audio[0].onended = function () {
      this.play();
    };
  }

  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (enemy.dead || this.sharky.dead) {
          return;
        } else if (this.sharky.isColliding(enemy)) {
          if (enemy.name == "Jellyfish") {
            this.sharky.electroHit();
            this.sharky.enemieHitAnimation(enemy);
            this.sharky.health -= 20;
          } else {
            this.sharky.hit();
          }
        }
      });
    }, 200);
    setInterval(() => {
      this.level.coin.forEach((coin, index) => {
        if (this.sharky.isColliding(coin)) {
          this.coinBar.coinCollected();
          this.level.coin.splice(index, 1);
          return;
        }
      });
    }, 100);
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

  addBackgroundToCanvas() {
    for (let x = this.camera_x; x < this.canvas.width * 6; x += this.level.backgrounds.width) {
      this.ctx.drawImage(this.level.backgrounds.img, x, 0, this.level.backgrounds.width, this.level.backgrounds.height);
      /* if the background pos_x is reaching the doubled width of the canvas,
            the backgroundimage will redraw to the end of the first backgroundimage */
    }
  }

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

  addObjectsToCanvas(object) {
    object.forEach((o) => {
      this.addToCanvas(o);
    });
  }

  turnObject(object) {
    this.ctx.save();
    this.ctx.translate(object.width, 0);
    this.ctx.scale(-1, 1);
    object.pos_x = object.pos_x * -1;
  }

  turnObjectBack(object) {
    object.pos_x = object.pos_x * -1;
    this.ctx.restore();
  }

  reload() {
    // Draw() wird immer wieder aufgerufen. 'this' funkioniert in der Funktion nicht, deshalb neue Variable für 'this'.
    if (!this.gameover || !this.gamePaused) {
      let self = this;
      requestAnimationFrame(function () {
        self.draw();
      });
    }
    return;
  }

  muteSound() {
    this.soundMuted = !this.soundMuted;
    world.level.audio.forEach((sound) => {
      if (this.soundMuted) {
        sound.muted = true;
      } else {
        sound.muted = false;
      }
    });
  }
}
