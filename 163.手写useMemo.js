const depsMap = []
const useMemo = (func, dep) => {
  let depIndex = depsMap.findIndex(({ key }) => {
    return Object.is(key, dep)
  })
  console.log(depIndex, 'depIndex');
  if (depIndex === -1) {
    const newData = func()
    depsMap.push({ key: dep, value: newData })
    depIndex = depsMap.findI
    ndex(({ key }) => {
      return Object.is(key, dep)
    })
  }


  return depsMap[depIndex].value
}

const dep1 = []
const dep2 = {}
const dep3 = { name: 1 }
const data1 = useMemo(() => {
  return Date.now()
}, dep1)
const data2 = useMemo(() => {
  return Date.now()
}, dep1)
const data3 = useMemo(() => {
  return Date.now()
}, dep2)
const data4 = useMemo(() => {
  return Date.now()
}, dep2)
const data5 = useMemo(() => {
  return Date.now()
}, dep3)
console.log(data1, 'data');
console.log(data2, 'data');
console.log(data3, 'data');
console.log(data4, 'data');
console.log(data5, 'data');