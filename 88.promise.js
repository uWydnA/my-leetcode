function _Promise (fn) {
  let PENDING = 0
  let FULFILLED = 1
  let REJECTED = 2
  this.state = PENDING
  this.value = null
  this.handlers = []
  this.fulfill = (result)=>{
    this.state = FULFILLED
    this.value = result
    this.handlers.forEach(this.handle)
    this.handlers = []
  }
  this.reject = (error)=>{
    this.state = REJECTED
    this.value = error
    this.handlers.forEach(this.handle)
    this.handlers = []
  }
  this.resolve = (result)=>{
    try {
      le then
    } catch (error) {
      
    }
  }
}