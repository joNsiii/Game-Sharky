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
  damageToEnemies = 50;

  youWin() {
    if (this.endBossDead) {
      world.level.audio[7].play();
      showWinScreen();
    }
  }

  moveLeft() {
    setInterval(() => {
      this.pos_x -= this.speed;
    }, 1000 / 60);
  }

  checkPosition() {
    if (this.pos_y <= 0) {
      this.direction = true;
    } else if (this.pos_y >= 330) {
      this.direction = false;
    }
  }

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

  isDead(arr) {
    if (!this.animationPlayed) {
      this.isAnimated = false;
      this.playAnimationOnce(arr);
      this.animationPlayed = true;
    }
  }

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

  shortDurationAnimation(arr) {
    let timer = setInterval(() => {
      this.hitAnimation = true;
      this.playAnimation(arr);
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
      this.hitAnimation = false;
    }, 2000);
  }

  bubbleTravelDistance(i) {
    if (this.world.bubble.length >= 1) {
      return Math.abs(this.world.bubble[i].initialPosition - this.world.bubble[i].pos_x) > 300;
    }
  }

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

  enemieHit(enemy, i) {
    if (enemy.enemieHealth > 1) {
      world.level.audio[8].play();
    }
    if (this.name == "bubble") {
      this.damageBoost();
      this.poisonBottleCheck();
    }
    enemy.enemieHealth -= this.damageToEnemies;
    if (enemy.enemieHealth <= 0) {
      world.level.audio[9].play();
      enemy.dead = true;
      this.deleteEnemieOnDeath(i);
    }
  }

  deleteEnemieOnDeath(i) {
    setTimeout(() => {
      world.level.enemies.splice(i, 1);
    }, 3000);
  }

  enemieHitAnimation(enemy) {
    enemy.isHit = true;
  }

  introduceBoss() {
    setInterval(() => {
      if (world.sharky.pos_x >= 2100 && !this.bossIsSpawned) {
        world.level.audio[0].pause();
        world.level.audio[1].play();
        this.bossIsSpawned = true;
        this.spawnBoss();
      }
    }, 500);
  }

  spawnBoss() {
    let boss = new Endboss();
    world.level.enemies.push(boss);
  }

  damageBoost() {
    if (world.posionBar.poisonBottles >= 1) {
      this.damageToEnemies = 100;
    } else {
      this.damageToEnemies = 50;
    }
  }
  poisonBottleCheck() {
    if (world.posionBar.poisonBottles >= 1) {
      world.posionBar.poisonBottles--;
    }
  }
}
