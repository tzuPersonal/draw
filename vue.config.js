module.exports = {
  publicPath: '././',
  outputDir: 'docs',
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
};
