
import { target } from './module.js'
import('./second.js').then(res => {
  console.log(res, 'import 2js then');
})
console.log('我是main.js')
console.log('target:', target)