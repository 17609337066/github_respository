// 以下代码是从webpack官网抄的


const path = require('path')


module.exports ={
  entry:'./src/js/index.js',
  
  /* 这是entry的完整写法
  entry:{
    main:"./src/js/index.js"
  } 
  */
  output: {
    path:path.resolve(__dirname,'dist/js'),
    filename:'main.js'
  },
  mode:'production',

  // 所有loader都写在module的rules属性中
  // rules数组中的每个对象都是一个loader
  module: {
    rules:[
      // 解析less 不完善
      {
        test:/\.less$/,
        // loader:'less-loader'
        /* 完整写法 
        use:[
          {
            loader:'style-loader'
          },{
            loader:'css-loader'
          },{
            loader:'less-loader'
          }
        ] */
        use:[
          'style-loader',// 用于在html文档中创建一个style标签，将样式“塞“进去
          'css-loader', //将less编译后的css转换成commonJs的一个模块
          'less-loader' //将less编译为css，但不生成单独的css文件，在内存中
        ]
      },
      /* 
        语法检查
      */
     {
       test:/\.js$/, //匹配所有js文件
       exclude:/node_modules/, //排除文件夹
       loader:'eslint-loader',
       options:{
          
       }
     }
    ]
  }
}

/* 
 
*/