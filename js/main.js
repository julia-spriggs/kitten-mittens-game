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
            this.kitten.moveAround();
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
        newElement.style.left = this.positionX + 'vw';
        newElement.style.bottom = this.positionY + 'vh';
        newElement.style.width = this.width + 'vw';
        newElement.style.height = this.height + 'vh';
        const backgroundElement = document.getElementById('background');
        backgroundElement.appendChild(newElement);

        return newElement;
    }
}

class Mitten extends Blob {
    constructor() {
        const width = 15;
        const height = 20;
        const positionX = 50;
        const positionY = 100 - height;

        super('mitten', 'mittenimage', width, height, positionX, positionY);
    }

    createMittenElement() {
        const mittenImage = document.createElement('img');
        mittenImage.setAttribute('src', '../images/mittens.png');
        this.domElement.appendChild(mittenImage);
    }

    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + 'vh';
        if (this.positionY + this.height === 0) {
            this.domElement.remove();
        }
        if (this.mitten = null) {
            const newMitten = Object.create(this.mitten);
        }
    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + 'vw';
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + 'vw';
    }
}

class Kitten extends Blob {
    constructor() {
        const width = 20;
        const height = 20;
        const positionX = Math.floor(Math.random() * (100 - width + 1));
        const positionY = 0;

        super('kitten', 'kittenimage', width, height, positionX, positionY);

        this.indecision = 100;
        this.direction = 1;
        this.step = 1;
    }

    createKittenElement() {
        const kittenImage = document.createElement('img');
        kittenImage.setAttribute('src', '../images/kitten.png');
        this.domElement.appendChild(kittenImage);
    }

    moveAround() {
        if (Math.floor(Math.random() * this.indecision) == 0) {
            this.direction = -this.direction;
        }
        this.positionX += (this.direction * this.step);
        this.domElement.style.left = this.positionX + 'vw';
    }
}

const game = new Game();
game.start();
