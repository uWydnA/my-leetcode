const tests = [
  { input: 33, output: '33' },
  { input: 1234.56, output: '1,234.56' },
  { input: 123456789, output: '123,456,789' },
  { input: 987654.321, output: '987,654.321' },
  { input: -987654.3, output: '-987,654.3' },
]
function paddingNum(num){
  return num.toLocaleString()
}
console.log(`paddingNum`,paddingNum(tests[0].input) );
console.log(`paddingNum`,paddingNum(tests[1].input) );
console.log(`paddingNum`,paddingNum(tests[2].input) );
console.log(`paddingNum`,paddingNum(tests[3].input) );
console.log(`paddingNum`,paddingNum(tests[4].input) );