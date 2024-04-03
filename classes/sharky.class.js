class Sharky extends MoveableObjects {
  pos_x = 20;
  pos_y = 100;
  width = 200;
  height = 200;
  world;
  sharkySpeed = 5;
  animationPlayed = false;
  bubbleAnimation = false;
  attackAnimation = false;
  epicIntroduce = false;
  activeIdle = false;
  sharkyIsMoving = false;
  timer;
  offset = {
    top: 80,
    bottom: 120,
    left: 60,
    right: 120,
  };
  IDLE = [
    "img/sharkie-images/1.Sharkie/1.IDLE/1.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/2.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/3.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/4.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/5.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/6.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/7.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/8.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/9.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/10.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/11.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/12.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/13.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/14.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/15.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/16.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/17.png",
    "img/sharkie-images/1.Sharkie/1.IDLE/18.png",
  ];

  LONGIDLE = [
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/i1.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I2.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I3.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I4.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I5.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I6.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I7.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I8.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I9.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I10.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I11.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I12.png",
    "img/sharkie-images/1.Sharkie/2.Long_IDLE/I13.png",
  ];
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
    this.loadImages(this.LONGIDLE);
    this.loadImages(this.DEAD_ANIMATION);
    this.loadImages(this.ELECTRO_HIT);
    this.loadImages(this.IS_HIT);
    this.loadImages(this.FIN_SLAP);
    this.loadImages(this.BUBBLETRAP_WHITE);
    this.loadImages(this.BUBBLETRAP_TOXIC);
    this.loadImages(this.BUBBLE);
    this.loadImages(this.IDLE);
    this.checkHealth();
    this.animation();
    this.attack();
    this.introduceBoss();
  }

  animation() {
    this.sharkyIdle();
    setInterval(() => {
      if (!this.dead && !this.isHurt() && this.activeIdle) {
        this.idleAnimation(this.LONGIDLE);
      }
      if (!this.dead && !this.activeIdle) {
        this.moveSharky();
      }
      if (!this.dead && this.isHurt()) {
        this.playAnimationOnce(this.IS_HIT);
      } else if (this.dead) {
        this.sharkyIsDead();
      }
    }, 1000 / 60);
    this.movementAnimation();
  }

  sharkyIdle() {
    setInterval(() => {
      if (!this.dead && !this.isHurt() && !this.activeIdle && !this.sharkyIsMoving && !this.attackAnimation) {
        this.playAnimation(this.IDLE);
      }
    }, 150);
  }

  sharkyIsDead() {
    this.DeadAnimationForSharky();
    this.gameOverScreen();
  }

  DeadAnimationForSharky() {
    setTimeout(() => {
      this.isDead(this.DEAD_ANIMATION);
    }, 1000);
  }

  gameOverScreen() {
    setTimeout(() => {
      showGameOverScreen();
      world.level.audio[0].pause();
    }, 3000);
  }

  bossComing() {
    if (this.pos_x == 2100 && !this.epicIntroduce) {
      this.epicIntroduce = true;
      this.disableKeyboardInput();
    }
  }

  disableKeyboardInput() {
    let timer = setInterval(() => {
      this.world.keyboard.leftKey = false;
      this.world.keyboard.upKey = false;
      this.world.keyboard.downKey = false;
      this.world.keyboard.rightKey = false;
    }, 50);
    setTimeout(() => {
      clearInterval(timer);
    }, 3000);
  }

  movementAnimation() {
    setInterval(() => {
      if (!this.attackAnimation) {
        if (!this.dead && !this.isHurt() && !this.hitAnimation) {
          if (this.world.keyboard.leftKey || this.world.keyboard.upKey || this.world.keyboard.downKey || this.world.keyboard.rightKey) {
            this.setVariables();
            this.resetTimer();
            this.playAnimation(this.movementImages);
            world.level.audio[5].play();
          } else {
            this.world.level.audio[5].pause();
            this.sharkyIsMoving = false;
          }
        }
      }
    }, 50);
  }

  setVariables() {
    this.sharkyIsMoving = true;
    this.activeIdle = false;
    this.idleplayed = false;
  }

  moveSharky() {
    this.bossComing();
    this.speedBoost();
    if (!this.attackAnimation) {
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

  bubbleAttack() {
    if (this.world.keyboard.keyF && !this.isAnimated && !this.isHurt() && !this.hitAnimation && !this.bubbleAnimation) {
      this.bubbleAnimation = true;
      this.attackAnimation = true;
      this.checkBubbleColor();
      setTimeout(() => {
        this.world.level.audio[3].play();
        this.attackAnimation = false;
        this.spawnNewBubble();
        this.checkBubbleHit();
      }, 800);
    }
  }

  spawnNewBubble() {
    let bubble = new Bubble(this.pos_x, this.pos_y);
    this.world.bubble.push(bubble);
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
            this.deleteBubbleafterMaxTravelDistance(i);
          }
        });
      });
    }, 100);
  }

  deleteBubbleafterMaxTravelDistance(i) {
    world.bubble.splice(i, 1);
    this.bubbleAnimation = false;
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
      this.finSlapAnimation();
      setTimeout(() => {
        this.checkFinAttack();
      }, 200);
      setTimeout(() => {
        this.attackAnimation = false;
      }, 700);
    }
  }

  finSlapAnimation() {
    this.attackAnimation = true;
    this.playAnimationOnce(this.FIN_SLAP);
  }

  checkFinAttack() {
    world.level.enemies.forEach((enemy, index) => {
      if (this.isAttacking(enemy)) {
        this.enemieHitAnimation(enemy);
        if (enemy.name == "Jellyfish") {
          this.jellyFishWasHit();
        }
        this.enemieHit(enemy, index);
        return;
      }
    });
  }

  jellyFishWasHit() {
    this.electroHit();
    this.health -= 20;
    return;
  }

  electroHit() {
    let timer = setInterval(() => {
      this.electroHitAnimation();
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
      this.endElectroHitAnimation();
    }, 2000);
  }

  electroHitAnimation() {
    this.hitAnimation = true;
    this.playAnimation(this.ELECTRO_HIT);
    world.level.audio[11].play();
  }

  endElectroHitAnimation() {
    this.hitAnimation = false;
      world.level.audio[11].pause();
      this.loadImage("img/sharkie-images/1.Sharkie/1.IDLE/1.png");
  }

  hit() {
    this.health -= 5;
    world.level.audio[10].play();
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
    }, 500);
  }

  speedBoost() {
    if (world.coinBar.coins == 15) {
      this.sharkySpeed = 7;
    }
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.activeIdle = true;
    }, 15000);
  }
}
