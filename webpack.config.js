const path = require(`path`);

const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require(`terser-webpack-plugin`);

const isDev = process.env.NODE_ENV === `development`;
const isBuild = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: `all`,
    },
  };

  if (isBuild) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  }

  return config;
};

const cssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, `css-loader`];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: `[name].[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
  },
  resolve: {
    extensions: [`.js`, `.jsx`, `.json`, `.png`, `.jpg`, `.svg`],
    alias: {
      "@components": path.resolve(__dirname, `./src/components`),
      "@": path.resolve(__dirname, `./src`),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 1234,
    historyApiFallback: true,
    watchContentBase: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      title: "Pendulum",
      minify: {
        collapseWhitespace: isBuild,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: {
          loader: `file-loader`,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules/"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
