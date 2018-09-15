const path = require('path');

module.exports = {
    entry: './site/assets/scripts/Site.js',
    output: {
        filename: 'Site.js',
        path: path.resolve(__dirname, './site/temp/scripts'),
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          },
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    }
};
