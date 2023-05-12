const _new = (fn) => {
  const obj = {}
  obj.__proto__ = fn.prototype
  const res = fn.apply(obj, [...arguments].slice(1));
  return typeof res === 'object' ? res : obj
}
