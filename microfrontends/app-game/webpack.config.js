const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ningowood",
    projectName: "app-game",
    webpackConfigEnv,
    argv,
  });

  // publicPath = IS_PROD ? '/app-game-static/' : 'http://localhost:8601/'

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // output: {
    //   libraryTarget: 'amd',
    //   filename: '[name]-[chunkhash].js',
    //   publicPath: publicPath,
    // },
  });
};
