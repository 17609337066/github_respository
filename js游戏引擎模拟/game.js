
// 帧率监控
class FrameState {
  constructor(){
    this.sTime = 0,
    this.curTime = 0,
    this.elapseTime = 0,
    this.minFrame = 999999,
    this.maxFrame = 0,
    this.curFrame = 0;
  }

  start(){
    this.curTime = this.sTime = new Date()
  }

  update(){
    let time = new Date()
    this.elapseTime = time - this.curTime
    this.curTime = time
    if(time - this.sTime > 1000){
      this.minFrame = this.curFrame < this.minFrame ? this.curFrame : this.minFrame;
      this.maxFrame = this.curFrame > this.maxFrame ? this.curFrame : this.maxFrame;
      this.sTime = time
      this.curFrame = 0
    }else{
      ++this.curFrame
    }
  }
}


// 游戏主循环
mainloop(){
  this.interval = requestAnimationFrame(this.mainloop)
  if(this.paused){
    this.frameState.update()
    this.MediaStreamTrack('beforeRender')

    const scene = this.sceneManage.getCurrentScene()
    if(scene){
      scene.update();
      scene.render()
    }
    this.MediaStreamTrack('afterRender')
  }
}

// 游戏场景
let sceneid = 0
export default class Scene extends Eventemitter{
  constructor(props){
    super()
    this.id = `scene_${sceneid}`

    this.x = props.x || 0
    this.y = props.y || 0
    this.width = props.width || 320
    this.height = props.height || 200
    this.color = props.color || '#000'

    this.holder = this.createHolder()
    this.canvas = this.createCanvas()
    this.ctx = this.canvas.getContext('2d')

    this.elements = []
    this.elementsMap = {}
    this.listeners = []

    this.setPos()
    this.setSize()
    this.setColor(this.color)

    this.holder.appendChild(this.canvas)
    document.body.appendChild(this.holder)
  }

  createHolder(){
    const div = document.createElement('div')
    div.style.position = 'absolute'
    return div
  }

  createCanvas(){
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.zIndex = -1
    canvas.style.width = this.width + 'px'
    canvas.style.height = this.height + 'px'
    canvas.setAttribute('width',this.width)
    canvas.setAttribute('height',this.height)
    return canvas
  }

  createChild(Sprite,props){
    const sprite = new Sprite(props)
    this.appendChild(sprite)
    return sprite
  }

  appendChild(child){
    child.owner = this
    this.elements.push(child)
    this.elementsMap[child.name] = child
  }

  removeChild(child){
    if(child && child.conRemove){
      child.conRemove = true
    }
  }

  clean(){
    this.elements.length = 0
    this.elementsMap = {}
    this.listeners = []
    document.body.removeChild(this.holder)
    this.holder = this.canvas = this.ctx = null
  }

  setPos(x,y){
    this.x = x || this.x
    this.y = y || this.y

    this.holder.style.left = this.x
    this.holder.style.top = this.y
  }

  seetSize(width,height){
    this.width = width || this.width
    this.height = height || this.height

    this.holder.style.width = this.width
    this.holder.style.height = this.height 
  }

  setColor(color){
    this.holder.background = color || this.color
  }

  update(){
    this.elements.forEach(ele =>{
      ele.update()
    })

    this.removeAllConRemove()
  }

  removeAllConRemove(){
    for(let i = 0;len=this.elements.length;i < len ;i++){
      const canRemove = this.elements[i].canRemove
      const name = this.elements[i].name
      if(canRemove){
        this.elements.splice(i,1)
        delete this.elementsMap[name]
      }
    }
  }

  findChild(name){
    let ele = null
    for(let i = 0;len=this.elements.length;i < len ;i++){
      if(this.elements[i].name === name){
        ele = this.elements[i]
        break
      }
    }
    return ele
  }

  render(){
    this.clear()
    this.emit('beforeRender' + this.id,this.ctx);
    this.renderChild()
    this.emit('afterRender' + this.id,this.ctx)
  }

  fire(name,callback){
    this.on(name + this.id,callback)
  }

  renderChild(){
    this.elements.forEach(ele =>{
      this.ctx.save()
      ele.render(this.ctx)
      this.ctx.restore()
    })
  }

  clear(){
    this.ctx.clearRect(0,0,this.width,this.height)
  }

  show(){
    this.holder.style.display = ''
  }

  hide(){
    this.holder.style.display = 'none'
  }






}


// 游戏精灵
class Sprite{
  constructor(props = {}){
    this.name = props.name || `sprite_${spriteId++}`
    this.x = props.x || 0
    this.y = props.y || 0

    this.vx = props.vx || 0
    this.vy = props.vy || 0
    
    this.ax = props.ax || 0
    this.ay = props.ay || 0
    this.deg = props.deg || 0
    this.canRemove = false
  }

  moveTo(x = this.x,y=this.y){
    this.x=x
    this.y = y
  }

  move(xOff,yOff){
    this.x += xOff
    this.y += yOff
  }

  moveStep(){
    this.vx += this.ax
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy
  }

  retate(deg){
    this.deg = deg
  }

  update(deg){
    this.deg = deg
  }

  render(ctx){
    return
  }
}