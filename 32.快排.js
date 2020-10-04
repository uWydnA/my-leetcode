function fastSort(arr) {
    if (arr.length === 0) return arr
    let index = parseInt(arr.length / 2)
    let left = []
    let right = []
    let middle = arr.splice(index, 1)
    for (let i of arr) {
        if (i < middle) {
            left.push(i)
        } else {
            right.push(i)
        }
    }
    return fastSort(left).concat(middle, fastSort(right))
}
console.log(fastSort([1, 5, 7, 4, 3, 7, 9, 77, 66, 88, 55, 4, 3, 2, 12, 23, 34, 32]));