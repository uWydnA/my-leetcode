console.log('1');

setTimeout(function() {
  console.log('2');
}, 10);

new Promise(resolve => {
    console.log('3');
    resolve();
    setTimeout(() => console.log('4'), 10);
}).then(function() {
    console.log('5')
})

console.log('6');