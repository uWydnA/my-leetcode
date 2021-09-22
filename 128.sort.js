let itemsArray = [{ name: 3 }, { name: 2 }, { name: 1 }, { name: 4 }, { name: 5 }, { name: 6 }]
let sortingArr = [{ name: 1, sort: 3 }, { name: 2, sort: 1 }, { name: 4, sort: 2 }, { name: 5, sort: 4 }]
const sortByArr = () => {
  return itemsArray.sort((a, b) => {
    const before = sortingArr.find(item => item.name === a.name)?.sort
    const after = sortingArr.find(item => item.name === b.name)?.sort
    if (!after) return -1
    if (!before) return 0
    return before - after
  })
}
console.log(sortByArr());