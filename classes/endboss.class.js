class Endboss extends MoveableObjects {
  pos_x = 2500;
  pos_y = -50;
  width = 300;
  height = 400;
  world;
  movingSpeed = 5;
  name = "boss";
  showingUp = false;
  movementImages = [
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/2.floating/12.png",
  ];
  ENEMY_HIT = [
    "img/sharkie-images/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  DEAD_ANIMATION = [
    "img/sharkie-images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];
  INTRODUCING = [
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  ATTACK = [
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/sharkie-images/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  constructor() {
    super().bossSpawn();
    this.loadImage("img/sharkie-images/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImages(this.movementImages);
    this.loadImages(this.DEAD_ANIMATION);
    this.loadImages(this.ENEMY_HIT);
    this.loadImages(this.INTRODUCING);
    this.loadImages(this.ATTACK);
    this.enemieHealth = 600;
  }

  /**
   * Animation when the boss is spawing
   */
  bossSpawn() {
    this.playAnimationOnce(this.INTRODUCING);
    setTimeout(() => {
      this.animation();
    }, 1000);
  }

  /**
   * Animation based on conditions
   */
  animation() {
      setInterval(() => {
        if (!this.isHit && !this.dead) {
        this.moveToSharky();
        this.attackSharky();
        this.floating();
      } else if (this.isHit && !this.dead) {
        this.hitted();
      }
      if (this.dead) {
        this.bossIsDead();
      }
    }, 100);
  }

  /**
   * If the boss is dead we stop the bossmusic and showing the winning screen after a short delay
   */
  bossIsDead() {
    this.enemieIsDead();
        this.endBossDead = true;
        world.audio.stopSound('bossMusic');
        setTimeout(() => {
          this.youWin();
        }, 2000);
  }

  /**
   * Idle animation for boss 
   */
  floating() {
    this.playAnimation(this.movementImages);
  }

  /**
   * Animation if the boss is hitted
   */
  hitted() {
    this.playAnimation(this.ENEMY_HIT);
    setTimeout(() => {
      this.isHit = false;
    }, 2000);
  }

  /**
   * Animation if the boss is dead
   */
  enemieIsDead() {
    setInterval(() => {
      this.isDead(this.DEAD_ANIMATION);
      this.pos_y += 0.2;
    }, 1000 / 60);
  }

  /**
   * Playing attack animation if the boss is colliding with sharky
   */
  attackSharky() {
    if(world.sharky.isColliding(this)) {
     this.playAnimationOnce(this.ATTACK);
    }
   }

   /**
    * Moving to sharky
    */
  moveToSharky() {
    let posY = world.sharky.pos_y - 200
    if (world.sharky.bossIsSpawned) {
      if (this.pos_x < world.sharky.pos_x) {
        this.bossMovingRight();
      }
      if (this.pos_y < world.sharky.pos_y -100) {
        this.bossMovingDown();
      }
      if (this.pos_x > world.sharky.pos_x) {
        this.bossMovingLeft();
      }
      if (Math.abs(this.pos_y > posY)) {
        this.bossMovingUp();
      }
    }
  }

  /**
   * Moving right
   */
  bossMovingRight() {
    this.otherDirection = true;
    this.pos_x += this.movingSpeed;
  }

  /**
   * Moving left
   */
  bossMovingLeft() {
    this.otherDirection = false;
    this.pos_x -= this.movingSpeed;
  }

  /**
   * Moving up
   */
  bossMovingUp() {
    this.pos_y -= this.movingSpeed;
  }

  /**
   * Moving down
   */
  bossMovingDown() {
    this.pos_y += this.movingSpeed;
  }
  
}
