const router = require('koa-router')()

router.prefix('/apis')

router.post('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.post('/bar', function (ctx, next) {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
