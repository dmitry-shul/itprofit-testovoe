const path = require('path');

module.exports = { 
  entry: [ 
    './src/index.js', 
    './src/index.scss' 
  ], 
  output: { 
    path: __dirname, 
    publicPath: '/', 
    filename: 'bundle.js' 
  }, 
  module: { 
    rules: [ 
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      /*{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: "script-loader" 
        } 
      },*/ 
      { 
        test: /\.css$/, 
        use: [ 
          { 
            loader: "style-loader" 
          }, 
          { 
            loader: "css-loader", 
            options: { 
              modules: true, 
              importLoaders: 1, 
              localIdentName: "[name]_[local]_[hash:base64]", 
              sourceMap: true, 
              minimum: true 
            } 
          } 
        ] 
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ] 
  },
  devServer: {
    /*webSocketServer: false,*/
    static: {
      directory: path.join(__dirname, '/'),
    },
    /*compress: true,
    port: 9090,*/
  },
};