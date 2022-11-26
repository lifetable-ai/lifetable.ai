const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ningowood";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const proxy = {
    '/api/**': {
      target: 'http://localhost:4000/',
      secure: false,
      changeOrigin: false,
      pathRewrite: { '/api/': '/' },
    },
  };

  // const publicPath = '/'

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // output: {
    //   libraryTarget: 'amd',
    //   filename: '[name]-[chunkhash].js',
    //   publicPath: publicPath,
    // },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      proxy,
    },
    // externals: [/^@org-name\/.+/]
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
