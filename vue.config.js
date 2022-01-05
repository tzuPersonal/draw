module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/draw/'
    : '/',
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
