function throttle(cb, wait = 3000) {
    let previous = 0
    return (...args) => {
        const now = +new Date();
        if (now - previous > wait) {
            previous = now;
            cb.apply(this, args);
        }
    }
}
function debounce(cb,wait) {
    let timer = null
    return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null;
            cb.apply(this, args)
        }, wait)
    }
}