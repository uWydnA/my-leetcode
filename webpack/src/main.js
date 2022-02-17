
import { target } from './module.js'
import('./second.js').then(res => {
  console.log(res, 'res');
})
console.log('我是main.js 1')
console.log('use', target)