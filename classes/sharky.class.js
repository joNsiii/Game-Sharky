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

  /**
   * constructor
   */
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

  /**
   * Checking which animation need to be played for sharky
   */
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
        setTimeout(() => {
          this.isDead(this.DEAD_ANIMATION);
        }, 1000);
        this.gameOverScreen();
      }
    }, 1000 / 60);
    this.movementAnimation();
  }

  /**
   * Play idleanimation for sharky
   */
  sharkyIdle() {
    setInterval(() => {
      if (!this.dead && !this.isHurt() && !this.activeIdle && !this.sharkyIsMoving && !this.attackAnimation) {
        this.playAnimation(this.IDLE);
      }
    }, 150);
  }

  /**
   * play dead animation for sharky and showing game over screen
   */
  sharkyIsDead() {}

  /**
   * Play dead animation for sharky with 1 second delay
   */
  DeadAnimationForSharky() {
    
  }

  /**
   * Shown game over screen with 3 seconds delay and switch music
   */
  gameOverScreen() {
    setTimeout(() => {
      showGameOverScreen();
      this.world.audio.stopSound("bgmusic");
      this.world.audio.playSound("gameOver");
    }, 3000);
  }

  /**
   * CHecking bossspawn
   */
  bossComing() {
    if (this.pos_x == 2100 && !this.epicIntroduce) {
      this.epicIntroduce = true;
      this.disableKeyboardInput();
    }
  }

  /**
   * Disable keyinput for a short duration
   */
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

  /**
   * Play a movement animation and sound if a key is pressed
   */
  movementAnimation() {
    setInterval(() => {
      if (!this.attackAnimation) {
        if (!this.dead && !this.isHurt() && !this.hitAnimation) {
          if (this.world.keyboard.leftKey || this.world.keyboard.upKey || this.world.keyboard.downKey || this.world.keyboard.rightKey) {
            this.setVariables();
            this.resetTimer();
            this.playAnimation(this.movementImages);
            this.world.audio.playSound("swim");
            this.world.audio.setVolume("swim", 0.2);
          } else {
            this.world.audio.stopSound("swim");
            this.sharkyIsMoving = false;
          }
        }
      }
    }, 50);
  }

  /**
   * booleans for some conditions
   */
  setVariables() {
    this.sharkyIsMoving = true;
    this.activeIdle = false;
    this.idleplayed = false;
  }

  /**
   * Move sharky on keypress
   */
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

  /**
   * Move sharky to the left
   */
  moveLeft() {
    this.pos_x -= this.sharkySpeed;
    this.otherDirection = true;
  }

  /**
   * Move sharky to the right
   */
  moveRight() {
    this.pos_x += this.sharkySpeed;
    this.otherDirection = false;
  }

  /**
   * Move sharky up
   */
  moveUp() {
    this.pos_y -= this.sharkySpeed;
  }

  /**
   * Move sharky down
   */
  moveDown() {
    this.pos_y += this.sharkySpeed;
  }

  /**
   * Let sharky attack
   */
  attack() {
    setInterval(() => {
      this.finSlap();
      this.bubbleAttack();
    }, 50);
  }

  /**
   * Let sharky attack with a bubble on key press and playing s bubble sound
   */
  bubbleAttack() {
    if (this.world.keyboard.keyF && !this.isAnimated && !this.isHurt() && !this.hitAnimation && !this.bubbleAnimation) {
      this.bubbleAnimation = true;
      this.attackAnimation = true;
      this.checkBubbleColor();
      setTimeout(() => {
        this.world.audio.playSound("bubble");
        this.attackAnimation = false;
        this.spawnNewBubble();
        this.checkBubbleHit();
      }, 800);
    }
  }

  /**
   * Add a new Bubble to bubble-array
   */
  spawnNewBubble() {
    let bubble = new Bubble(this.pos_x, this.pos_y);
    this.world.bubble.push(bubble);
  }

  /**
   * Checking if the bubble is hitting an enemy
   */
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

  /**
   * delete a bubble after reaching the max. travel distance (300px)
   *
   * @param {index} i - index of the current bubble
   */
  deleteBubbleafterMaxTravelDistance(i) {
    world.bubble.splice(i, 1);
    this.bubbleAnimation = false;
  }

  /**
   * Checking bubble color based on how many poison bottle are collected
   */
  checkBubbleColor() {
    if (world.posionBar.poisonBottles >= 1) {
      this.playAnimationOnce(this.BUBBLETRAP_TOXIC);
    } else {
      this.playAnimationOnce(this.BUBBLETRAP_WHITE);
    }
  }

  /**
   * Attack with a finslap on key press
   */
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

  /**
   * Playing finslap animation
   */
  finSlapAnimation() {
    this.attackAnimation = true;
    this.playAnimationOnce(this.FIN_SLAP);
  }

  /**
   * Checking if the finslap hit an enemy and which type of enemy
   */
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

  /**
   * If jellyfish was hit
   *
   * @returns end this function if a jellyfish was hit
   */
  jellyFishWasHit() {
    this.electroHit();
    this.health -= 20;
    return;
  }

  /**
   * Interval for electroanimation
   */
  electroHit() {
    let timer = setInterval(() => {
      this.electroHitAnimation();
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
      this.endElectroHitAnimation();
    }, 2000);
  }

  /**
   * Playing electrohit animation with sound
   */
  electroHitAnimation() {
    this.hitAnimation = true;
    this.playAnimation(this.ELECTRO_HIT);
    this.world.audio.playSound("electricSound");
  }

  /**
   * End electrohit animation and sound
   */
  endElectroHitAnimation() {
    this.hitAnimation = false;
    this.world.audio.stopSound("electricSound");
    this.loadImage("img/sharkie-images/1.Sharkie/1.IDLE/1.png");
  }

  /**
   * Minus health if sharky was hit with hit sound - set a variable when the hit was
   */
  hit() {
    this.health -= 5;
    this.world.audio.playSound("sharkyHit");
    this.lastHit = new Date().getTime();
  }

  /**
   * true if the last hit is longer ago than 1 second / false if not
   *
   * @returns true or false
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * Checking health from sharky
   */
  checkHealth() {
    setInterval(() => {
      if (this.health <= 0) {
        this.health = 0;
        this.dead = true;
        this.world.audio.stopSound("swim");
      }
    }, 500);
  }

  /**
   * Speedboost for sharky if all coins collected
   */
  speedBoost() {
    if (world.coinBar.coins == 15) {
      this.sharkySpeed = 7;
    }
  }

  /**
   * Reset the longidle timer
   */
  resetTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.activeIdle = true;
    }, 15000);
  }
}
