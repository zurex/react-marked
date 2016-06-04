/**
* @Author: zhujianchao <SuitRabbit>
* @Date:   2016-06-03T15:40:44+08:00
* @Email:  lifereduce@gmail.com
* @Last modified by:   SuitRabbit
* @Last modified time: 2016-06-03T15:41:30+08:00
*/

module.exports = {
  entry: './demo/app.js',

  output: {
    filename: './demo/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    ]
  }
}
