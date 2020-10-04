function formatURL (url) {
  let data = url.split("?")[1].split('&')
  const result = {}
  for(let i of data) {
    const formatI = i.split('=')
    if(formatI.length === 2) {
      result[formatI[0]] = formatI[1]
    }else{
      result[formatI[0]] = undefined
    }
  }
  return result
}
const url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'
console.log(formatURL(url));