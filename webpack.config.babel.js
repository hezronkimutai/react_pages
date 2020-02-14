import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpack = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        include: path.resolve(__dirname, './src/assets'),
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        include: path.resolve(__dirname, './node_modules/react-alice-carousel/lib/alice-carousel.css'),
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/'),
    historyApiFallback: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
  node: {
    fs: 'empty',
  },
};
export default webpack;