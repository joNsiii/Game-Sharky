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


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); /* to redner something in canvas */
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); /* clear draws to render new draw */
        // ------Space for fixed objects--------//
        this.addBackgroundToCanvas(); /* redner background repeatedly  */
        this.addToCanvas(this.healthBar); /* render statusBar in canvas */
        this.addToCanvas(this.coinBar); /* render statusBar in canvas */
        this.addToCanvas(this.posionBar); /* render statusBar in canvas */
        this.reload(); /* loop draw-function */
        this.ctx.translate(this.camera_x, 0);
        //-----Space for moveable-objects-------//
        this.addObjectsToCanvas(this.bubble);
        this.addObjectsToCanvas(this.level.coin);
        this.addObjectsToCanvas(this.level.poisonBottle);
        this.addToCanvas(this.sharky); /* render sharky in canvas */
        this.addObjectsToCanvas(this.level.enemies); /* render enemies with for-loop */
        this.ctx.translate(-this.camera_x, 0);
    }

    setWorld() {
        this.sharky.world = this;
        // this.level.enemies[6].endboss.world = this;
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.dead || this.sharky.dead) {
                    return;
                } else if (this.sharky.isColliding(enemy)) {
                    if (enemy.name == 'Jellyfish') {
                        this.sharky.electroHit();
                        this.sharky.enemieHitAnimation(enemy);
                        this.sharky.health -= 20;
                    } else {
                        this.sharky.hit();
                    }
                }
            })
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
        object.forEach(o => {
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
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}