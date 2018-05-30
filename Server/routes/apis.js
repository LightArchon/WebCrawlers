const router = require('koa-router')()
const fs = require('fs')


const getNewPage = require('../utils/util')
router.prefix('/apis')
router.post('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.post('/analyze', function (ctx, next) {
    getNewPage(ctx.request.body["url"]).then((result) => {
        ctx.body = {
            title: 'get it'
        }
    })


})

module.exports = router
