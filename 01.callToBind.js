Function.prototype._bind = function (pointer) {
    let that = this
    let firstArg = arguments[1]
    return function (...otherArgs) {
        return that.apply(pointer, [firstArg, ...otherArgs])
    }
}
Function.prototype._apply = function (thisArg, params) {
    const funcSelf = this
    const paramArr = Array.isArray(params) ? params : []
    if (thisArg === undefined || thisArg === null) {
        return funcSelf(...paramArr)
    }
    const catchObj = JSON.parse(JSON.stringify(thisArg))
    const funcName = Symbol()
    catchObj[funcName] = funcSelf
    console.log(catchObj[funcName])
    return catchObj[funcName](...paramArr)
}
Function.prototype._call = function (thisArg, ...params) {
    const funcSelf = this
    const paramArr = Array.isArray(params) ? params : []
    if (thisArg === undefined || thisArg === null) {
        return funcSelf(...paramArr)
    }
    const catchObj = JSON.parse(JSON.stringify(thisArg))
    const funcName = Symbol()
    catchObj[funcName] = funcSelf
    console.log(catchObj[funcName])
    return catchObj[funcName](...paramArr)
}
function add(a, b, c, d) {
    return a + b + c + d
}
this.a = 111
this.b = 333
let obj = {
    a: 22,
    b: 44,
    c: 11,
    d: 55
}
console.log(add._bind(obj, 1)(2, 3, 4))
console.log(add._apply(null, [1, 2, 3, 4]))
console.log(add.call(null, 1, 2, 3, 4))
// console.log(add.apply(obj),[1,2,3])
// console.log(obj,this)