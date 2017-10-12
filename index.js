var Case = /** @class */ (function () {
    function Case(x, y) {
        this.x = x;
        this.y = y;
    }
    return Case;
}());
var case1 = new Case(20, 20);
init(10, 10);
function init(x, y) {
    var canvas = document.getElementById('mon_canvas');
    var context = canvas.getContext("2d");
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
