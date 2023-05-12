const promiselimit = (promises, limit) => {
  const queue = []
  const autorunpromises = (limit) => {
    for (let i = 0; i < limit; i++) {
      const promise = promises.pop()
      if (!promise) return
      queue.push(promise)
      Promise.race(queue).then(res => {
        autorunpromises(1)
      }).catch(error => {
        autorunpromises(1)
      })
    }
  }
  autorunpromises(limit)
}

const promise1 = new Promise(reslove => {
  setTimeout(() => {
    console.log(1);
  }, 1000)
})
const promise2 = new Promise(reslove => {
  setTimeout(() => {
    console.log(2);
  }, 2000)
})
const promise3 = new Promise(reslove => {
  setTimeout(() => {
    console.log(3);
  }, 3000)
})
const promise4 = new Promise(reslove => {
  setTimeout(() => {
    console.log(4);
  }, 4000)
})
const promise5 = new Promise(reslove => {
  setTimeout(() => {
    console.log(5);
  }, 5000)
})
const promise6 = new Promise(reslove => {
  setTimeout(() => {
    console.log(6);
  }, 6000)
})

promiselimit([promise1, promise2, promise3, promise4, promise5, promise6], 2)