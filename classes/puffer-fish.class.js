class PufferFish extends MoveableObjects {
    pos_x = 400 + Math.random() * 1300;
    pos_y = Math.random() * 350;
    width = 80;
    height = 80;
    speed = 0.15 + Math.random() * 0.5;
    name = 'Pufferfish';
    movementImages = [
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    DEAD_ANIMATION = [
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png'
    ];
    ENEMY_HIT = [
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    constructor() {
        super().loadImage('img/sharkie-images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.movementImages);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.ENEMY_HIT);
        this.animation();
        this.movement();

    }

    animation() {
        setInterval(() => {
            if (!this.isHit && !this.dead) {
                this.normalSwim();
            } else if (this.isHit && !this.dead) {
                this.aggroSwim();
            }
            if (this.dead) {
                this.enemieIsDead();
            }
        }, 200);
    }

    movement() {
        if (!this.dead) {
            // this.moveUpAndDown();
            // this.moveLeft();
        }
    }

    normalSwim() {
        this.playAnimation(this.movementImages);
    }

    aggroSwim() {
        this.playAnimation(this.ENEMY_HIT);
        setTimeout(() => {
            this.isHit = false;
        }, 2000);
    }

    enemieIsDead() {
        setInterval(() => {
            this.playAnimation(this.DEAD_ANIMATION);
            this.pos_y += 0.2;
        }, 1000 / 60);
    }
}