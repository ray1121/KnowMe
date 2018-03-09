const path = require('path')
const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const config = require('config-lite')({
    config_basedir: __dirname,
    config_dir: 'configs'
})
const pkgName = require('./package').name
const routes = require('./routes')

const app = express()

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为 ejs
app.set('view engine', 'ejs')


/**
 * 设置静态文件目录
 * 静态文件目录的中间件应该放到 routes(app) 之前加载
 * 因为这样静态文件的请求就不会落到业务逻辑的路由里
 */
app.use(express.static(path.join(__dirname, 'public')))

// 判断缓存数据库
if ('redis' === config.session.store) {
   let Store = require('connect-redis')(session);
} else if ('memcached' == config.session.store) {
   let Store = require('connect-memcached')(session);
} else{
    console.log("请您配置任意一个redis或memcache缓存数据库")
}

// session 中间件
app.use(session({
    name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new Store(config.session.store)
}))


/**
 * flash 中间件，用来显示通知
 * flash 中间件应该放到 session 中间件之后加载，
 * 因为 flash 是基于 session 实现的。
 */
app.use(flash())

// 路由
routes(app)

// 监听端口，启动程序
app.listen(config.port, function () {
  console.log(`${pkgName} listening on port ${config.port}`)
})