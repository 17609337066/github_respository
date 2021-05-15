function Block () {
  // 方块种类池
  this.blocks = ['O', 'I', 'S', 'Z', 'L', 'J', 'T']
  // 初始渲染的行
  this.row = 0
  // 初始渲染的列
  this.col = 4
  // 方块种类
  this.blockCatgray = 0
  // 要渲染的可选方块组
  this.blockCatgrays = []
  // 目前渲染的方块方向
  this.dir = 0

  // 具体要渲染的方块
  this.block = this.randomBlock()


}
// 渲染方块（setcolor中操作dom）
Block.prototype.render = function () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (this.block[i][j] !== 0) {
        game.setColor(i + this.row, j + this.col, this.blockCatgray + 1)
      }
    }
  }
}
// 随机一个方块的结构数组,随机种类+随机变化
Block.prototype.randomBlock = function () {
  // 随机一个方块种类
  this.blockCatgray = parseInt(Math.random() * 7)
  // 获取这个方块种类的所有变化
  this.blockCatgrays = BlockJson[this.blocks[this.blockCatgray]]
  // 如果这个方块种类变化多于2个，从这两个中随机选择一个
  if (this.blockCatgrays.length === 2) {
    this.dir = parseInt(Math.random() * 2)
    return this.blockCatgrays[this.dir]
    // 如果这个方块种类变化只有一个，选择这个
  } else if (this.blockCatgrays.length === 1) {
    this.dir = 0
    return this.blockCatgrays[0]
  }
  // 变化有四个就随便选
  this.dir = parseInt(Math.random() * 4)
  return this.blockCatgrays[this.dir]
}


// 方块下落
Block.prototype.blockMoveDown = function () {
  console.log(this.row,this.col,this.check(this.row + 1, this.col));
  if (this.check(this.row + 1, this.col)) {
    this.row++
  } else {
    this.blockRenderToMap()
    game.block = new Block
  }
}


// 检查方块是否可以移动,也就是未来的地图数据是否是不为0的
Block.prototype.check = function (row, col) {
  // console.log(game.map.construct[18][4]);
  for (var i = 0; i < 4; i++) {
    if(i + row >= game.row) return false
    for (var j = 0; j < 4; j++) {
      if (this.block[i][j] !== 0 && game.map.construct[i + row][j + col] !== 0) {
        return false
      }
    }
  }
  return true
}


// 方块不能下落之后，将方块形状渲染到地图上
Block.prototype.blockRenderToMap = function () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // if (game.map.construct[i + this.row][j + this.col] === 0) {
      if (this.block[i][j] !== 0) {
        game.map.construct[this.row + i][this.col + j] = this.block[i][j]
      }
    }
  }
}


// 按  W  时方块的动作：变化
Block.prototype.change = function () {
  if (this.dir < this.blockCatgrays.length - 1) {
    this.dir++
  } else {
    this.dir = 0
  }
  this.block = this.blockCatgrays[this.dir]
}

// 按 空格 是方向的动作，加速向下
Block.prototype.pressSpace = function () {
  // while(this.row)
}
