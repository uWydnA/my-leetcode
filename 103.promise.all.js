Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length
    const result = []
    let count =0
    for(let i =0;i<len;i++){
      let promise = Promise.resolve(promises[i])
      promise.then((val)=>{
        result[count++] = val
        if(count === len){
          resolve(result)
        }
      })
      .catch((err)=>{
        reject(err)
      })
    }
  })
}
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});