class Game {
    constructor() {
        this.time = 0;
        this.mitten = null;
        this.kitten = null;
    }
    start() {
        this.mitten = new Mitten();
        this.kitten = new Kitten();
        //this.attachEventListeners();
    
        //setInterval() => {
            // make kitten and mitten move faster after each collision
        //}

        this.mitten.moveDown();
        if (this.mitten.positionY + this.mitten.height === 0) {
            this.mitten.domElement.remove();
        }
        if (this.mitten = null) {
            const newMitten = Object.create(this.mitten);
        }
    }
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
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + 'vw';
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + 'vw';
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
        const width = 10;
        const height = 10;
        const positionX = 50;
        const positionY = 100 - height;

        super('mitten', 'mittenimage', width, height, positionX, positionY);
    }

    createMittenElement() {
        const mittenImage = document.createElement('img');
        mittenImage.setAttribute('src', '../images/mittens.jpg');
        newElement.appendChild(mittenImage);
    }

    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + 'vh';
    }
}

class Kitten extends Blob {
    constructor() {
        const width = 15;
        const height = 15;
        const positionX = Math.floor(Math.random() * (100 - width + 1));
        const positionY = height;

        super('kitten', 'kittenimage', width, height, positionX, positionY);
    }

    createKittenElement() {
        const kittenImage = document.createElement('img');
        kittenImage.setAttribute('src', '../images/kitten.png');
        newElement.appendChild(kittenImage);
    }
}

const game = new Game();
game.start();