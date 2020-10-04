function sortAll(nums) {
    function perm(arr, p, q, res) {
        if (p === q) {
            res.push([...arr])
        } else {
            for (let i = p; i <= q; i++) {
                swap(arr, i, p)
                perm(arr, p + 1, q, res)
                // 这里再次交换是为了保证 arr 的相对一致
                swap(arr, i, p)
            }
        }
    }
    function swap(arr, p, q) {
        let temp = arr[p]
        arr[p] = arr[q]
        arr[q] = temp
        return arr
    }
    let res = []
    perm(nums, 0, nums.length - 1, res)
    return res
}

console.log(sortAll([1, 2, 3]));