class Case {
    x : number;
    y : number;
    constructor(x,y) {
        this.x = x; 
        this.y = y;
    }
}

var case1 = new Case(20,20);
init(10,10);

function init(x,y){
    let canvas = <HTMLCanvasElement>document.getElementById('mon_canvas');
    let context = canvas.getContext("2d");
    for(let i : number = 0; i<y; i+=1){        
        for(let j : number = 0; j<x; j+=1){       
            drawCase(new Case(i,j));
        }
    }
    context.beginPath();               
    context.arc(10,10,10,0, Math.PI*2);
    context.fill();
    context.stroke();     
}

function drawCase(newCase){
    let canvas = <HTMLCanvasElement>document.getElementById('mon_canvas');
    let context = canvas.getContext("2d");
    context.beginPath();               
    context.rect(newCase.x*20,newCase.y*20,20,20);
    context.stroke();
}
