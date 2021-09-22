class Event {
  constructor() {
    this.event = new Map()
  }
  on(command, cb) {
    const handles = this.event.get(command)
    if (handles) {
      this.event.set(command, handles.concat(cb))
    } else {
      this.event.set(command, [cb])

    }
  }
  emit(command, ...args) {
    const handles = this.event.get(command)
    if (handles) {
      if (args.length >= 1) {
        handles.forEach((handle) => {
          handle.apply(this, args)
        })
      } else {
        handles.forEach((handle) => {
          handle.apply(this)
        })
      }
    }
  }
  remove(command, cb) {
    const handles = this.event.get(command)
    if (handles) {
      const handleIndex = handles.findIndex(handle => handle.name === cb.name)
      if (handleIndex !== -1) {
        handles.splice(handleIndex, 1)
        this.event.set(command, handles)
      }
    }
  }
}
const events = new Event()
const fn = (body) => {
  console.log(2222, body);
}
const fn2 = (body) => {
  console.log(1111, body);
}
events.on('xx', fn2)
events.on('xx', fn)
events.remove('xx', fn2)
events.emit('xx', [1, 2, 3, 4])
console.log(events.event);