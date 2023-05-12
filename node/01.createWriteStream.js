const fs = require('fs')
const out = fs.createWriteStream('./node/out.txt', {
  flags: 'w',
  encoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true
})

out.write('some data');
out.write('some more data');
out.end('done writing data');

console.log(out, 'out');