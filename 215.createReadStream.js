const fs = require('fs')
const { Blob } = require('node:buffer')
console.time('success')
console.time('createReadStream')
const readStream = fs.createReadStream('./demo2g.pdf');
let buff = []
readStream.on("data", (buffdata) => {
  buff.push(buffdata);
});
readStream.on("end", async () => {
  console.timeEnd('createReadStream')
  console.time('Blob')
  const blob = new Blob(buff);
  console.log(blob, 'blob');
  console.timeEnd('Blob')
  console.timeEnd('success')
});