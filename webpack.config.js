const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Location',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
