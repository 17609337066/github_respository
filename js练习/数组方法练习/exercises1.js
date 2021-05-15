/* 题 1：查找数组对象中 age 大于 18 对象
编写函数 filterAdult,满足

filterAdult([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]);
// 输出
[
    {age: 19, name:'Jack'},
    {age: 25, name:'David'}
] */

// let a = [
//   {age: 19, name:'Jack'},
//   {age: 5, name:'Apple'},
//   {age: 12, name:'Lynn'},
//   {age: 25, name:'David'}
// ]

// function filterAdult(arr){
//   let temp = []
//   arr.forEach(item =>{
//     if(item.age < 18) return
//     temp.push(item)
//   })
//   return temp
// }


// console.log(filterAdult(a));


/* 题 2：判断数组中是否所有的数字都大于 0
编写函数 isAllNumPosive,满足

isAllNumPosive([1, 2, 3, 4]);  // 输出 true
isAllNumPosive([1, 2, 3, 4, -1]);  // 输出 false
isAllNumPosive([1, 2, 3, 4, 'a', {a:3}]);  // 输出 true
 */

// function isAllNumPosive(arr){
//   let isPosive = true
//   for(v of arr){
//     if(!v) return console.warn('数组里有无值属性！！')
//     if(typeof v === 'number'){
//       isPosive = isPosive && v > 0
//     }else if(typeof v === 'string'){
//       isPosive = isPosive && Number(v) > 0
//       console.log(isPosive);
//     }else if(typeof v === 'object'){
//       Object.values(v).forEach(item =>{
//         console.log(item);
//         isPosive = isPosive && item > 0
//       })
//     }
//   }
//   console.log(isPosive);
//   return isPosive
// }

// isAllNumPosive([1, 2, 3, 4]);  // 输出 true
// isAllNumPosive([1, 2, 3, 4, -1]);  // 输出 false
// isAllNumPosive([1, 2, 3, 4, 'a', {a:-3},undefined]);  // 输出 true

// function isAllNumPosive (arr) {
//   var res = true;
//   if(Array.isArray(arr)){
//       if(arr.every){
//           res = arr.every(function (each) {
//               var isPosive = true;
//               if(typeof each === 'number' && each < 0){
//                   isPosive = false;
//               }
//               return isPosive;
//           });
//       } else {
//           arr.forEach(function  (each) {
//               if(typeof each === 'number' && each < 0){
//                   res = false;
//               }
//           });
//       }
//   } else {
//       throw new TypeError('param is not Array');
//   }
//   console.log(res);
//   return res;
// }

/* 题 3：改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头
编写函数 putFirst,满足
var arr = [1, 2, 3, 4];
putFirst(arr, 2);
// 此时 arr为 [3, 1, 2, 4] */

// function putFirst(arr,n){
  // if(!Array.isArray(arr)) return console.warn('请传入数组结构的第一个参数')
//   arr.unshift(arr.splice(n,1)[0])
//   return arr
// }

// var arr = [1, 2, 3, 4];
// console.log(putFirst(arr, 2));;

// 题 4: 将 arguments 对象转换成数组
// 编写函数 toArray,满足

(function(){
    console.log([].slice.call(arguments));
    // console.log(Array.isArray(arr)); // 输出 ture
    arguments = Array.from(arguments)
})(1, 2);

function toArray(arr){
  // if(!Array.isArray(arr)) console.warn('请传入数组结构的参数');
  // return Array.from(arr)
  return [].slice.call(arr)
}