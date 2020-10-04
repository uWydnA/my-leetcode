function deepClone (data){
  const type = Object.prototype.toString.call(data)
  switch (type) {
    case '[object Array]':{
      const arr = []
      for(const i of data){
        arr.push(deepClone(i))
      }
      return arr
    }
    case '[object Object]':{
      const obj = {}
      for(const i of Object.keys(data)){
        obj[i] = deepClone(data[i])
      }
      return obj
    }
    default :{
      return data
    }
  }
}
const req = {name:1,age:{name:2}}
const res = deepClone(req)
console.log(res.age,req.age,res.age === req.age);