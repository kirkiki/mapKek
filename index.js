window.onload = function () {
    var name = "Sexy Player";
    //Instantiation du joueur et de l'ordinateur
    var player = new Player(name);
    var uiPlayer = new Player('UI');
    var xPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var yPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var uiPlayerX = xPositions[Math.floor(Math.random() * xPositions.length)];
    var uiPlayerY = yPositions[Math.floor(Math.random() * yPositions.length)];
    //positionnement des joueurs
    player.position(0, 0);
    uiPlayer.position(uiPlayerX, uiPlayerY);
};
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.position = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Player;
}());
;
