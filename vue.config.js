const { name } = require("file-loader");


module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    devServer: {
      open: true,
      // 代理
      proxy: {
        '/netease-api': {
          target: 'http://localhost:3000',
          pathRewrite: {
            '/netease-api': ''
          },
          changeOrigin: true,
          secure: false
        }
      }
    },
    resolve: {
      // 别名
      alias: {
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.name = name
    config.resolve.alias.assets('@', resolve('src'))
    // set svg - sprite - loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `
      }
    }
  }
};