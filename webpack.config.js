const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

class CopyPortfolioReferencePlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      "CopyPortfolioReferencePlugin",
      (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: "CopyPortfolioReferencePlugin",
            stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
          },
          () => {
            const referencePath = path.join(
              __dirname,
              "public",
              "portfolio-reference.html",
            );
            if (!fs.existsSync(referencePath)) return;
            const reference = fs.readFileSync(referencePath);
            compilation.emitAsset(
              "portfolio-reference.html",
              new compiler.webpack.sources.RawSource(reference),
            );
          },
        );
      },
    );
  }
}

// Copies known optional assets (hero photo, favicon) from public/ into the
// build output if the user has added them — otherwise skipped silently.
const OPTIONAL_PUBLIC_ASSETS = [
  "hero-photo.jpg",
  "hero-photo.png",
  "favicon.ico",
  "favicon.png",
];

class CopyOptionalAssetsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      "CopyOptionalAssetsPlugin",
      (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: "CopyOptionalAssetsPlugin",
            stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
          },
          () => {
            OPTIONAL_PUBLIC_ASSETS.forEach((filename) => {
              const assetPath = path.join(__dirname, "public", filename);
              if (!fs.existsSync(assetPath)) return;
              const asset = fs.readFileSync(assetPath);
              compilation.emitAsset(
                filename,
                new compiler.webpack.sources.RawSource(asset),
              );
            });
          },
        );
      },
    );
  }
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPortfolioReferencePlugin(),
    new CopyOptionalAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  devtool: "source-map",
};
