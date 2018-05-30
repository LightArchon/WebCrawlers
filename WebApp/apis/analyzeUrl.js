import ajax from './ajax'
const analyze = (url) => {
  ajax.post('/analyze', {
    url: url
  })
}


export default analyze
