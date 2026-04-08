const EventEmitter = require('events');

// Create emitter object
const emitter = new EventEmitter();

// Listener 1
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Listener 2 (multiple listeners for same event)
emitter.on('greet', (name) => {
    console.log(`Welcome to Node.js, ${name}!`);
});

// Another event
emitter.on('taskDone', (task) => {
    console.log(`Task completed: ${task}`);
});

// Emit events with data
console.log("Starting event demo...");

setTimeout(() => {
    emitter.emit('greet', 'Dhruv');
}, 1000);

setTimeout(() => {
    emitter.emit('taskDone', 'File Processing');
}, 2000);

console.log("Events scheduled (async demonstration)...");
