const path = require(`path`)
const htmlWebpackPlugin = require('html-webpack-plugin')
// const { BundleAnalyzePlugin } = require(`webpack-bundle-analyzer`)

module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname, `src/index.js`),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzePlugin(),
    new htmlWebpackPlugin({
      title: `My web Page`,
      filename: `index.html`,
      template: `src/index.html`,
    }),
  ],
};
