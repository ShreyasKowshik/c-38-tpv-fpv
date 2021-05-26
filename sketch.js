 var database;
 var gameState = 0;
 var playerCount;
 var game,player,form,allPlayers;
 var distance = 0;
var car1,car2,car3,car4;
var cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth/1,displayHeight-100);
game = new Game();
game.getState();
game.start();
}

function draw(){
  background("white");
  
if(playerCount === 4){
  game.update(1);
}

if(gameState === 1){
  clear();
game.play();
}
  
}
