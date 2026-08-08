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

// Copies public/hero-photo.* into the build output if the user has added one.
class CopyHeroPhotoPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("CopyHeroPhotoPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "CopyHeroPhotoPlugin",
          stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        () => {
          ["hero-photo.jpg", "hero-photo.png"].forEach((filename) => {
            const photoPath = path.join(__dirname, "public", filename);
            if (!fs.existsSync(photoPath)) return;
            const photo = fs.readFileSync(photoPath);
            compilation.emitAsset(
              filename,
              new compiler.webpack.sources.RawSource(photo),
            );
          });
        },
      );
    });
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
    new CopyHeroPhotoPlugin(),
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
