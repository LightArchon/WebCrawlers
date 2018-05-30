const axios = require('axios')


const ajax = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
});

module.exports = ajax;
