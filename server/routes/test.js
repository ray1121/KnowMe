import { Router } from 'express'
const router = Router()
/**
 * 定义单个test router的中间件
 * 注意中间件的next（）的使用
 */
router.use(function timeLog (req, res, next) {
  console.log('进入了test模块')
  next()
})
router.get('/', (req, res) => {
  res.download('/Users/liulei/Desktop/电路城/cndzz/src/public/img/icon-level.png')
})
router.get('/ray', (req, res) => {
  res.end('ray is so shuaige')
})
export default router
