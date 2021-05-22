// (function(){
//   window.Game = function(){

//   }

//   Game.prototype
// })()


function Game () {
  // 渲染的dom行数
  this.row = 18
  // 渲染的dom列数
  this.col = 12
  // 方块下落速度/游戏速度
  this.speed = 50
  // 临时速度，用于空格加速
  this.tempSpeed = 0
  // 游戏帧数，用来控制多久执行一次方块下坠的方法
  this.frames = 0
  // 游戏主定时器id
  this.intervalId = null

  this.pressSpace = false
  // 方块对象
  this.block = new Block()
  // 地图对象
  this.map = new Map()
  //判断游戏结束
  this.over = false
  // 游戏初始化，渲染dom
  this.init()

  // 开启游戏进程
  this.start()

  // 注册事件
  this.bindEvent()
}

Game.prototype.init = function () {
  let $table = $("<table></table>")
  for (let i = 0; i < this.row; i++) {
    let $row = $("<tr></tr>")
    for (let j = 0; j < this.col; j++) {
      let $td = $("<td></td>")
      $($td).appendTo($row)
    }
    $($row).appendTo($table)
  }
  $($table).appendTo('body')
}

// 用来给方格上色
Game.prototype.setColor = function (row, col, num) {
  $("tr").eq(row).children('td').eq(col).addClass('c' + num)
}

// 开始游戏线程
Game.prototype.start = function () {
  let _this = this
  this.intervalId = setInterval(function () {
    _this.clearScreen()
    _this.map.checkClearLine()
    _this.map.render()
    if ((_this.frames) % (1000 / _this.speed) === 0) {
      _this.block.blockMoveDown()
    }
    
    _this.over && clearInterval(game.intervalId)
    _this.block.render()


    // if(_this.pressSpace) _this.block.pressSpace()
    _this.frames++
  }, 20)
}



// 清除屏幕
Game.prototype.clearScreen = function () {
  // if($('td').hasClass()) return
  for (let i = 0; i < this.row; i++) {
    for (let j = 0; j < this.col; j++) {
      $('tr').eq(i).children('td').eq(j).removeClass()
    }
  }
}


// 注册事件
Game.prototype.bindEvent = function () {
  this.keydown()
  this.keyup()

}


// 按键按下事件
Game.prototype.keydown = function () {
  let _this = this
  $(window).keydown(function (event) {
    switch (event.keyCode) {
      case 87:
        _this.block.change()
        break;
      case 83:
        // _this.block.moveToDown()
        break;
      case 65:
        _this.block.moveToLeft()
        break;
      case 68:
        _this.block.moveToRight()
        break;
      // 常用keyCode： 空格 32   Enter 13   ESC 27
      case 32:
        _this.block.pressSpace()
        // _this.pressSpace = true
        // console.log('press space', _this.pressSpace);
        break;
    }
  })
}

// 按键抬起事件
Game.prototype.keyup = function () {
  let _this = this
  $(window).keyup(function (event) {
    if (event.keyCode === 32) {
      // _this.pressSpace = false
    }
  })
}



