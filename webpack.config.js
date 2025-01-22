const path = require('path');
module.exports = {
  entry: "./src/DateRangeOnSelectYearMonthPicker.js",
  mode: "production",
  output: {
    path: path.resolve("dist"),
    filename:"index.js",
    libraryTarget:"commonjs",
    library: 'DateRangeOnSelectYearMonthPicker',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css?$/,
        use:["style-loader","css-loader"]
      },
    ],
  }
};