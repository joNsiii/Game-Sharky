class Sharky extends MoveableObjects {
  pos_x = 20;
  pos_y = 270;
  width = 200;
  height = 200;
  world;
  sharkySpeed = 5;
  animationPlayed = false;
  bubbleAnimation = false;
  attackAnimation = false;
  stopMoving = false;
  epicIntroduce = false;
  offset = {
    top: 80,
    bottom: 120,
    left: 60,
    right: 120,
  };
  movementImages = [
    "img/sharkie-images/1.Sharkie/3.Swim/1.png",
    "img/sharkie-images/1.Sharkie/3.Swim/2.png",
    "img/sharkie-images/1.Sharkie/3.Swim/3.png",
    "img/sharkie-images/1.Sharkie/3.Swim/4.png",
    "img/sharkie-images/1.Sharkie/3.Swim/5.png",
    "img/sharkie-images/1.Sharkie/3.Swim/6.png",
  ];
  DEAD_ANIMATION = [
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/sharkie-images/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IS_HIT = [
    "img/sharkie-images/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/1.Poisoned/5.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/1.png",
  ];
  FIN_SLAP = [
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/2.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Fin slap/8.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/1.png",
  ];
  ELECTRO_HIT = [
    "img/sharkie-images/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/sharkie-images/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];
  BUBBLE = ["img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];
  BUBBLETRAP_WHITE = [
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  BUBBLETRAP_TOXIC = [
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];

  constructor() {
    super().loadImage("img/sharkie-images/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.movementImages);
    this.loadImages(this.DEAD_ANIMATION);
    this.loadImages(this.ELECTRO_HIT);
    this.loadImages(this.IS_HIT);
    this.loadImages(this.FIN_SLAP);
    this.loadImages(this.BUBBLETRAP_WHITE);
    this.loadImages(this.BUBBLETRAP_TOXIC);
    this.loadImages(this.BUBBLE);
    this.checkHealth();
    this.animation();
    this.attack();
    this.introduceBoss();
  }

  animation() {
    setInterval(() => {
      if (!this.dead) {
        this.moveSharky();
      }
      if (!this.dead && this.isHurt()) {
        this.playAnimationOnce(this.IS_HIT);
      } else if (this.dead) {
        setTimeout(() => {
          this.isDead(this.DEAD_ANIMATION);
        }, 2000);
        setTimeout(() => {
          showGameOverScreen();
        }, 4000);
      }
    }, 1000 / 60);
    this.movementAnimation();
  }

  bossComing() {
    if (this.pos_x == 2100 && !this.epicIntroduce) {
      this.epicIntroduce = true;
      let timer = setInterval(() => {
        this.world.keyboard.leftKey = false;
        this.world.keyboard.upKey = false;
        this.world.keyboard.downKey = false;
        this.world.keyboard.rightKey = false;
      }, 1);
      setTimeout(() => {
        clearInterval(timer);
      }, 3000);
    }
  }

  movementAnimation() {
    setInterval(() => {
      if (!this.stopMoving && !this.attackAnimation) {
        if (!this.dead && !this.isHurt() && !this.hitAnimation) {
          if (this.world.keyboard.leftKey || this.world.keyboard.upKey || this.world.keyboard.downKey || this.world.keyboard.rightKey) {
            this.playAnimation(this.movementImages);
            this.world.level.audio[5].play();
          } else {
            this.world.level.audio[5].pause();
          }
        }
      }
    }, 50);
  }

  moveSharky() {
    this.bossComing();
    // this.speedBoost();
    if (!this.stopMoving && !this.attackAnimation) {
      if (this.world.keyboard.leftKey || this.world.keyboard.upKey || this.world.keyboard.downKey || this.world.keyboard.rightKey) {
        if (this.world.keyboard.leftKey && this.pos_x > 0) {
          this.moveLeft();
        }
        if (this.world.keyboard.rightKey && this.pos_x < 2800) {
          this.moveRight();
        }
        if (this.world.keyboard.upKey && this.pos_y > -100) {
          this.moveUp();
        }
        if (this.world.keyboard.downKey && this.pos_y < 330) {
          this.moveDown();
        }
        if (this.pos_x < 2100) {
          this.world.camera_x = -this.pos_x;
        }
      }
    }
  }

  moveLeft() {
    this.pos_x -= this.sharkySpeed;
    this.otherDirection = true;
  }

  moveRight() {
    this.pos_x += this.sharkySpeed;
    this.otherDirection = false;
  }

  moveUp() {
    this.pos_y -= this.sharkySpeed;
  }

  moveDown() {
    this.pos_y += this.sharkySpeed;
  }

  attack() {
    setInterval(() => {
      this.finSlap();
      this.bubbleAttack();
    }, 50);
  }

  muteAllPageSounds() {
    if (this.world.keyboard.spaceKey) {
      let audios = document.getElementsByTagName("audio");

      for (let i = 0; i < audios.length; i++) {
        audios[i].muted = true;
      }
    }
  }

  bubbleAttack() {
    if (this.world.keyboard.keyF && !this.isAnimated && !this.isHurt() && !this.hitAnimation && !this.bubbleAnimation) {
      this.bubbleAnimation = true;
      this.attackAnimation = true;
      this.checkBubbleColor();
      setTimeout(() => {
        this.world.level.audio[3].play();
        this.attackAnimation = false;
        let bubble = new Bubble(this.pos_x, this.pos_y);
        this.world.bubble.push(bubble);
        this.checkBubbleHit();
      }, 800);
    }
  }

  checkBubbleHit() {
    setInterval(() => {
      this.world.bubble.forEach((bubble, i) => {
        world.level.enemies.forEach((enemy, j) => {
          if (bubble.isAttacking(enemy)) {
            world.bubble.splice(i, 1);
            this.bubbleAnimation = false;
            bubble.enemieHitAnimation(enemy);
            bubble.enemieHit(enemy, j);
          }
          if (this.bubbleTravelDistance(i)) {
            world.bubble.splice(i, 1);
            this.bubbleAnimation = false;
          }
        });
      });
    }, 100);
  }

  checkBubbleColor() {
    if (world.posionBar.poisonBottles >= 1) {
      this.playAnimationOnce(this.BUBBLETRAP_TOXIC);
    } else {
      this.playAnimationOnce(this.BUBBLETRAP_WHITE);
    }
  }

  finSlap() {
    if (this.world.keyboard.spaceKey && !this.isAnimated) {
      this.attackAnimation = true;
      this.playAnimationOnce(this.FIN_SLAP);
      setTimeout(() => {
        this.checkFinAttack();
      }, 200);
      setTimeout(() => {
        this.attackAnimation = false;
      }, 700);
    }
  }

  checkFinAttack() {
    world.level.enemies.forEach((enemy, index) => {
      if (this.isAttacking(enemy)) {
        this.enemieHitAnimation(enemy);
        if (enemy.name == "Jellyfish") {
          this.electroHit();
          this.health -= 20;
          return;
        }
        this.enemieHit(enemy, index);
        return;
      }
    });
  }

  electroHit() {
    this.shortDurationAnimation(this.ELECTRO_HIT);
    setTimeout(() => {
      this.loadImage("img/sharkie-images/1.Sharkie/1.IDLE/1.png");
    }, 2000);
  }

  hit() {
    this.health -= 5;
    this.lastHit = new Date().getTime();
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  checkHealth() {
    setInterval(() => {
      if (this.health <= 0) {
        this.health = 0;
        this.dead = true;
      }
    }, 1000 / 60);
  }

  speedBoost() {
    if (world.coinBar.coins == 1) {
      this.sharkySpeed = 7;
    }
  }
}
