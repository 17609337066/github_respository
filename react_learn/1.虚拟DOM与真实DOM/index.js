
/* 
  继承   call和原型继承的区别

  1.call可以继承父类的构造函数的方法，但是这种继承会造成内存的浪费（每一个继承此父类的子类都会有这个方法，并且会创建在内存上，无论它用不用）
  2.原型继承是不能继承父类的属性的，只能继承父类定义在原型对象上的方法

  所以需要继承父类的所有属性和方法，又要避免浪费内存，就需要两者结合实现继承
*/

// class Person{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }

//   speak(log){
//     console.log('speak',this,log);
//   }

//   speak1 = () =>{
//     console.log('speak1',this);
//   }
// }


// class Child extends Person{
//   constructor(name,age,gender){

//   }
// }

// function Person(name,age){
//   this.name = name
//   this.age = age

//   // this.talk = function(){
//   //   console.log('talk',this);
//   // }

//   this.talk = () =>{
//     console.log('talk',this);
//   }
// }

// Person.prototype.speak = function(){
//   console.log('speak',this);
// }

// 这是原生的继承方法
// function Child(name,age,gender){
//   Person.call(this,name,age)
//   this.gender = gender

// }

// console.log(Child.prototype);

// console.log(Child instanceof Person);
// Child.prototype = Object.create(Person)

// Child.prototype.constructor = Child

// console.log(new Person);

// let a = Object.create(Person)
// console.log(a);

// Child.prototype = new Person()

// console.log('1111111',Child.prototype.constructor);

// let p = new Child('1','2')

// let p1 = new Person('2','3')

// console.log(p);
// console.log(p1);
// console.log(p instanceof Person,p instanceof Child);
// console.log(p1 instanceof Person,p instanceof Child);

// p.talk()
// p1.talk()


// p1.speak()
// p.speak1()




// 通过call方法继承的父类构造函数上的方法，在多个子类使用的时候，会多次占用内存，而原型对象继承的方法没有这个问题



/* 
  迭代器
  interator


*/

// [Symbol.iterator] = function(){
//   console.log(1);
// }
// ab()

let obj = {
  arr: [1, 2, 3, 4],
  [Symbol.iterator] () {
    return {
      next () {
        let index = 0
        if (index < this.arr.length) {
          index++
          return { value: this.arr[index], done: false }
        }
        return { value: 'undifined', done: true }
      }
    }
  }
}


for (v of obj) {
  console.log(v);
}





