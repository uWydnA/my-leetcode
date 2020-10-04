/**
 * 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
 1.输入字符包括，"("    ,    ")"    和    "<"和其他字符。
2.其他字符表示笔记内容。
 3.()之间表示注释内容，任何字符都无效。    括号保证成对出现。
 4."<"表示退格,    删去前面一个笔记内容字符。括号不受"<"影响    。
 */
function format(str) {
  let strs = str
  let res = ''
  strs = strs.replace(/\(\S+\)/g, '')
  for (const str of strs) {
    if (str === '<') {
      res = res.substr(0, res.length - 1)
    } else {
      res += str
    }
  }
  return res
}
const test = 'a(12345678909987654321234567890987654321)bkdasgtj<ufighs<jhgyu<<<<<<<<<'
console.log(`format`, format(test));