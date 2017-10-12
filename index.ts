var canvas = <HTMLCanvasElement>document.getElementById('mon_canvas');
var context = canvas.getContext("2d");
var xMap = 10;
var yMap = 10;
class Case {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Player {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
};
function init(x, y) {
    for (let i: number = 0; i < y; i += 1) {
        for (let j: number = 0; j < x; j += 1) {
            drawCase(new Case(i, j));
        }
    }
    shuffle(10)
    context.beginPath();
    context.arc(10, 10, 10, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.stroke();
}

function drawCase(newCase) {
    let canvas = <HTMLCanvasElement>document.getElementById('mon_canvas');
    let context = canvas.getContext("2d");
    context.beginPath();
    context.rect(newCase.x * 20, newCase.y * 20, 20, 20);
    context.stroke();
}

function clearCase(block) {
    context.beginPath();
    context.rect(block.x, block.y, 20, 20);
    context.fillStyle = "white";
    context.fill();
    drawCase(block);
}
function shuffle(nbWall){
    while(nbWall>0){
        let xRand : number = Math.floor((Math.random() * (xMap))) * 20; 
        let yRand : number = Math.floor((Math.random() * (yMap))) * 20; 
        context.beginPath(); 
        context.fillStyle = "blue";
        context.fillRect(xRand,yRand,20,20);
        context.stroke();
        nbWall--;
    }
}


var case1 = new Case(20, 20);
init(10, 10);
