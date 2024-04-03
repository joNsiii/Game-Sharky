class MoveableObjects extends DrawableObject {
  health = 100;
  enemieHealth = 100;
  endBossDead = false;
  speed = Math.random() * 7;
  sharkySpeed = 5;
  otherDirection = false;
  lastHit = 0;
  dead = false;
  isAnimated = false;
  direction = false;
  hitAnimation = false;
  isHit = false;
  bossIsSpawned = false;
  idleplayed = false;
  damageToEnemies = 50;


  /**
   * If the boss is dead, the win sound will playing and the winning screen pop up
   */
  youWin() {
    if (this.endBossDead) {
      world.audio.playSound("win");
      showWinScreen();
    }
  }

  /**
   * How the enemy is moving to the left
   */
  moveLeft() {
    setInterval(() => {
      this.pos_x -= this.speed;
    }, 1000 / 60);
  }

  /**
   * Set a boolean if the enemys reaching a specific point on canvas
   */
  checkPosition() {
    if (this.pos_y <= 0) {
      this.direction = true;
    } else if (this.pos_y >= 330) {
      this.direction = false;
    }
  }

  /**
   * Check the position for enemy when they go up and down
   */
  moveUpAndDown() {
    setInterval(() => {
      this.checkPosition();
      if (this.direction) {
        this.pos_y += this.speed;
      }
      if (!this.direction) {
        this.pos_y -= this.speed;
      }
    }, 1000 / 60);
  }

  /**
   * Playing a animation if anyone is dead
   *
   * @param {array} arr - Array with images
   */
  isDead(arr) {
    if (!this.animationPlayed) {
      this.isAnimated = false;
      this.playAnimationOnce(arr);
      this.animationPlayed = true;
    }
  }

  /**
   * Playing a animation one time
   *
   * @param {array} arr -  Array with images
   */
  playAnimationOnce(arr) {
    if (!this.isAnimated) {
      this.isAnimated = true;
      let currentFrame = 0;
      let animationInterval = setInterval(() => {
        let path = arr[currentFrame];
        this.img = this.imageCache[path];
        currentFrame++;
        if (currentFrame == arr.length) {
          clearInterval(animationInterval);
          this.isAnimated = false;
        }
      }, 100);
    }
  }

  /**
   * Playing the idle animation for sharky
   *
   * @param {array} arr - Array with images
   */
  idleAnimation(arr) {
    if (!this.idleplayed) {
      let currentFrame = 0;
      let animationInterval = setInterval(() => {
        let path = arr[currentFrame];
        this.img = this.imageCache[path];
        currentFrame++;
        if (currentFrame == arr.length) {
          clearInterval(animationInterval);
        }
        this.idleplayed = true;
      }, 100);
    }
  }

  /**
   * Checkinh how long the bubble is traveled
   *
   * @param {index} i - Index of the current bubble
   * @returns - boolean
   */
  bubbleTravelDistance(i) {
    if (this.world.bubble.length >= 1) {
      return Math.abs(this.world.bubble[i].initialPosition - this.world.bubble[i].pos_x) > 300;
    }
  }

  /**
   * compare if two objects colliding
   *
   * @param {object} o - which object is colliding
   * @returns boolean
   */
  isColliding(o) {
    if (o.name == "boss") {
      return (
        this.pos_x + 60 + (this.width - 115) > o.pos_x + 10 &&
        this.pos_x + 60 < o.pos_x + 10 + o.width - 30 &&
        this.pos_y + 120 < o.pos_y + 195 + o.height - 250 &&
        this.pos_y + (this.height - 55) > o.pos_y + 195
      );
    } else {
      return (
        this.pos_x + 60 + (this.width - 115) > o.pos_x &&
        this.pos_x + 60 < o.pos_x + o.width &&
        this.pos_y + 120 < o.pos_y + o.height &&
        this.pos_y + (this.height - 55) > o.pos_y
      );
    }
  }

  /**
   * compare if two objects colliding
   *
   * @param {object} o - which object are colliding
   * @returns boolean
   */
  isAttacking(o) {
    if (this.name == "bubble") {
      return (
        this.pos_x + (this.width - 20) > o.pos_x &&
        this.pos_x < o.pos_x + o.width &&
        this.pos_y + 20 < o.pos_y + o.height &&
        this.pos_y + 20 + (this.height - 30) > o.pos_y
      );
    }
    return (
      this.pos_x + 40 + (this.width - 55) > o.pos_x &&
      this.pos_x < o.pos_x + o.width &&
      this.pos_y + 120 < o.pos_y + o.height &&
      this.pos_y + (this.height - 55) > o.pos_y
    );
  }

  /**
   * Playing a sound when a enemy is hit and based on which attack the enemy was hit
   * If the enemy is dead we are playing 'enemyDead'- sound
   *
   * @param {object} enemy - which enemy is hit
   * @param {index} i - which index the enemy have in the array
   */
  enemieHit(enemy, i) {
    if (enemy.enemieHealth > 1) {
      world.audio.playSound("enemyHit");
    }
    if (this.name == "bubble") {
      this.damageBoost();
      this.poisonBottleCheck();
    }
    enemy.enemieHealth -= this.damageToEnemies;
    if (enemy.enemieHealth <= 0) {
      world.audio.playSound("enemyDead");
      enemy.dead = true;
      this.deleteEnemieOnDeath(i);
    }
  }

  /**
   * Deleting a enemy from enemie-array
   *
   * @param {index} i - which index the enemy have
   */
  deleteEnemieOnDeath(i) {
    setTimeout(() => {
      world.level.enemies.splice(i, 1);
    }, 3000);
  }

  /**
   * Set a boolean if a enemy is hit
   *
   * @param {object} enemy - identify the enemy
   */
  enemieHitAnimation(enemy) {
    enemy.isHit = true;
  }

  /**
   * If sharky reach a specific point on canvas, we let the boss span with an epic sound
   * and set a boolean that the boss is spawned
   */
  introduceBoss() {
    setInterval(() => {
      if (world.sharky.pos_x >= 2100 && !this.bossIsSpawned) {
        world.audio.stopSound("bgMusic");
        world.audio.playSound("bossMusic");
        this.bossIsSpawned = true;
        this.spawnBoss();
      }
    }, 500);
  }

  /**
   * Adding the endboss to enemie-array
   */
  spawnBoss() {
    let boss = new Endboss();
    world.level.enemies.push(boss);
  }

  /**
   * If sharky collected poisonbottle, he get a damageboost
   */
  damageBoost() {
    if (world.posionBar.poisonBottles >= 1) {
      this.damageToEnemies = 100;
    } else {
      this.damageToEnemies = 50;
    }
  }

  /**
   * If we have more than one bottle, we reduce the amount of bottles
   */
  poisonBottleCheck() {
    if (world.posionBar.poisonBottles >= 1) {
      world.posionBar.poisonBottles--;
    }
  }
}
