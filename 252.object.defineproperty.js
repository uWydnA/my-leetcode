const data = {
  docids: []
}
let docids = [1, 2, 3]
Object.defineProperty(data, 'docids', {
  get() {
    return docids
  },
  set(newVal) {
    console.log(newVal, 'newVal');
    docids = newVal
  }
})

data.docids = [...data.docids, 1234]
data.docids = [22, 33]
data.docids.splice(0, 1)
data.docids = data.docids
console.log(data.docids);