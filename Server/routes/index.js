const router = require('koa-router')()
const fs = require('fs')
var path = require('path');

router.get('/static', async (ctx, next) => {

})

router.get('*', async (ctx, next) => {
    let html = await fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    ctx.response.type = 'text/html';
    ctx.response.body = html
})


module.exports = router
