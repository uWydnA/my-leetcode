/** 数组结构数据 */
const arrayData = [
  { id: 2, title: '中国', parent_id: 0 },
  { id: 3, title: '广东省', parent_id: 2 },
  { id: 4, title: '广州市', parent_id: 3 },
  { id: 5, title: '天河区', parent_id: 4 },
  { id: 6, title: '湖南省', parent_id: 2 },
  { id: 1, title: '俄罗斯', parent_id: 0 }
]

function arrayToTree(data) {
  const result = []
  data = data.sort((a, b) => a.parent_id - b.parent_id)
  for (let item of data) {
    if (item.parent_id === 0) {
      result.push(item)
      continue
    }
    const parent = data.find(itm => itm.id === item.parent_id)
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return result
}

console.log(arrayToTree(arrayData));