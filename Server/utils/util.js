const phantom = require('phantom')
const fs = require('fs')
const path = require('path')
const http = require('http')
const dirPath = path.resolve(__dirname, '../download/')

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
    if (path.indexOf('http') == 0) {
        http.get(path, function (res) {

            var imgData = "";
            var last = path.lastIndexOf('/')
            var point = path.indexOf('?');
            if (point <= last) {
                var name = path.substr(last + 1)
            } else {
                var name = path.substr(last + 1, point - last)
            }

            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开


            res.on("data", function (chunk) {
                imgData += chunk;
            });

            res.on("end", function () {
                fs.writeFile(dirPath + '\\' + name, imgData, "binary", function (err) {
                    if (err) {
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            });
        });

    }
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
        }, 50)

    })

    const status = await page.open(url);
    const content = await page.property('content');
    // await instance.exit();

    return page
}

module.exports = getNewPage