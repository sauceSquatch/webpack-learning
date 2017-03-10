const path = require('path'); //node helper
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]

};

module.exports = config;
