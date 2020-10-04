function add(a, b) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(a + b)
        },2000)
    })
}
async function sum(a, b) {
    const res = await add(a, b)
    return res
}
async function _console () {
    return await sum(1, 2)
}
console.log(_console());