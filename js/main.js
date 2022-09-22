class Game {
    constructor() {
        this.time = 0;
        this.mitten = null;
        this.kitten = null;
    }

    start() {
        this.mitten = new Mitten();
        this.kitten = new Kitten();
        this.mitten.createDomElement();
        this.kitten.createDomElement();
        this.mitten.createMittenElement();
        this.kitten.createKittenElement();
        this.mitten.moveDown();
        this.kitten.moveAround();
        this.attachEventListeners();
        this.detectWin();

        setInterval(() => {
            this.kitten.moveAround();
            this.mitten.moveDown();
            if (this.detectWin() == true) {
                this.game.start();

            }

            this.time++;
        }, 100);
    }

    attachEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.mitten.moveLeft();
            } else if (event.key === 'ArrowRight') {
                this.mitten.moveRight();
            }
        });
    }

    detectWin() {
        if (
            this.mitten.positionX < this.kitten.positionX + this.kitten.width &&
            this.mitten.positionX + this.mitten.width > this.kitten.positionX &&
            this.mitten.positionY < this.kitten.positionY + this.kitten.height &&
            this.mitten.height + this.mitten.positionY > this.kitten.positionY
            ) {
                console.log("you win! next level!")
            }
        };

}


class Blob {
    constructor(className, classImage, width, height, positionX, positionY) {
        this.className = className;
        this.classImage = classImage;
        this.width = width;
        this.height = height;
        this.positionX = positionX;
        this.positionY = positionY;
        this.domElement = this.createDomElement();
    }

    createDomElement() {
        const newElement = document.createElement('div');
        newElement.className = this.className;
        newElement.style.left = this.positionX + 'px';
        newElement.style.bottom = this.positionY + 'px';
        newElement.style.width = this.width + 'px';
        newElement.style.height = this.height + 'px';
        const backgroundElement = document.getElementById('background');
        backgroundElement.appendChild(newElement);

        return newElement;
    }
}

class Mitten extends Blob {
    constructor() {
        const height = window.innerHeight * .15;
        const width = height * 0.73;
        const positionX = (window.innerWidth - width) / 2;
        const positionY = window.innerHeight - height;

        super('mitten', 'mittenimage', width, height, positionX, positionY);
        this.stepDown = window.innerHeight * 0.01;
        this.stepAround = window.innerWidth * 0.02;
    }

    createMittenElement() {
        const mittenImage = document.createElement('img');
        mittenImage.setAttribute('src', 'images/mittens.png');
        this.domElement.appendChild(mittenImage);
    }

    moveDown() {
        this.positionY -= this.stepDown;
        this.domElement.style.bottom = this.positionY + 'px';
        if (this.positionY + this.height === 0) {
            this.domElement.remove();
        }
        if (this.mitten = null) {
            const newMitten = Object.create(this.mitten);
        }
    }
    moveLeft() {
        this.positionX -= this.stepAround;
        this.domElement.style.left = this.positionX + 'px';
    }
    moveRight() {
        this.positionX += this.stepAround;
        this.domElement.style.left = this.positionX + 'px';
    }
}

class Kitten extends Blob {
    constructor() {
        const height = window.innerHeight * 0.15;
        const width = height * 1.1;
        const positionX = Math.floor(Math.random() * (window.innerWidth - width));
        const positionY = 0;

        super('kitten', 'kittenimage', width, height, positionX, positionY);

        this.indecision = 50;
        this.direction = 1;
        this.step = window.innerWidth * 0.01;
    }

    createKittenElement() {
        const kittenImage = document.createElement('img');
        kittenImage.setAttribute('src', 'images/kitten.png');
        this.domElement.appendChild(kittenImage);
    }

    moveAround() {
        if (Math.floor(Math.random() * this.indecision) == 0) {
            this.direction = -this.direction;
        }
        let move = this.direction * this.step;
        if ((this.positionX + this.width + move < window.innerWidth)
        && (this.positionX + move > 0)) {
            this.positionX += move;
        } else {
            this.direction = -this.direction;
        } 

        this.domElement.style.left = this.positionX + 'px';
    }
}

const game = new Game();
game.start();
