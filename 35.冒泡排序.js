function sort(arr) {
    if (arr.length <= 1) return arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = [arr[i], arr[j]]
                arr[j] = arr[i][0]
                arr[i] = arr[i][1]
            }
        }
    }
    return arr
}
console.log(sort([6, 5, 3, 7, 9, 11, 21, 17]));