function dupicatedWord(arr) {
  const result = {} 
  for(const str of arr){
    if(result[str]==null){
      result[str] = false
    }else{
      result[str] = true
    }
  }
  return result
}

const tests = ['a','b','c']
console.log(`dupicatedWord`, dupicatedWord(tests));