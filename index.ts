window.onload = function () {
    let name = "Sexy Player";
    //Instantiation du joueur et de l'ordinateur
    let player = new Player(name);
    let uiPlayer = new Player('UI');
    let xPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let uiPlayerX = xPositions[Math.floor(Math.random() * xPositions.length)];
    let uiPlayerY = yPositions[Math.floor(Math.random() * yPositions.length)];

    //positionnement des joueurs
    player.position(0, 0);
    uiPlayer.position(uiPlayerX, uiPlayerY);


};



class Player {
    name: string;
    x: number;
    y: number;
    template: string;
    constructor(name) {
        this.name = name;
    }
    position(x, y) {
        this.x = x;
        this.y = y;
    }
};