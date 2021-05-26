class Player{
constructor(){
this.name = null;
this.distance = 0;
this.index = null;

}

getCount(){
  var playerCountReff = database.ref("playerCount");
  playerCountReff.on("value",function(data){
      playerCount = data.val();
  });

}

updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}

update(){
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})
}

static getPlayerInfo(){
    var playerInfoReff = database.ref("players");
playerInfoReff.on("value",(data) =>{
    allPlayers = data.val()
});
console.log(allPlayers);
}
}