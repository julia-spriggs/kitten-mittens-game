class Game {
    constructor() {
        this.time = 0;
        this.mitten = null;
        this.kitten = null;
    }
    start() {
        this.mitten = new Mitten();

    }
}

class Blob {
constructor(className, width, height, positionX, positionY) {
    this.className = className;
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

        return newElement;
    }
}

class Mitten extends Blob {

}

class Kitten extends Blob {

}