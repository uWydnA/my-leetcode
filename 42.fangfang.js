/*
现有一个含有字符串的数组，形如：
["ab","c","ab","d","c"]
要求将其中出现的重复字符串，依次添加上数字序号，如：
["ab1","c1","ab2","d","c2"]
要求：
1. 未重复出现的字符串不处理；
2. 仅对相同的一组字符串依次添加序号，而不是共用一组序号；
3. 保持原数组顺序；
*/

function addSerial(arr) {
    if (arr.length === 0) return arr
    let dataObj = {}
    arr.forEach((val) => {
        if (dataObj[val] == null) {
            dataObj[val] = 1
        } else {
            dataObj[val]++
        }
    })
    for (const key of Object.keys(dataObj)) {
        let count = 0
        if(dataObj[key]===1) continue 
        for (let index in arr) {
            if (arr[index] === key) {
                count++
                arr[index] = `${arr[index]}${count}`
            }
        }
    }
    return arr
}
console.log(addSerial(["ab", "c", "ab", "d", "c"])); // ab1, c1, ab2, d, c2