const promiseallsettled = (promises) => {
  return new Promise((reslove) => {
    const resarr = []
    let count = 0
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((res) => {
        resarr[i] = res
      }).catch((error) => {
        resarr[i] = error
      }).finally(() => {
        count++
        if (count === promises.length) {
          reslove(resarr)
        }
      })
    }
  })
}
const promise1 = new Promise((reslove) => {
  setTimeout(() => {
    reslove(1)
  }, 3000)
})
const promise2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove(2)
  }, 2000)
})
const promise3 = new Promise((reslove) => {
  setTimeout(() => {
    reslove(3)
  }, 1000)
})
promiseallsettled([promise1, promise2, promise3]).then(res => {
  console.log(res, 'res');
})