class _Promise {
  constructor(fn) {
    this.success = []
    this.error = []
    fn(this.reslove.bind(this), this.reject.bind(this))
  }
  then(success, error) {
    this.success.push(success)
    this.error.push(error)
  }
  reslove(...args) {
    setTimeout(() => {
      const fn = this.success.pop()
      fn.apply(this, args)
    }, 0);
  }
  reject(...args) {
    const fn = this.error.pop()
    fn.apply(this, args)
  }
}

const _promise = new _Promise((resolve, reject) => {
  resolve(false)
})

_promise.then(res => {
  console.log(res, 'res');
})