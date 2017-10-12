var canvas = document.getElementById('mon_canvas');
var context = canvas.getContext("2d");
var xMap = 10;
var yMap = 10;
var Case = /** @class */ (function () {
    function Case(x, y) {
        this.x = x;
        this.y = y;
    }
    return Case;
}());
var case1 = new Case(20, 20);
init(xMap, yMap);
function init(x, y) {
    for (var i = 0; i < y; i += 1) {
        for (var j = 0; j < x; j += 1) {
            drawCase(new Case(i, j));
        }
    }
    shuffle(10);
    context.beginPath();
    context.arc(10, 10, 10, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
    context.stroke();
}
function drawCase(newCase) {
    context.beginPath();
    context.rect(newCase.x * 20, newCase.y * 20, 20, 20);
    context.stroke();
}
function shuffle(nbWall) {
    while (nbWall > 0) {
        var xRand = Math.floor((Math.random() * (xMap))) * 20;
        var yRand = Math.floor((Math.random() * (yMap))) * 20;
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(xRand, yRand, 20, 20);
        context.stroke();
        nbWall--;
    }
}
