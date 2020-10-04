function quickSort (arr) {
  if(arr.length===0) return []
  let midIndex = parseInt(arr.length/2)
  let mid = arr.splice(midIndex,1)
  const left = []
  const right = []
  for(const data of arr){
    if(data > mid){
      right.push(data)
    }else{
      left.push(data)
    }
  }
  return quickSort(left).concat(mid,quickSort(right))
}
let res =  [3, 1, 4, 6, 5, 7, 2]
console.log(quickSort(res));