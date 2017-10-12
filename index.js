var Case = /** @class */ (function () {
    function Case(x, y) {
        this.x = x;
        this.y = y;
    }
    return Case;
}());
var Player = /** @class */ (function () {
    function Player(x, y) {
        this.x = x;
        this.y = y;
    }
    Player.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Player;
}());
;
function init(x, y) {
    for (var i = 0; i < y; i += 1) {
        for (var j = 0; j < x; j += 1) {
            drawCase(new Case(i, j));
        }
    }
    context.beginPath();
    context.arc(10, 10, 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}
function drawCase(newCase) {
    var canvas = document.getElementById('mon_canvas');
    var context = canvas.getContext("2d");
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
var canvas = document.getElementById('mon_canvas');
var context = canvas.getContext("2d");
var case1 = new Case(20, 20);
init(10, 10);
