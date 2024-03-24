class DrawableObject {
    img;
    imageCache = {};
    pos_x;
    pos_y;
    width = 200;
    height = 60;
    currentImage = 0;
    currentDeathImage = 0;
    coins = 0;
    poisonBottles = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawObject(ctx) {
        ctx.drawImage(this.img, this.pos_x, this.pos_y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Sharky) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "green";
            ctx.rect(this.pos_x + this.offset.left, this.pos_y + this.offset.top, this.width - this.offset.right, this.height - this.offset.bottom);
            ctx.stroke();
        } else if (this instanceof PufferFish) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "green";
            ctx.rect(this.pos_x, this.pos_y, this.width, this.height - 20);
            ctx.stroke();
        }else if (this instanceof JellyFish) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "green";
            ctx.rect(this.pos_x, this.pos_y, this.width, this.height - 20);
            ctx.stroke();
        }else if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.strokeStyle = "green";
            ctx.rect(this.pos_x + 10 , this.pos_y + 195, this.width - 30, this.height - 270);
            ctx.stroke();
        }else if (this instanceof Bubble) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "green";
            ctx.rect(this.pos_x , this.pos_y, this.width, this.height);
            ctx.stroke();
        }
    }

    playAnimation(arr) {
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    coinCollected() {
        this.coins++;
        if (this.coins >= 15) {
            this.coins = 15;
        }
    }
    
    poisonBottleCollected() {
        this.poisonBottles++
        if(this.poisonBottles >= 5) {
            this.poisonBottles = 5;
        }
    } 
}