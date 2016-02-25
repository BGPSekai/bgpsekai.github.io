
var config = {
  entry:[
    './app/main.js'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }, 
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
};

module.exports = config;