const throttle = (func, wait) => {
  let lastTime = Date.now()
  return function (...args) {
    let now = Date.now()
    if (now - lastTime >= wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

const debounce = (func, wait) => {
  let id = null
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

let id = setInterval(
  debounce(() => console.log('1111'), 499)
  , 1)
setTimeout(() => {
  clearInterval(id)
}, 2000)