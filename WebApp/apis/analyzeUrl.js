import ajax from ''
const analyze = (url) => {
  ajax.post('/api/analyze', {
    url: url
  })
}


module.exports = analyze
