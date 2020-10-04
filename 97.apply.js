Function.prototype._call = function(context){
  context = context?context:{}
  context.fn = this
  let args = [...arguments].slice(1)[0]
  console.log(args);
  let result =  context.fn(...args)
  delete context.fn
  return result 
}
const fn1 = function (a,b){
  console.log(a,b);
  return a+b
}
console.log(fn1._call(null,[11,22]));