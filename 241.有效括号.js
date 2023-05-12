// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。


// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false

const isVaild = (s) => {
  const target = { '{': "}", "[": "]", "(": ")" }
  const length = s.length
  const stack = [s[0]]
  for (let i = 1; i < length; i++) {
    if (target[stack[stack.length - 1]] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  const isVaild = stack.length === 0
  return isVaild
}
isVaild("()[]{}")
isVaild("[{()}]")
isVaild("[{()]]")


