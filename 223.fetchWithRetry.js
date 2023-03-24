// 实现一个函数, fetchWithRetry 会自动重试3次，任意一次成功直接返回
const fetchWithRetry = (fn) => {
  let count = 0, success = false, res
  return async (...args) => {
    while (!success && count < 3) {
      count++
      console.log(res, count)
      try {
        res = await fn.apply(this, args)
        success = true
      } catch (error) {
        success = false
      }
    }
    if (success) {
      console.log(res, 'success');
      return res
    } else {
      console.log(res, 'retry 3 time ,but get error');
      throw Error
    }
  }
}
const promise = () => new Promise((reslove, reject) => {
  const randomFlag = Boolean(Math.floor(Math.random() * 10) >= 5)
  if (randomFlag) {
    reslove(true)
  } else {
    reject(false)
  }
})

const promise1 = fetchWithRetry(promise)

const main = async () => {
  try {
    const res = await promise1()
    console.log(res, 'res');
  } catch (error) {
    console.error(error)
  }
}
main()