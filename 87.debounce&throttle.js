function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function throttle(fn, delay) {
    let start = +Date.now()
    let timer = null
    return function (...args) {
        const now = +Date.now()
        if (now - start >= delay) {
            clearTimeout(timer)
            timer = null
            fn.apply(this, args)
            start = now
        } else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
}



const fn = () => { console.log(11) }
const newFn = throttle(fn, 1000)
newFn()
setTimeout(() => {
    newFn()
}, 888)
setTimeout(() => {
    newFn()
}, 2100)
setTimeout(() => {
    newFn()
}, 3100)