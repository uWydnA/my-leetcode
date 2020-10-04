function debounce (fn,wait) {
    let timeout = null
    return function (...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            fn.apply(this,args)
        },wait)
    }
}
function throttle (fn,wait) {
    let timeout =null
    let isActive = false
    return function (...args){
        clearTimeout(timeout)
        if(!isActive){
            isActive = true
            fn.apply(this,args)
            timeout = setTimeout(()=>{
                isActive = false
            },wait)
        }
    }
}