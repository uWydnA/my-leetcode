/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let target = s[i]
    if (target === ' ') {
      res += '%20'
    } else {
      res += target
    }
  }
  return res
};

console.log(replaceSpace('We are happy.'));