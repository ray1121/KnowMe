module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /**
   * 增添element-ui插件
   */
  plugins: ['~/plugins/element-ui'],
  /*
  ** Add axios globally
  */
  build: {
    /**
     * 把它打包到库文件房间vendor-buldel里面以获得更好的缓存效果
     * 添加element-ui库文件
    */
    vendor: ['axios', 'element-ui'],
    /**
     * 借助 babel-plugin-component，
     * 可以只引入需要的组件，以达到减小项目体积的目的。
     */
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: '~assets/theme-ray'
      }]]]
    },
    /*
    * 提取css样式到单独文件
    **/
    extractCSS: true,
    /*
    ** Run ESLINT on save
    ** extend()将分别在服务端和客户端分别执行，继承webpack
    ** ctx 包含dev, isClient, isServer.
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
