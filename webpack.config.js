const path = require('path');

module.exports = {
    entry: {
      Site: "./site/assets/scripts/Site.js",
      Vendor: "./site/assets/scripts/Vendor.js"
    },
    output: {
        filename: "[name].js",
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
