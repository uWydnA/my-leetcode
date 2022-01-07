// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

// 示例1:

//  输入：s1 = "waterbottle", s2 = "erbottlewat"
//  输出：True
// 示例2:

//  输入：s1 = "aa", s2 = "aba"
//  输出：False
// 提示：

// 字符串长度在[0, 100000]范围内。
// 说明:

// 你能只调用一次检查子串的方法吗？

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  const firstS2 = s2[0]
  let result = false
  s1.split(firstS2).forEach(item => {
    const firstS2IndexInS1 = s1.indexOf(firstS2 + item)
    const formatS1 = s1.slice(firstS2IndexInS1, s1.length) + s1.slice(0, firstS2IndexInS1)
    if (formatS1 === s2) {
      result = true
    }

  })
  return result
};
console.log(isFlipedString("waterbottle", "erbottlewat"));
console.log(isFlipedString("aa", "aba"));
console.log(isFlipedString("PvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDWSvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmb", "SvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmbPvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDW"));
console.log(isFlipedString("PvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDWSvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmb", "SvrxLBPdAvRpgcIwNOVQDdwPIElrAFqmbPvcvpkpHwaXQxpgGzURBvHRMvCsCPPmlKBSzXDW"));
console.log(isFlipedString("EwioHEUTWGTLKpMuINiorfjZgrUqGuodBKrkLJdUjBIBnAfGscK", "scKEwioHEUTWGTLKpMuINiorfjZgrUqGuodBKrkLJdUjBIBnAfG"));

