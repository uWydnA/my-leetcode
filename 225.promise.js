const _PromiseStateEnum = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected'
}
class _Promise {
  constructor(fn) {
    this.init()
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  init() {
    this.status = _PromiseStateEnum.pending
    this.value = undefined
    this.reason = undefined
    this.onResloveCallback = []
    this.onRejectCallback = []
  }

  resolve(value) {
    if (this.status === _PromiseStateEnum.pending) {
      this.status = _PromiseStateEnum.fulfilled
      this.value = value
      while (this.onResloveCallback.length) {
        const callback = this.onResloveCallback.shift()
        callback(this.value)
      }
    }
  }
  reject() {
    if (this.status === _PromiseStateEnum.pending) {
      this.status = _PromiseStateEnum.rejected
      this.reason = reason;
    }
  }
  then(onFulfilled, onRejected) {
    const _promse = new _Promise((resolve, reject) => {
      if (this.status === _PromiseStateEnum.fulfilled) {
        setTimeout(() => {
          const onFulfilledRes = onFulfilled(this.value);
          resolvePromise(_promse, onFulfilledRes, resolve, reject);
        }, 0)
      } else if (this.status === _PromiseStateEnum.rejected) {
        onRejected(this.reason);
      } else if (this.status === _PromiseStateEnum.pending) {
        this.onResloveCallback.push(onFulfilled);
        this.onRejectCallback.push(onRejected);
      }
    })
    return _promise
  }


}
const resolvePromise = (_promse, onFulfilledRes, resolve, reject) => {
  if (_promse === onFulfilledRes) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (onFulfilledRes instanceof _Promise) {
    onFulfilledRes.then(resolve, reject)
  } else {
    resolve(onFulfilledRes)
  }
}

const _promise = new _Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true)
    reject(false)
  }, 100)
})

_promise.then(res => {
  console.log(res, '_promise then1');
  return _promise
}).then(res => {
  console.log(res, '_promise then11');
})

// _promise.then(res => {
//   console.log(res, '_promise then2');
// })

// _promise.then(res => {
//   console.log(res, '_promise then3');
// })

// _promise.then(res => {
//   console.log(res, '_promise then4');
// })