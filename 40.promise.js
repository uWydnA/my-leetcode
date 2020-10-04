const singlePipe = function (promiseFunc) {
    //写你的代码
    return function (num) {
        return promiseFunc(num)
    }
};

// 测试用例
var promiseFunc = function (data) {
    return new Promise((resolve) => {
        if (data % 2 != 0) setTimeout(() => resolve(data), 1000);
    });
};
var request = singlePipe(promiseFunc);
request(1).then(data => console.log(data)); // 1
request(2).then(data => console.log(data)); // 无反应
setTimeout(() => {
    request(3).then(data => console.log(data)); // 3
}, 1000);