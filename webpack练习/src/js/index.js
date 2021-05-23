/* 
  该文件可以汇总各种文件，不同于模块化的只能汇总js模块
  这部分代码只是演示webpack默认只能打包js和json的功能

  cli-----命令行接口工具
  webpack只用于开发环境，所以安装命令使用 npm i -D
  如果是生产环境  使用 npm i -S 安装包
*/



import {sum} from './module1'
import {sub} from './module2'
import module3 from './module3'
// 引入json
import a from '../js/test.json'

console.log(sum(1,2));
console.log(sub(3,2));
console.log(module3.mul(2,3));
console.log(module3.div(10,5));
console.log(a,typeof a);