import { hello } from './hello.mjs'
function main() {
  const box = document.querySelector('.box')
  box.innerHTML = hello
}
main()