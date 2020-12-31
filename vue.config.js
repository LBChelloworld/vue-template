module.exports = {
  // 解决 build后页面空白问题
  publicPath: process.env.NODE_ENV === "production" ? '/xxx/' : '/',
  // 发布模式忽略 npm依赖包
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main.js')
      config.set('externals', {
        vue: 'Vue',
        // 'vue-lazyload': 'VueLazyload'
      })
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 自定义生产模式页面
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
}