function _Promise(fn) {
    let flag = 'pending', success = [], error = []
    this.then = (successCb,errorCb) => {
        success.push(successCb)
        error.push(errorCb)
    }
    function resolve(data) {
        flag = 'resolve'
        success.forEach((val) => {
            val(data)
        })
    }
    function reject(data) {
        flag = 'reject'
        error.forEach((val) => {
            val(data)
        })
    }
    fn(resolve, reject)
}
const fn1 = (num) => {
    return new _Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num)
        }, 1000)
    })
}
fn1(1).then((res) => { console.log(res); })