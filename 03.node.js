const http = require('http')

const app = async (req, res) => {
  res.end('hello, world')
}

http.createServer(app).listen(3000, () => console.log(3000))