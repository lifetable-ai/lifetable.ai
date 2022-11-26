const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ningowood",
    projectName: "root-login",
    webpackConfigEnv,
    argv,
  });

  // publicPath = IS_PROD ? '/root-login-static/' : 'http://localhost:8501/'

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // output: {
    //   libraryTarget: 'amd',
    //   filename: '[name]-[chunkhash].js',
    //   publicPath: publicPath,
    // },
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
      ],
    },
  });
};
