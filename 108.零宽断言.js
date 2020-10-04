const number = new Number(12345678912312312)
Number.prototype._toLocaleString = function (type='method two') {
  let number = this.valueOf()
  let str = ''
  switch (type) {
    case 'method one': {
      number = number.toString().split('').reverse()
      for (let index in number) {
        if ((index + 1) % 3 === 0) {
          str += `${number[index]},`
        } else {
          str += `${number[index]}`
        }
      }
      str = str.split('').reverse().join('')
      return str[str.length - 1] === ',' ? str.substr(0, str.length - 1) : str
    }
    case 'method two': {
      let reg = /\d{1,3}(?=(\d{3})+$)/g
      str = number.toString().replace(reg,(v)=>`${v},`)
      return str
    }
  }
}
console.log(number._toLocaleString() === number.toLocaleString());