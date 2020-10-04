var quickSort = function (arr) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let middleIndex = parseInt(arr.length / 2)
    let middleData = arr.splice(middleIndex, 1)[0]
    arr.forEach((val) => {
        if (val < middleData) {
            left.push(val)
        } else {
            right.push(val)
        }
    })
    return quickSort(left).concat(middleData,quickSort(right))
};
console.log(quickSort([5, 4, 6, 7, 8, 12, 44, 5, 23]));