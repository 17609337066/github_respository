function Map(){
  this.construct = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [8,8,8,8,8,8,8,8,8,8,8,0],
  ]
}

Map.prototype.render = function(){
  for(let i = 0;i < this.construct.length;i++){
    for(let j = 0;j < this.construct[i].length;j++){
      if(this.construct[i][j] === 8){
        game.setColor(i,j,8)
        // game.setColor(i,j,this.construct[i][j] + 1)
      }
    }
  }
}

Map.prototype.checkClearLine = function(){
  for(let i = 0;i < this.construct.length;i++){
    // let temp = i
      if(this.construct[i].indexOf(0) === -1){
        this.construct.splice(i,1)
        this.construct.unshift([0,0,0,0,0,0,0,0,0,0,0,0])     
      }
      // if(this.construct[i][j] !== 0 && temp === i){
      // }
  }
}