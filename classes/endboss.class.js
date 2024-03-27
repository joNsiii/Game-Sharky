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
  }

  bossSpawn() {
    this.playAnimationOnce(this.INTRODUCING);
    setTimeout(() => {
      this.animation();
    }, 1000);
  }

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
        this.enemieIsDead();
        this.endBossDead = true;
        world.level.audio[1].pause();
        setTimeout(() => {
          this.youWin();
        }, 2000);
      }
    }, 100);
  }

  floating() {
    this.playAnimation(this.movementImages);
  }

  hitted() {
    this.playAnimation(this.ENEMY_HIT);
    setTimeout(() => {
      this.isHit = false;
    }, 2000);
  }

  enemieIsDead() {
    setInterval(() => {
      this.isDead(this.DEAD_ANIMATION);
      this.pos_y += 0.2;
    }, 1000 / 60);
  }

  attackSharky() {
    if(world.sharky.isColliding(this)) {
     this.playAnimationOnce(this.ATTACK);
    }
   }

  moveToSharky() {
    let posY = world.sharky.pos_y - 200
    if (world.sharky.bossIsSpawned) {
      if (this.pos_x < world.sharky.pos_x) {
        this.otherDirection = true;
        this.pos_x += this.movingSpeed;
      }
      if (this.pos_y < world.sharky.pos_y -100) {
        this.pos_y += this.movingSpeed;
      }
      if (this.pos_x > world.sharky.pos_x) {
        this.otherDirection = false;
        this.pos_x -= this.movingSpeed;
      }
      if (Math.abs(this.pos_y > posY)) {
        this.pos_y -= this.movingSpeed;
      }
    }
  }

  
}
