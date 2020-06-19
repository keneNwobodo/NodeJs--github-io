const myEvents = require('events')

class OurEventClass extends myEvents {
    constructor() {
        super()
        var server1 = 'This is triggered'
        console.log(server1)
    }
}

const newEmitter = new OurEventClass()
newEmitter.on('event', () =>{
   console.log(this.server1)
})

newEmitter.emit('event')