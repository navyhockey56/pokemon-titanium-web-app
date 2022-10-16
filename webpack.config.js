const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const webpackMerge = require('webpack-merge');

const environmentWebpack = () => {
  try {
    return require(`./environment/${process.env.NODE_ENV}.webpack.config.js`);
  } catch {
    console.error("Failed to load extension");
    return {};
  }
}

module.exports = () => {
  return webpackMerge.merge(environmentWebpack(), {
    entry: './src/index.ts',
    module: {
      rules: [
        // {
        //   test: /\.html$/i,
        //   loader: "html-loader",
        // },
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader"]
        // },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          use: 'file-loader?name=[name].[ext]'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new ProgressPlugin()
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  })
};
