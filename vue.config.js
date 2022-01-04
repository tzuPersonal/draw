module.exports = {
  pubilcPath: './docs',
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
