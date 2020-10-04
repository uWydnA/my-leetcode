function* _generator(num) {
    yield num + 1
    yield num + 2
    yield num + 3
}
const generator = _generator(5)
function getResult() {
    return generator.next().value
}
console.log(getResult());
console.log(getResult());
console.log(getResult());