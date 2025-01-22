const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/DateRangeOnSelectYearMonthPicker.js',
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      name: 'DateRangeOnSelectYearMonthPicker',
      type: 'umd',
    },
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/DateRangeOnSelectYearMonthPicker.css', to: '' }, // Copy CSS file to dist folder
      ],
    }),
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
