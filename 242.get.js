// 通过path路径获取对象值，类似lodash的get方法


// _.get(object, 'a[0].b.c');
// => 3

const _get = function (object, str) {
  const strarr = str.split(".")
  const length = strarr.length
  const stack = []
  let res = object
  const check = (str) => {
    if (str.includes('[')) {
      const strarr = str.replace(']', "").split('[')
      stack.push(...strarr)
    } else {
      stack.push(str)
    }
  }
  for (let i = 0; i < length; i++) {
    check(strarr[i])
  }

  for (let j = 0; j < stack.length; j++) {
    res = res[stack[j]]
  }
  return res
}

_get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c')