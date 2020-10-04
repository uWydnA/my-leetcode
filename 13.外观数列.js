/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    const count = n
    let res = '1'
    let format = (data) => {
        console.log(data,'data');
        const target = data.split('')
        let result = ''
        target.forEach((val) => {
            result += `1${val}`
        })
        return result
    }
    if (n === 1) {
        return res
    }
    for (let i = 0; i < n; i++) {
        res = format(res)
    }
    return res
};
console.log(countAndSay(2));