const fs = require('fs')

fs.stat('nexttick.js', () => console.log('nexttick.js exists'))
setImmediate(() => console.log('Immediate timer 1 executed'))
setImmediate(() => console.log('Immediate timer 2 executed'))
process.nextTick(() => console.log('Next tick 1 executed'))
process.nextTick(() => console.log('Next tick 2 executed'))