module.exports = { 
  entry: [ 
    './src/script.js', 
    './src/style.scss' 
  ], 
  output: { 
    path: __dirname, 
    publicPath: '/', 
    filename: 'bundle.js' 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: "script-loader" 
        } 
      }, 
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
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ] 
  } 
};