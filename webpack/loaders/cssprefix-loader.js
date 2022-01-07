module.exports = function (source) {
  const content = source.replace("hello", "哈哈");
  console.log(content, 'content');
  return content;
}
