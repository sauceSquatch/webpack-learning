const path = require('path'); //node helper

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),  //node helper to find absolute path and will create a folder called build
    filename: 'bundle.js'
  },
  module: {       // loader system
    rules: [      // 
      {
        use: 'babel-loader',      // name of loader
        test: /\.js$/           // regular expression looks to see if the file ends with .js babel will be applied

      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }

};

module.exports = config;
