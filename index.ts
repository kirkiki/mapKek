var canvas = <HTMLCanvasElement>document.getElementById('mon_canvas');
var context = canvas.getContext("2d");
var xMap = 10;
var yMap = 10;
var player;
class Case {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        context.beginPath();
        context.rect(this.x * 20, this.y * 20, 20, 20);
        context.stroke();
    }
}

class Player {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2);
        context.fillStyle = "black";
        context.fill();
        context.stroke();
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    getPlayerX() {
        return this.x;
    }
    getPlayerY() {
        return this.y;
    }
};

function clearCase(x, y, callback) {
    context.beginPath();
    context.rect(x, y, 20, 20);
    context.fillStyle = "white";
    context.fill();
    new Case(x, y);
    callback();
}

function init(x, y) {
    for (let i: number = 0; i < y; i += 1) {
        for (let j: number = 0; j < x; j += 1) {
            new Case(i, j);
        }
    }
    player = new Player(10, 10);
    shuffle(10)

}

function shuffle(nbWall) {
    while (nbWall > 0) {
        let xRand: number = Math.floor((Math.random() * (xMap))) * 20;
        let yRand: number = Math.floor((Math.random() * (yMap))) * 20;
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(xRand, yRand, 20, 20);
        context.stroke();
        nbWall--;
    }
}

document.body.onkeyup = function (e) {
    switch (e.which) {
        case 39:
            player = new Player(player.x + 20, player.y);
            break;
        case 37:
            player = new Player(player.x - 20, player.y);
            break;
        case 38:
            player = new Player(player.x, player.y - 20);
            break;
        case 40:
            player = new Player(player.x, player.y + 20);
            break;
    }
};
var case1 = new Case(20, 20);
init(10, 10);
