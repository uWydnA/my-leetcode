Function.prototype._bind = () => {

}
function add(a, b) {
    return a + b
}
console.log(add._bind(1)(2));