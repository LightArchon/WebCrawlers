const phantom = require('phantom')
const fs = require('fs')
const path = require('path')
const http = require('http')
const dirPath = '../download/'

function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

function downloadUrl(path) {

    http.get(path, function (req, res) {  //path为网络图片地址
        var imgData = '';
        req.setEncoding('binary');
        req.on('data', function (chunk) {
            imgData += chunk
        })
        req.on('end', function () {
            fs.writeFile(dirPath, imgData, 'binary', function (err) {  //path为本地路径例如public/logo.png
                if (err) { console.log('保存出错！') } else {
                    console.log('保存成功!')
                }
            })
        })
    })
    
}


const getNewPage = async function (url) {
    mkdirSync(dirPath)
    const instance = await phantom.create([], {
        //phantomPath: '../bin/phantomjs.exe',
    });
    const page = await instance.createPage();
    await page.setting({
        javascriptEnabled: true,
        loadImages: true
    });
    await page.on('onResourceRequested', function (requestData) {
        console.info('Requesting', requestData.url);
    });
    await page.on('onResourceReceived', function (requestData) {
        var contentType = requestData.contentType
        if (/^image/.test(contentType)) { 
            downloadUrl(requestData.url)
            console.info('Requesting', requestData.url);
        }
    });
    page.evaluate(function () {
        var inv = setInterval(function () {
            var top = window.document.body.scrollTop;
            window.document.body.scrollTop += 50;
            if (top == window.document.body.scrollTop) {
                clearInterval(inv);
            }
        },50)
         
    })

    const status = await page.open(url);
    const content = await page.property('content');
    // await instance.exit();

    return page
}

module.exports = getNewPage