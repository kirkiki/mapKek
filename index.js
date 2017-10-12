var Case = /** @class */ (function () {
    function Case(x, y) {
        this.x = x;
        this.y = y;
    }
    return Case;
}());
var case1 = new Case(20, 20);
draw(10, 10);
function draw(x, y) {
    var canvas = document.getElementById('mon_canvas');
    var context = canvas.getContext("2d");
    for (var i = 0; i < y; i += 1) {
        for (var j = 0; j < x; j += 1) {
            context.beginPath();
            context.rect(j * 20, i * 20, 20, 20);
            context.stroke();
        }
    }
    context.beginPath();
    context.arc(10, 10, 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}
