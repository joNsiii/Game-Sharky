class JellyFish extends MoveableObjects {
    pos_x = 800 + Math.random() * 1100;
    pos_y = Math.random() * 350;
    width = 80;
    height = 80;
    name = 'Jellyfish'
    speed = 0.15 + Math.random() * 0.5;

    movementImages = [
        'img/sharkie-images/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    DEAD_ANIMATION = [
        'img/sharkie-images/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];
    ELECTRIC_JELLYFISH = [
        'img/sharkie-images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/sharkie-images/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ]

    constructor() {
        super().loadImage('img/sharkie-images/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.movementImages);
        this.loadImages(this.DEAD_ANIMATION);
        this.loadImages(this.ELECTRIC_JELLYFISH);
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
            this.moveUpAndDown();
            // this.moveLeft();
        }
    }

    normalSwim() {
        this.playAnimation(this.movementImages);
    }

    aggroSwim() {
        this.playAnimation(this.ELECTRIC_JELLYFISH);;
        setTimeout(() => {
            this.isHit = false;
        }, 2000);
    }

    enemieIsDead() {
        setInterval(() => {
            this.playAnimationOnce(this.DEAD_ANIMATION);
            this.pos_y += 0.2;
        }, 1000 / 60);
    }

}