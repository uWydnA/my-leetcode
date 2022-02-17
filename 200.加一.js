/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 1 && digits[0] === 9) return [1, 0]
  const len = digits.length
  let isContinue = true
  let isAdd = false
  for (let i = len - 1; i >= 0 && isContinue; i--) {
    const target = digits[i]
    if (isAdd) {
      if (target === 9) {
        digits[i] = 0
        if (!digits[i - 1] === 9) {
          isContinue = false
        }
      } else {
        digits[i] = ++digits[i]
        isContinue = false
      }

    }
    if (target === 9) {
      digits[i] = 0
    } else if (!isAdd) {
      digits[i] = ++digits[i]
      if (!(digits[i - 1] === 9)) {
        isContinue = false
      }
      isAdd = true
    }
  }
  return digits
};
console.log(plusOne([1, 2, 3]));